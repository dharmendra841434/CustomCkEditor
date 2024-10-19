// components/custom-editor.js
"use client"; // only in App Router

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Autoformat,
  Bold,
  Italic,
  Underline,
  BlockQuote,
  Base64UploadAdapter,
  CloudServices,
  CKBox,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
} from "ckeditor5";
import MathType from "@wiris/mathtype-ckeditor5/dist/index.js";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

function MyCustomEditor({ content, setContent }) {
  const handleEditorChange = (event, editor) => {
    console.log(editor, "this");
    const data = editor?.getData(); // Get the current content of the editor
    setContent(data); // Update the state with the editor content
  };
  return (
    <div className="px-6 pt-12 w-[90%] ">
      <CKEditor
        editor={ClassicEditor}
        onChange={handleEditorChange}
        onReady={(editor) => {
          console.log(editor, "fhskdfh");
        }}
        data={content} // Initialize the editor with the current content
        config={{
          toolbar: {
            items: [
              "heading",
              "fontsize",
              "alignment",
              "fontColor",
              "fontBackgroundColor",
              "outdent",
              "indent",
              "|",
              "bold",
              "italic",
              "link",
              "MathType",
              "ChemType",
              "bulletedList",
              "numberedList",
              "imageUpload",
              "mediaEmbed",
              "insertTable",
              "blockQuote",
              "undo",
              "redo",
              "|",
            ],
          },
          plugins: [
            Autoformat,
            Bold,
            Italic,
            Underline,
            BlockQuote,
            Base64UploadAdapter,
            CloudServices,
            CKBox,
            Essentials,
            Heading,
            Image,
            MathType,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            PictureEditing,
            Indent,
            IndentBlock,
            Link,
            List,
            MediaEmbed,
            Mention,
            Paragraph,
            PasteFromOffice,
            Table,
            TableColumnResize,
            TableToolbar,
            TextTransformation,
          ],

          mention: {
            // Mention configuration
          },
        }}
      />
    </div>
  );
}

export default MyCustomEditor;
