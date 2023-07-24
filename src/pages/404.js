import { useRouter } from "next/router";
import React from "react";

const Errorpage = () => {
  const router = useRouter();
  return (
    <>
      <h1>404 page not Found !</h1>
      <a onClick={() => router.push("/")}>Go to Homepage</a>
    </>
  );
};

export default Errorpage;
