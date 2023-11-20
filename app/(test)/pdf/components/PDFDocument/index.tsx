'use client'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

const PDF_SRC = 'https://soya-inner-test.s3.eu-central-2.amazonaws.com/optimizing-for-cwv.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString()

export default function PDFDocument() {
  const [total, setTotal] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  return (
    <div className="flex flex-col items-center py-10">
      <Document
        file={PDF_SRC}
        onLoadSuccess={({ numPages }: { numPages: number }) => setTotal(numPages)}
      >
        {Array.from(new Array(total), (_, index) => (
          <div className="mb-2 border-b">
            <Page
              key={index}
              pageNumber={index + 1}
            />
          </div>
        ))}
      </Document>
      {total && (
        <p onClick={() => setPageNumber(pageNumber + 1)}>
          Page {pageNumber} of {total}
        </p>
      )}
    </div>
  )
}
