import React, { useState } from "react";

function Post({ post, addComment, deleteComment, deletePost, toggleComments }) {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, { id: Date.now(), text: comment });
      setComment("");
    }
  };

  return (
    <div className="p-4 mb-4 border border-gray-300 rounded-md font-serif bg-[#002244] text-white">
      <div className="flex items-center justify-between">
        <p className="mb-2">{post.content}</p>
        <button
          onClick={() => deletePost(post.id)}
          className="text-red-500 bg-gray-300 p-2 rounded-md"
        >
          Delete Post
        </button>
      </div>

      <div className="flex items-center justify-between ">
        <button
          onClick={() => toggleComments(post.id)}
          className="px-4 py-1 mt-2 text-white bg-blue-400 rounded-md bg-[#002244] text-white"
        >
          {post.showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {post.showComments && (
        <>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#002244] text-white"
              placeholder="Comment anonymously..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 mt-2 text-white bg-green-500 rounded-md "
            >
              Comment
            </button>
          </form>

          <div className="mt-4">
            {post.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center justify-between p-2 mt-2  rounded-md bg-[#002244] text-white"
              >
                <p className="text-sm">{comment.text}</p>
                <button
                  onClick={() => deleteComment(post.id, comment.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
