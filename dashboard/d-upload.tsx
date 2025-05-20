"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Upload, FileText, AlertCircle, X, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"

type FileStatus = "idle" | "dragging" | "uploading" | "processing" | "success" | "error"

interface UploadedFile {
  id: string
  file: File
  name: string
  size: string
  pages?: number
  status: FileStatus
  progress?: number
  error?: string
}

export function UploadDropzone() {
  const [dragActive, setDragActive] = useState(false)
  const [fileStatus, setFileStatus] = useState<FileStatus>("idle")
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropzoneRef = useRef<HTMLDivElement>(null)

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

  // Generate random number of pages for demo
  const generateRandomPages = () => {
    return Math.floor(Math.random() * 30) + 1
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
      toast({
        title: "Invalid file type",
        description: "Please upload PDF files only",
        variant: "destructive",
      })
      setTimeout(() => {
        setFileStatus("idle")
        setErrorMessage(null)
      }, 3000)
      return
    }

    // Check file size (10MB limit)
    const maxSize = 10 * 1024 * 1024 // 10MB
    const validSizeFiles = pdfFiles.filter((file) => file.size <= maxSize)

    if (validSizeFiles.length < pdfFiles.length) {
      setErrorMessage("Some files exceed the 10MB size limit")
      toast({
        title: "File size limit exceeded",
        description: "Some files exceed the 10MB size limit",
        variant: "destructive",
      })
    }

    if (validSizeFiles.length === 0) {
      setFileStatus("error")
      setTimeout(() => {
        setFileStatus("idle")
      }, 3000)
      return
    }

    // Process each PDF file
    const newFiles = validSizeFiles.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      name: file.name,
      size: formatFileSize(file.size),
      status: "uploading" as FileStatus,
      progress: 0,
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Simulate upload process for each file
    newFiles.forEach((fileObj) => {
      simulateUpload(fileObj)
    })
  }, [])

  // Simulate file upload with progress
  const simulateUpload = (fileObj: UploadedFile) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5

      if (progress >= 100) {
        clearInterval(interval)
        progress = 100

        setUploadedFiles((prev) => {
          const newFiles = [...prev]
          const fileToUpdate = newFiles.findIndex((f) => f.id === fileObj.id && f.status === "uploading")
          if (fileToUpdate !== -1) {
            newFiles[fileToUpdate] = {
              ...newFiles[fileToUpdate],
              status: "processing",
              progress: 100,
            }
          }
          return newFiles
        })

        // Simulate processing time
        setTimeout(() => {
          setUploadedFiles((prev) => {
            const newFiles = [...prev]
            const fileToUpdate = newFiles.findIndex((f) => f.id === fileObj.id && f.status === "processing")
            if (fileToUpdate !== -1) {
              newFiles[fileToUpdate] = {
                ...newFiles[fileToUpdate],
                status: "success",
                pages: generateRandomPages(),
              }
            }
            return newFiles
          })

          setFileStatus("success")
          toast({
            title: "File uploaded successfully",
            description: `${fileObj.name} has been uploaded and processed.`,
          })
        }, 2000)
      } else {
        setUploadedFiles((prev) => {
          const newFiles = [...prev]
          const fileToUpdate = newFiles.findIndex((f) => f.id === fileObj.id && f.status === "uploading")
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

  // Remove file
  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
    toast({
      title: "File removed",
      description: "The file has been removed from the upload list.",
    })
  }

  // Set up global drag and drop handlers
  useEffect(() => {
    const handleWindowDragEnter = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.dataTransfer?.types.includes("Files")) {
        setDragActive(true)
        setFileStatus("dragging")
      }
    }

    const handleWindowDragOver = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
    }

    const handleWindowDrop = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      setFileStatus("idle")
    }

    window.addEventListener("dragenter", handleWindowDragEnter)
    window.addEventListener("dragover", handleWindowDragOver)
    window.addEventListener("drop", handleWindowDrop)

    return () => {
      window.removeEventListener("dragenter", handleWindowDragEnter)
      window.removeEventListener("dragover", handleWindowDragOver)
      window.removeEventListener("drop", handleWindowDrop)
    }
  }, [])

  return (
    <div className="w-full">
      <div
        ref={dropzoneRef}
        className={`relative flex flex-col items-center justify-center w-full h-[300px] ${
          dragActive ? "bg-purple-50" : "bg-white"
        } border-2 border-dashed ${
          dragActive ? "border-purple-500" : "border-purple-300"
        } rounded-lg transition-all duration-300 ease-in-out`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          multiple
          onChange={handleChange}
          className="hidden"
          aria-label="Upload PDF files"
        />

        <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
          <div className="relative">
            <div className="w-16 h-20 bg-white rounded-sm shadow-md flex items-center justify-center">
              <div className="w-14 h-18 border border-gray-200 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-white border-t border-r border-gray-200 absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4"></div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Upload className="w-4 h-4 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mt-4">Click to upload, or drag PDF here</h3>

          <Button
            type="button"
            onClick={onButtonClick}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            <Upload className="w-5 h-5" />
            Upload PDF
          </Button>

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
      </div>

      {/* Uploaded files list */}
      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Uploaded Files</h4>
          <div className="space-y-4">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 truncate">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {file.size} {file.pages && `• ${file.pages} pages`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-13 sm:ml-0">
                  {file.status === "uploading" && (
                    <div className="w-full sm:w-32 md:w-48">
                      <Progress value={file.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">{file.progress}% uploaded</p>
                    </div>
                  )}
                  {file.status === "processing" && (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
                      <span className="text-sm text-gray-600">Processing...</span>
                    </div>
                  )}
                  {file.status === "success" && (
                    <div className="flex items-center gap-2">
                      <div className="rounded-full h-5 w-5 bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                  )}
                  {file.status === "error" && (
                    <div className="flex items-center gap-2">
                      <div className="rounded-full h-5 w-5 bg-red-100 flex items-center justify-center">
                        <X className="h-3 w-3 text-red-600" />
                      </div>
                      <span className="text-sm text-red-600">Failed</span>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(file.id)}
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
