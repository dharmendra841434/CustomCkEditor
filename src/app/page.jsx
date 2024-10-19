import EditorPage from "@/components/EditorPage";
import React from "react";

const Home = () => {
  // Text taken from https://en.wikipedia.org/wiki/Quadratic_formula

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-green-100 ">
      <EditorPage />
    </div>
  );
};

export default Home;
