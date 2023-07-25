import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { v4 } from "uuid";
import { Form } from "react-bootstrap";
import Image from "next/image";
export default function Upload() {
  const supabase = useSupabaseClient();
  const [isLoading, setLoading] = useState(false);
  const [imgs, setimages] = useState([]);

  async function onUpload(e) {
    setLoading(true);
    e.preventDefault();
    const file = e.target.files[0];
    if (file === null) {
      return;
    }
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${file.name.replace(".", "") + v4()}`, file);
    if (data) {
      setLoading(false);
      console.log("sucscescesc", data);
      console.log(file);
    } else {
      console.log("erroree", error);
      setLoading(false);
      console.log(file);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="container flex items-center justify-center h-screen p-10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
          loading
        </div>
      )}
      <h1 className="flex p-8 items-center justify-center  text-2xl m-3 font-extrabold">
        just choose and upload
      </h1>
      <div className="container flex items-center justify-center h-screen  ">
        <Form.Group className="flex flex-col bg-black" onSubmit={onUpload}>
          <Form.Control type="file" onChange={onUpload} />
        </Form.Group>
      </div>
      <div></div>
    </>
  );
}
