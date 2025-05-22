"use client"
import DashboardLayout from "../d-layout"
import { DashboardShell } from "../d-shell"
import { DashboardHeader } from "../d-header"
import { UploadDropzone } from "../upload-drop"

export default function UploadPage() {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader
          heading="Upload PDF"
          text="Upload your PDF documents for summarization."
          user={
            {
              firstName: "John",
              lastName: "Doe",
              imageUrl: "",
              emailAddresses: [{ emailAddress: "john.doe@example.com" }],
            } as any
          }
        />
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <UploadDropzone />
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}
