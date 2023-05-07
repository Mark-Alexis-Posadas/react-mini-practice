import React, { useState, useEffect } from "react";
import Card from "./Card";

const DataFetching = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  if (!post || post.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card post={post} />
    </>
  );
};

export default DataFetching;
