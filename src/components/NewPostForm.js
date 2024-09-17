import React, { useState } from "react";

function NewPostForm({ addPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border border-gray-600 rounded-lg bg-[#002244] text-white"
        placeholder="Share your thoughts anonymously..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg"
      >
        Post
      </button>
    </form>
  );
}

export default NewPostForm;
