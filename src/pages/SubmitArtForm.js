import React, { useState } from "react";
import { useArtContext } from "../ArtContext";

function SubmitArtForm({ onSubmit, onClose }) {
  const { addSubmission } = useArtContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [artType, setArtType] = useState("Art");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("artType", artType);
    formData.append("image", image);

    try {
      const response = await fetch("/api/submit-art", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        addSubmission(data); // Pass the submitted data to the context
        onSubmit(data); // Call the onSubmit prop to handle form submission
      } else {
        throw new Error("Failed to submit art");
      }
    } catch (error) {
      console.error("Error submitting art:", error);
    }
  };

  return (
    <div className="relative flex justify-center items-center  fixed inset-0 z-50">
      <div className="bg-zinc-400 border border-black  rounded-[0.5rem] p-8 max-w-lg w-full">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </label>
          <label>
            Art Type:
            <select
              value={artType}
              onChange={(e) => setArtType(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="Art">Art</option>
              <option value="Poem">Poem</option>
              <option value="Handcraft">Handcraft</option>
            </select>
          </label>
          <label>
            Upload Image:
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border p-2 rounded w-full"
              required
            />
          </label>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#4D647C] text-white px-5 p-2 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 px-5 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitArtForm;
