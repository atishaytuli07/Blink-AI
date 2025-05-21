import { formatDistanceToNow } from "date-fns";
import { FileText, MoreHorizontal, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface Summary {
  id: string;
  title: string;
  date: string;
  pages: number;
  status: "completed" | "processing" | "failed";
}

interface SummaryListProps {
  summaries: Summary[];
}

export function SummaryList({ summaries }: SummaryListProps) {
  if (summaries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center mb-4">
          <FileText className="h-6 w-6 text-black" />
        </div>
        <h3 className="text-lg font-bold font-bm mb-1">No summaries yet</h3>
        <p className="text-muted-foreground mb-4">
          Upload your first PDF to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {summaries.map((summary) => (
        <div
          key={summary.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F0F0F0] rounded-md flex items-center justify-center">
              <FileText className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h3 className="font-medium">{summary.title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>
                  {formatDistanceToNow(new Date(summary.date), {
                    addSuffix: true,
                  })}
                </span>
                <span>•</span>
                <span>{summary.pages} pages</span>
                <Badge variant="outline" className="ml-1 text-xs">
                  {summary.status === "completed"
                    ? "Completed"
                    : summary.status === "processing"
                    ? "Processing"
                    : "Failed"}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-700"
            >
              <Download className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Summary</DropdownMenuItem>
                <DropdownMenuItem>Download PDF</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
}
