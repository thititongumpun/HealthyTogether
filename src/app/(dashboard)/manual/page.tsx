"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";
import Loading from "@/app/components/Loading";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {};

export default function ManualPage({}: Props) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
    setNumPages(nextNumPages);
  }

  return (
    <main className="mx-auto flex items-center justify-center">
      <Document
        file="./Healthy_Together.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Loading />}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </main>
  );
}
