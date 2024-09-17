import React from "react";
import Post from "./Post";

function PostList({
  posts,
  addComment,
  deleteComment,
  deletePost,
  toggleComments,
}) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          addComment={addComment}
          deleteComment={deleteComment}
          deletePost={deletePost}
          toggleComments={toggleComments}
        />
      ))}
    </div>
  );
}

export default PostList;
