"use client"

import { useState } from "react"
import DashboardLayout from "../d-layout"
import { DashboardShell } from "../d-shell"
import { DashboardHeader } from "../d-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus, Folder, X } from "lucide-react"
import { Toast } from "@/components/ui/toast"

interface FolderType {
  id: string
  name: string
  count: number
}

export default function FoldersPage() {
  const [folders, setFolders] = useState<FolderType[]>([
    { id: "1", name: "Work Documents", count: 12 },
    { id: "2", name: "Research Papers", count: 8 },
    { id: "3", name: "Financial Reports", count: 5 },
    { id: "4", name: "Personal", count: 3 },
  ])
  const [newFolderName, setNewFolderName] = useState("")

  // Create new folder
  const createFolder = () => {
    if (!newFolderName.trim()) {
      Toast({
        title: "Folder name required",
        variant: "destructive",
      })
      return
    }

    const newFolder: FolderType = {
      id: Date.now().toString(),
      name: newFolderName,
      count: 0,
    }

    setFolders([...folders, newFolder])
    setNewFolderName("")

    Toast({
      title: "Folder created",
    })
  }

  // Delete folder
  const deleteFolder = (id: string) => {
    const folderToDelete = folders.find((folder) => folder.id === id)
    setFolders(folders.filter((folder) => folder.id !== id))

    Toast({
      title: "Folder deleted",
    })
  }

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader
          heading="Folders"
          text="Organize your documents into folders."
          user={
            {
              firstName: "John",
              lastName: "Doe",
              imageUrl: "",
              emailAddresses: [{ emailAddress: "john.doe@example.com" }],
            } as any
          }
        />

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Folder</CardTitle>
              <CardDescription>Create a new folder to organize your documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Folder Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter folder name"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setNewFolderName("")}>
                Cancel
              </Button>
              <Button className="bg-[#CCFF00] hover:bg-[#b8e600] text-black" onClick={createFolder}>
                <FolderPlus className="mr-2 h-4 w-4" />
                Create Folder
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {folders.map((folder) => (
              <Card key={folder.id} className="hover:shadow-md transition-shadow relative">
                <button
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100"
                  onClick={() => deleteFolder(folder.id)}
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Folder className="h-5 w-5 text-[#CCFF00]" />
                    {folder.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{folder.count} documents</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}
