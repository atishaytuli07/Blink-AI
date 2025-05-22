"use client"

import { useState } from "react"
import DashboardLayout from "./d-layout"
import { DashboardShell } from "./d-shell"
import { DashboardHeader } from "./d-header"
import { SummaryList } from "./summaries/page"

export default function SummariesPage() {
  // Mock data for summaries
  const [summaries, setSummaries] = useState([
    {
      id: "1",
      title: "Business Proposal Q2 2025.pdf",
      date: "2025-05-15T10:30:00Z",
      pages: 12,
      status: "completed" as const,
    },
    {
      id: "2",
      title: "Financial Report 2024.pdf",
      date: "2025-05-10T14:20:00Z",
      pages: 28,
      status: "completed" as const,
    },
    {
      id: "3",
      title: "Marketing Strategy.pdf",
      date: "2025-05-05T09:15:00Z",
      pages: 18,
      status: "completed" as const,
    },
    {
      id: "4",
      title: "Research Paper on AI.pdf",
      date: "2025-04-28T16:45:00Z",
      pages: 42,
      status: "completed" as const,
    },
    {
      id: "5",
      title: "Product Roadmap 2025.pdf",
      date: "2025-04-20T11:30:00Z",
      pages: 15,
      status: "completed" as const,
    },
    {
      id: "6",
      title: "Customer Feedback Analysis.pdf",
      date: "2025-04-15T09:45:00Z",
      pages: 32,
      status: "completed" as const,
    },
  ])

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader
          heading="My Summaries"
          text="View and manage your PDF summaries."
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
          <SummaryList summaries={summaries} />
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}
