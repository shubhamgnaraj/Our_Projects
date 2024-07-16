import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PostList } from "../store/Store";

function Cards({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card " style={{ width: "25rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <RxCross2 />
        </span>
        <h5 className="card-title tittle">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <a key={tag} href="#" className="btn btn-primary hash_tag">
            {tag}
          </a>
        ))}
        <div className="alert alert-success reaction" role="alert">
          {" "}
          the reaction of your story{" "}
          <span className="post_reaction">{post.reaction}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
