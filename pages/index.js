import { useEffect, useState } from "react";
import { GetImages } from "@/api_util/apiutil";
import PictureCardsList from "@/components/PictureCardsList";
import { storage } from "../supabse/supabse";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Home = (props) => {
  const [data, setData] = useState([]);
  const supabase = useSupabaseClient();

  async function GETIMGS() {
    const cdn =
      "https://pqwjzqrgrxyzoxawcriq.supabase.co/storage/v1/object/public/images/";
    const { data, error } = await supabase.storage.from("images").list();
    if (data !== null) {
      data.map((img, index) => {
        var url = cdn.concat(img.name);
        setData((prev) => [...prev, url]);
      });
    } else {
      console.error(error);
    }
  }
  useEffect(() => {
    GETIMGS();
  }, []);

  useEffect(() => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  }, [data]);

  return (
    <>
      <div>
        <PictureCardsList data={data}> </PictureCardsList>
      </div>
    </>
  );
};
export default Home;
