"use client"

import type React from "react"

import { useState } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"
import { FileText, Home, FolderPlus, Upload, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <SidebarProvider defaultOpen={open} onOpenChange={setOpen}>
      <div className="flex h-screen">
        <Sidebar className="border-r bg-[#1E1E1E] text-white">
          <SidebarHeader className="p-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#CCFF00] rounded-md w-8 h-8 flex items-center justify-center">
                <span className="text-black font-bold">B</span>
              </div>
              <span className="font-bold text-xl">BLINK AI</span>
            </Link>
          </SidebarHeader>

          <SidebarContent className="px-2">
            <div className="mb-4">
              <Button
                variant="default"
                className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black flex items-center justify-center gap-2 rounded-lg py-6"
                asChild
              >
                <Link href="/dashboard/upload">
                  <Upload className="h-5 w-5" />
                  <span>Upload PDF</span>
                </Link>
              </Button>
            </div>

            <div className="mb-4">
              <Button
                variant="outline"
                className="w-full border-gray-700 text-white hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2 rounded-lg py-6"
                asChild
              >
                <Link href="/dashboard/folders">
                  <FolderPlus className="h-5 w-5" />
                  <span>New Folder</span>
                </Link>
              </Button>
            </div>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/summaries">
                    <FileText className="h-5 w-5" />
                    <span>My Summaries</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="mt-auto p-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserButton afterSignOutUrl="/" />
                <div className="text-sm">
                  <div className="font-medium">Account</div>
                  <div className="text-gray-400 text-xs">Free Plan</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSignOut}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-[#F5F5EB]">
          <div className="flex items-center p-4 md:hidden">
            <SidebarTrigger />
          </div>
          <div className="flex-1 overflow-auto p-4 md:p-8">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
