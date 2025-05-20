"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [open, setOpen] = useState(!isMobile)
  const { signOut } = useClerk()
  const router = useRouter()
  const pathname = usePathname()

  // Update sidebar state when screen size changes
  useEffect(() => {
    setOpen(!isMobile)
  }, [isMobile])

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <SidebarProvider defaultOpen={open} onOpenChange={setOpen}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="border-r bg-[#1E1E1E] text-white fixed left-0 top-0 bottom-0 z-40">
          <SidebarHeader className="p-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#CCFF00] rounded-md w-8 h-8 flex items-center justify-center">
                <span className="text-black font-bold">B</span>
              </div>
              {open && <span className="font-bold text-xl">BLINK AI</span>}
            </Link>
          </SidebarHeader>

          <SidebarContent className="px-2">
            <div className="mb-4">
              <Button
                variant="default"
                className={`w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black flex items-center justify-center gap-2 rounded-lg py-6 ${
                  !open ? "px-0" : "px-4"
                }`}
                asChild
              >
                <Link href="/dashboard/upload">
                  <Upload className="h-5 w-5" />
                  {open && <span>Upload PDF</span>}
                </Link>
              </Button>
            </div>

            <div className="mb-4">
              <Button
                variant="outline"
                className={`w-full border-gray-700 text-white hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2 rounded-lg py-6 ${
                  !open ? "px-0" : "px-4"
                }`}
                asChild
              >
                <Link href="/dashboard/folders">
                  <FolderPlus className="h-5 w-5" />
                  {open && <span>New Folder</span>}
                </Link>
              </Button>
            </div>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    {open && <span>Dashboard</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/summaries")}>
                  <Link href="/dashboard/summaries">
                    <FileText className="h-5 w-5" />
                    {open && <span>My Summaries</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    {open && <span>Settings</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="mt-auto p-4 border-t border-gray-800">
            <div className={`flex items-center ${open ? "justify-between" : "justify-center"}`}>
              {open ? (
                <>
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
                </>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-[#F5F5EB] w-full">
          <div className="sticky top-0 z-30 flex items-center p-4 bg-[#F5F5EB] border-b md:hidden">
            <SidebarTrigger className="mr-2" />
            <div className="flex items-center gap-2">
              <div className="bg-[#CCFF00] rounded-md w-8 h-8 flex items-center justify-center">
                <span className="text-black font-bold">B</span>
              </div>
              <span className="font-bold">BLINK AI</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 md:p-8 pb-20">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
