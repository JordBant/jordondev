// import React, { FC, useState } from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { pdfjs } from 'react-pdf';

// // You may need to load the worker script explicitly
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${}/pdf.worker.js`;

// export const PDFViewer: FC<{pdfUrl?: string = ' ' }> = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = () => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <Worker workerUrl={`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
//         <Viewer fileUrl={pdfUrl} />
//       </Worker>
//     </div>
//   );
// };``

