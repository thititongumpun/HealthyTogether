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
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) =>
      prevPageNumber + offset > 0 ? prevPageNumber + offset : prevPageNumber
    );
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <button className="mx-auto flex items-center justify-center text-white md:hidden">
        <a
          href="./Healthy_Together.pdf"
          download="Healthy_Together"
          className="flex items-center justify-center rounded-full border border-white bg-indigo-600 px-2 py-2 duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:hidden"
        >
          ดาวน์โหลดเอกสารคู่มือการใช้งาน
        </a>
      </button>
      <section className="mx-auto hidden flex-col items-center justify-center md:flex">
        <Document
          file="./Healthy_Together.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loading />}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
        <button className="m-1 mx-auto flex items-center justify-center p-1 text-white">
          <a
            href="./Healthy_Together.pdf"
            download="Healthy_Together"
            className="flex items-center justify-center rounded-full border border-white bg-indigo-600 px-2 py-2 duration-150 hover:bg-indigo-500 active:bg-indigo-700 "
          >
            ดาวน์โหลดเอกสารคู่มือการใช้งาน
          </a>
        </button>
        <div className="mx-auto  max-w-screen-xl px-4 text-gray-600 md:px-8">
          <div className="flex items-center justify-between space-x-4 text-sm font-medium text-gray-600">
            <button
              className="flex items-center gap-x-2 hover:text-indigo-600"
              onClick={previousPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>
            <div>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </div>
            <button
              className="flex items-center gap-x-2 hover:text-indigo-600"
              onClick={nextPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
