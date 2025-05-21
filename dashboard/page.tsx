import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import DashboardLayout from "./d-layout"
import { DashboardShell } from "./d-shell"
import { DashboardHeader } from "./d-header"
import { StatsCards } from "./d-cards"
import { RecentActivity } from "./d-activity"

export default async function DashboardPage() {
  const user = await currentUser()

  // Redirect if not signed in
  if (!user) {
    redirect("/sign-in")
  }

  // Mock data for summaries
  // const summaries = [
  //   {
  //     id: "1",
  //     title: "Business Proposal Q2 2025.pdf",
  //     date: "2025-05-15T10:30:00Z",
  //     pages: 12,
  //     status: "completed",
  //   },
  //   {
  //     id: "2",
  //     title: "Financial Report 2024.pdf",
  //     date: "2025-05-10T14:20:00Z",
  //     pages: 28,
  //     status: "completed",
  //   },
  //   {
  //     id: "3",
  //     title: "Marketing Strategy.pdf",
  //     date: "2025-05-05T09:15:00Z",
  //     pages: 18,
  //     status: "completed",
  //   },
  //   {
  //     id: "4",
  //     title: "Research Paper on AI.pdf",
  //     date: "2025-04-28T16:45:00Z",
  //     pages: 42,
  //     status: "completed",
  //   },
  // ]

  // Mock data for recent activity
  const recentActivity = [
    {
      id: "1",
      action: "Summarized",
      documentName: "Business Proposal Q2 2025.pdf",
      timestamp: "2025-05-15T10:35:00Z",
    },
    {
      id: "2",
      action: "Uploaded",
      documentName: "Business Proposal Q2 2025.pdf",
      timestamp: "2025-05-15T10:30:00Z",
    },
    {
      id: "3",
      action: "Summarized",
      documentName: "Financial Report 2024.pdf",
      timestamp: "2025-05-10T14:25:00Z",
    },
    {
      id: "4",
      action: "Uploaded",
      documentName: "Financial Report 2024.pdf",
      timestamp: "2025-05-10T14:20:00Z",
    },
  ]

  // Mock data for stats
  const stats = {
    totalSummaries: 24,
    totalPages: 486,
    timeSaved: "12.5 hours",
    wordsReduced: "125,000",
  }

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text="Manage your PDF summaries and upload new documents." user={user} />

        <StatsCards stats={stats} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* <DashboardTabs>
              <UploadDropzone />
              
              <SummaryList summaries={summaries} />
            </DashboardTabs> */}
          </div>
          <div>
            <RecentActivity activities={recentActivity} />
          </div>
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}
