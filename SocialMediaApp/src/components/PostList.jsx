import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import { PostList as postDemo } from "../store/Store";
import WelcomeMsg from "./WelcomeMsg";
import Spinner from "./Spinner";

function PostList() {
  const { postList , addIntialPost} = useContext(postDemo);
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    setSpinner(true)
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => {
       addIntialPost(data.posts)
       setSpinner(false)
      });

    }, [])
  return (
    <>
    {spinner && <Spinner />}
      {!spinner && postList.length === 0 && <WelcomeMsg />}
      {!spinner && postList.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
