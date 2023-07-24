import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
      <h1>about</h1>
      {/* <Image src="/1458.jpg" width="200" height="150"></Image> */}
      <Image
        src="https://picsum.photos/200/300"
        width="200"
        height="150"
        alt="random"
      ></Image>
    </>
  );
};

export default about;
