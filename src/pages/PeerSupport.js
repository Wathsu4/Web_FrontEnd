import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import NewPostForm from "../components/NewPostForm";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function PeerSupport() {
  const [posts, setPosts] = useState([]);

  /*How to use useEffect and using useEffect hook postsdata.js read, include post state variable */

  const addPost = (content) => {
    // inseart a new post into db via api. Api endpoint is localhost:3001/api/posts/create
    fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json())
      .then((data) =>
        setPosts([
          ...posts,
          {
            id: data.id,
            content,
            comments: [],
            showComments: false,
          },
        ])
      )
      .catch((error) => console.error("Error adding post:", error));
  };

  // Read posts from the backend when the component mounts. Api endpoint is localhost:3001/api/posts
  useEffect(() => {
    fetch("http://localhost:3001/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const deletePost = (postId) => {
    // delete a post from db via api. Api endpoint is localhost:3001/api/posts/:postId/delete
    fetch(`http://localhost:3001/api/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() => setPosts(posts.filter((post) => post.id !== postId)))
      .catch((error) => console.error("Error deleting post:", error));
  };

  const addComment = (postId, comment) => {
    // insert a new comment into db via api. Api endpoint is localhost:3001/api/posts/:postId/comments/create
    console.log("comment is", comment.text);
    fetch(`http://localhost:3001/api/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: comment.text }),
    })
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          posts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  comments: [
                    ...post.comments,
                    { id: data.id, text: comment.text },
                  ],
                }
              : post
          )
        )
      )
      .catch((error) => console.error("Error adding comment:", error));
  };

  const deleteComment = (postId, commentId) => {
    // delete a comment from db via api. Api endpoint is localhost:3001/api/posts/:postId/comments/:commentId/delete
    fetch(`http://localhost:3001/api/posts/${postId}/comments/${commentId}`, {
      method: "DELETE",
    })
      .then(() =>
        setPosts(
          posts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  comments: post.comments.filter(
                    (comment) => comment.id !== commentId
                  ),
                }
              : post
          )
        )
      )
      .catch((error) => console.error("Error deleting comment:", error));
  };

  const toggleComments = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  return (
    <div>
      <NavBar />
      <div className="pt-24 pb-8 mx-64  ">
        <div className="pt-4 pb-16 font-serif ">
          <h1 className="text-white bg-[#3D638A] bg-opacity-70 text-[40px] flex w-full justify-center font-serif py-[5px] [word-spacing:0.50rem]  mb-8">
            Welcome to SoulCare+ Anonymous Peer Support!
          </h1>
          <p className="text-[20px] font-serif text-justify">
            At SoulCare+, we believe in the power of community and the
            importance of a safe space to share your thoughts and feelings. Our
            Anonymous Peer Support feature allows you to post about your mental
            health experiences, challenges, or simply express yourself without
            revealing your identity. Engage with others through supportive and
            anonymous comments, foster meaningful connections, and know that
            you're not alone on this journey. We also provide options to manage
            your posts and comments, ensuring a comfortable and personalized
            experience. Join us in creating a compassionate and understanding
            community where your voice is heard, and your privacy is respected.
          </p>
        </div>
        <NewPostForm addPost={addPost} />
        <PostList
          posts={posts}
          addComment={addComment}
          deleteComment={deleteComment}
          deletePost={deletePost}
          toggleComments={toggleComments}
        />
      </div>
      <Footer />
    </div>
  );
}

export default PeerSupport;
