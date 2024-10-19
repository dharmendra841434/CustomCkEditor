"use client";

import React, { useState } from "react";
import MyCustomEditor from "./editors/MyCustomEditor";
import KatexSpan from "./mathType/KatexSpan";

const EditorPage = () => {
  const [editorContent, setEditorContent] = useState("");
  const quadraticEquationTest = `Given a general quadratic equation of the form
    $$ax^{2} + bx + c = 0$$
    with $x$ representing an unknown, with $a$, $b$ and $c$ representing constants, and with $a \\ne 0$, the quadratic formula is:
    $$x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$$`;
  return (
    <div className="flex flex-col items-center w-full ">
      <MyCustomEditor content={editorContent} setContent={setEditorContent} />
      <div className="mt-5 ">
        <KatexSpan text={quadraticEquationTest} className="text-xl " />
      </div>
    </div>
  );
};

export default EditorPage;
