import React, { createContext, useContext, useState } from "react";

const ArtContext = createContext();

export function ArtProvider({ children }) {
  const [submissions, setSubmissions] = useState([]);

  const addSubmission = (submission) => {
    setSubmissions((prevSubmissions) => [...prevSubmissions, submission]);
  };

  return (
    <ArtContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </ArtContext.Provider>
  );
}

export const useArtContext = () => useContext(ArtContext);
