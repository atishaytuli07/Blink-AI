import { formatDistanceToNow } from "date-fns"
import { Activity } from "lucide-react"

interface ActivityItem {
  id: string
  action: string
  documentName: string
  timestamp: string
}

interface RecentActivityProps {
  activities: ActivityItem[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Activity</h2>
        <Activity className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#F0F0F0] rounded-full flex items-center justify-center mt-1">
                <span className="text-xs font-medium text-gray-500">{activity.action === "Uploaded" ? "U" : "S"}</span>
              </div>
              <div>
                <p className="font-medium text-sm">
                  <span className="text-gray-600">{activity.action}</span> <span>{activity.documentName}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
