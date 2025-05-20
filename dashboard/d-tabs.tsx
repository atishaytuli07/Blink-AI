"use client"

import React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DashboardTabsProps {
  children: React.ReactNode
}

export function DashboardTabs({ children }: DashboardTabsProps) {
  const [activeTab, setActiveTab] = useState("upload")

  // Split children into array to access them by index
  const childrenArray = React.Children.toArray(children)

  return (
    <Tabs defaultValue="upload" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Documents</h2>
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="summaries">My Summaries</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="upload" className="mt-0">
        {childrenArray[0]}
      </TabsContent>

      <TabsContent value="summaries" className="mt-0">
        {childrenArray[1]}
      </TabsContent>
    </Tabs>
  )
}
