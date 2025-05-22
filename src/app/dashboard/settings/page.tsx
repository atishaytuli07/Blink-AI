"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import DashboardLayout from "../d-layout"
import { DashboardShell } from "../d-shell"
import { DashboardHeader } from "../d-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toast } from "@/components/ui/toast"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [compactView, setCompactView] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [summaryComplete, setSummaryComplete] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)

  const handleSaveProfile = () => {
    Toast({
      title: "Profile updated",
    })
  }

  const handleUpgrade = () => {
    Toast({
      title: "Upgrade initiated",
    })
  }

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader
          heading="Settings"
          text="Manage your account settings and preferences."
          user={
            {
              firstName: "John",
              lastName: "Doe",
              imageUrl: "",
              emailAddresses: [{ emailAddress: "john.doe@example.com" }],
            } as any
          }
        />

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>Manage your profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <div className="mt-1 p-2 border rounded-md bg-gray-50">John Doe</div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="mt-1 p-2 border rounded-md bg-gray-50">john.doe@example.com</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={handleSaveProfile}>
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable dark mode for the dashboard.</p>
                    </div>
                    <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="compact-view">Compact View</Label>
                      <p className="text-sm text-muted-foreground">Use a more compact layout.</p>
                    </div>
                    <Switch id="compact-view" checked={compactView} onCheckedChange={setCompactView} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email.</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="summary-complete">Summary Completion</Label>
                    <p className="text-sm text-muted-foreground">Get notified when a summary is complete.</p>
                  </div>
                  <Switch id="summary-complete" checked={summaryComplete} onCheckedChange={setSummaryComplete} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive marketing and promotional emails.</p>
                  </div>
                  <Switch id="marketing-emails" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your subscription and billing information.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-[#F5F5EB] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Current Plan</h3>
                    <Badge variant="outline">Free</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    You are currently on the Free plan. Upgrade to unlock more features.
                  </p>
                  <Button className="bg-[#CCFF00] hover:bg-[#b8e600] text-black" onClick={handleUpgrade}>
                    Upgrade to Pro
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Free Plan</h3>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 5 PDF summaries per month</li>
                      <li>• Max 20 pages per PDF</li>
                      <li>• Basic summarization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Pro Plan</h3>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Unlimited PDF summaries</li>
                      <li>• Unlimited pages per PDF</li>
                      <li>• Advanced summarization</li>
                      <li>• Priority processing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DashboardShell>
    </DashboardLayout>
  )
}
