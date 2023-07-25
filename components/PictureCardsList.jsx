import React from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { BsShare } from "react-icons/bs";

import { saveAs } from "file-saver";
import { AiOutlineDownload, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const PictureCardsList = (props) => {
  const getIMG = (id) => {
    const selected = data.filter((img, index) => img.id === id);
    return selected;
  };
  const handleDownload = (id) => {
    saveAs(data[id], "brakewizard");
  };
  const handleShare = (id) => {
    navigator.clipboard.writeText(data[id]);
  };
  const { data } = props;

  if (!data) {
    return (
      <div className="main-container my-4 flex content-center snap-center self-center p-8">
        loading....
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="flex flex-col p-5 ">
        {data.map((img, index) => {
          try {
            return (
              <div
                className="main-container my-4 content-center snap-center self-center"
                key={index}
              >
                <img
                  className="card rounded-md h-auto w-72"
                  src={img}
                  alt="lol"
                  width={300}
                  height={600}
                />

                <div className="flex flex-row justify-center space-x-14 bg-slate-500 py-3 my-1 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                  <button className="btn rounded-sm font-sans  text-lg  px-2 py-1 active:text-red-500 focus:text-red-900">
                    <AiOutlineHeart />{" "}
                  </button>

                  <button
                    className="btn rounded-sm font-sans focus:text-blue-900  text-lg  px-2 py-1 "
                    onClick={() => {
                      handleDownload(index);
                    }}
                  >
                    <AiOutlineDownload />
                  </button>

                  <button
                    className="btn rounded-sm font-sans     px-2 py-1 "
                    onClick={() => handleShare(index)}
                  >
                    <BsShare />{" "}
                  </button>
                </div>
              </div>
            );
          } catch {
            return <h1>not availbenael</h1>;
          }
        })}
      </div>
      <Footer />
    </>
  );
};
export default PictureCardsList;
