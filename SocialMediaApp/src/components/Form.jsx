import React, { useContext, useRef } from "react";
import { PostList } from "../store/Store";
function Form() {
  const { addPost } = useContext(PostList);
  const userNameIdElem = useRef();
  const titleNameElem = useRef();
  const contentElem = useRef();
  const tagsNameElem = useRef();

  const submitForm = (event) => {
    event.preventDefault();

    const userName = userNameIdElem.current.value;
    const titleName = titleNameElem.current.value;
    const content = contentElem.current.value;
    const tagsName = tagsNameElem.current.value.split(" ");
    console.log(tagsName)
    
      addPost(userName, titleName, content, tagsName,)


    userNameIdElem.current.value = "";
    titleNameElem.current.value = "";
    contentElem.current.value = "";
    tagsNameElem.current.value = "";
  };
  return (
    <form className="form" onSubmit={submitForm}>
      <div className="mb-3 ">
        <label htmlFor="userId" className="form-label">
          User-Id
        </label>
        <input type="text" className="form-control" ref={userNameIdElem} />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" ref={titleNameElem} />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Content
        </label>
        <textarea type="text" className="form-control" ref={contentElem} />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Tags
        </label>
        <input type="text" className="form-control" ref={tagsNameElem} />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
