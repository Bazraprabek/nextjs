import Link from "next/link";
import React from "react";

const product = ({ posts }) => {
  return (
    <>
      {posts.slice(0, 5).map((value) => {
        return (
          <Link href={"/blog/" + value.id} key={value.id}>
            {value.title}
          </Link>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      posts: data.products,
    },
  };
}

export default product;
