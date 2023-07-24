// import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const paths = data.products.map((value) => {
    return {
      params: {
        pageNo: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  // const router = useRouter();
  // const pgn = router.query.pageNo;

  return (
    <>
      <h1>My product is {data.title}</h1>
    </>
  );
};

export default pageNo;
