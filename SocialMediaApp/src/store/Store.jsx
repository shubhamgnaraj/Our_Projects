import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addIntialPost: () => {}
});

const postReducer = (currValPost, action) => {
  let newPostArr = currValPost;
  if (action.type === "DELETE_POST") {
    newPostArr = currValPost.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostArr = [action.payload, ...currValPost];
  } else if (action.type === 'ADD_INTIAL_POSTS'){
    newPostArr = action.payload.post
  }
  return newPostArr;
};

const PostProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, []);

  const addPost = (
    userName,
    titleName,
    content,
    tagsName,
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        tittle: titleName,
        body: content,
        reaction: 15,
        userId: userName,
        tags: tagsName,
      },
    });
  };

  const addIntialPost = (post) => {
    dispatchPostList({
      type: 'ADD_INTIAL_POSTS',
      payload: {
        post
      }
    })

  }

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addIntialPost
      }}
    >
      {children}
    </PostList.Provider>
  );
};


export default PostProvider;
