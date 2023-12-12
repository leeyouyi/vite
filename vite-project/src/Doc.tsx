// import * as DocxJS from "docx";
// import { Document, Packer, Paragraph, TextRun } from "docx";
import { Document as Docx } from "docx";
// const DocxJS = require("docx");
// import { load, Packer, Paragraph, TextRun } from "docx";
import Docxtemplater from "docxtemplater";
import JSZip from "jszip";
import mammoth from "mammoth";

function Doc() {
  const fileInput = document.getElementById("fileInput") as HTMLInputElement;
  if (fileInput !== null) {
  }
  const onchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        console.log(file);
        // const blob = file.slice(0, file.size);
        const reader = new FileReader();
        // reader.readAsText(blob, "utf-8");
        // console.log(reader);

        console.log(reader);
        reader.onload = (event) => {
          console.log(event);
          if (event.target !== null) {
            const arrayBuffer = event.target.result as ArrayBuffer;
            console.log(arrayBuffer);

            // const docx = new Docx(arrayBuffer);
            // const wordData = new Uint8Array(arrayBuffer);
            // 使用 Docx.js 库解析 Word 文件为 JSON 格式
            // const docx = new Docx();
            // docx.load(file);
            // const jsonData = docxJS.getJSON();
            // console.log(jsonData);
            // const zip = new JSZip();
            // zip.loadAsync(arrayBuffer).then(function (zip) {
            //   console.log(zip);
            //   // var doc = new Docxtemplater().loadZip(zip);
            //   // var text = doc.getFullText();
            //   // console.log(doc);
            //   // console.log(text);
            // });

            mammoth
              .convertToHtml({ arrayBuffer })
              .then(function (resultObject) {
                // let result1 = document.querySelector("#result1");
                // result1.innerHTML = resultObject.value;
                console.log(resultObject);
              });
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return <input type="file" id="fileInput" onChange={onchange} />;
}

export default Doc;
