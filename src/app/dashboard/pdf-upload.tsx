"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Upload, ChevronDown, FileText, AlertCircle } from "lucide-react"

type FileStatus = "idle" | "dragging" | "uploading" | "success" | "error"

interface UploadedFile {
  file: File
  name: string
  size: string
  status: "uploading" | "success" | "error"
  progress?: number
  error?: string
}

export default function PdfUploader() {
  const [dragActive, setDragActive] = useState(false)
  const [fileStatus, setFileStatus] = useState<FileStatus>("idle")
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle drag events
  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement | HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
      setFileStatus("dragging")
    } else if (e.type === "dragleave") {
      setDragActive(false)
      setFileStatus("idle")
    }
  }, [])

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  // Process files
  const processFiles = useCallback(async (files: FileList) => {
    setErrorMessage(null)
    setFileStatus("uploading")

    // Convert FileList to array
    const fileArray = Array.from(files)

    // Filter for PDF files only
    const pdfFiles = fileArray.filter((file) => file.type === "application/pdf")

    if (pdfFiles.length === 0) {
      setErrorMessage("Please upload PDF files only")
      setFileStatus("error")
      setTimeout(() => {
        setFileStatus("idle")
        setErrorMessage(null)
      }, 3000)
      return
    }

    // Process each PDF file
    const newFiles = pdfFiles.map((file) => ({
      file,
      name: file.name,
      size: formatFileSize(file.size),
      status: "uploading" as const,
      progress: 0,
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Simulate upload process for each file
    newFiles.forEach((fileObj, index) => {
      simulateUpload(fileObj, index)
    })
  }, [])

  // Simulate file upload with progress
  const simulateUpload = (fileObj: UploadedFile, fileIndex: number) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5

      if (progress >= 100) {
        clearInterval(interval)
        progress = 100

        setUploadedFiles((prev) => {
          const newFiles = [...prev]
          const fileToUpdate = newFiles.findIndex((f) => f.name === fileObj.name && f.status === "uploading")
          if (fileToUpdate !== -1) {
            newFiles[fileToUpdate] = {
              ...newFiles[fileToUpdate],
              status: "success",
              progress: 100,
            }
          }
          return newFiles
        })

        setFileStatus("success")
        setTimeout(() => {
          setFileStatus("idle")
        }, 2000)
      } else {
        setUploadedFiles((prev) => {
          const newFiles = [...prev]
          const fileToUpdate = newFiles.findIndex((f) => f.name === fileObj.name && f.status === "uploading")
          if (fileToUpdate !== -1) {
            newFiles[fileToUpdate] = {
              ...newFiles[fileToUpdate],
              progress,
            }
          }
          return newFiles
        })
      }
    }, 200)
  }

  // Handle drop event
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement | HTMLFormElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files)
      }
    },
    [processFiles],
  )

  // Handle file input change
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()

      if (e.target.files && e.target.files.length > 0) {
        processFiles(e.target.files)
      }
    },
    [processFiles],
  )

  // Handle button click
  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <form
        className={`relative flex flex-col items-center justify-center w-full ${
          dragActive ? "bg-purple-50" : "bg-white"
        } border-2 border-dashed ${
          dragActive ? "border-purple-500" : "border-purple-300"
        } rounded-lg p-8 transition-all duration-300 ease-in-out`}
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input ref={inputRef} type="file" accept=".pdf" multiple onChange={handleChange} className="hidden" />

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Upload className="w-4 h-4 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mt-4">Click to upload, or drag PDF here</h3>

          <button
            type="button"
            onClick={onButtonClick}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            <Upload className="w-5 h-5" />
            Upload PDF
            <ChevronDown className="w-5 h-5 ml-1" />
          </button>

          {errorMessage && (
            <div className="flex items-center gap-2 text-red-500 mt-2">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Handwritten annotation - only visible on larger screens */}
        <div className="absolute -top-10 right-4 hidden md:block">
          <div className="relative">
            <div className="font-handwritten text-purple-700 text-lg transform rotate-[-5deg]">
              DRAG & DROP YOUR
              <br />
              PDF FILE HERE
            </div>
            <div className="absolute top-12 right-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30C25 25 35 15 38 2" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
                <path d="M38 2C35 5 30 5 25 3" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </form>

      {/* Uploaded files list */}
      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Uploaded Files</h4>
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-800">{file.name}</p>
                    <p className="text-sm text-gray-500">{file.size}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {file.status === "uploading" && (
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${file.progress}%` }}></div>
                    </div>
                  )}
                  {file.status === "success" && <span className="text-green-500 font-medium">Uploaded</span>}
                  {file.status === "error" && (
                    <span className="text-red-500 font-medium">{file.error || "Failed"}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
