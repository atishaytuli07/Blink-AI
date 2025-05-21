import { FileText, Clock, BarChart, FileDown } from "lucide-react";

interface StatsCardsProps {
  stats: {
    totalSummaries: number;
    totalPages: number;
    timeSaved: string;
    wordsReduced: string;
  };
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Summaries
          </h3>
          <div className="w-8 h-8 bg-[#CCFF00]/20 rounded-full flex items-center justify-center">
            <FileText className="h-4 w-4 text-[#CCFF00]" />
          </div>
        </div>
        <p className="text-2xl font-bold font-bm">{stats.totalSummaries}</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Pages Processed
          </h3>
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <FileDown className="h-4 w-4 text-blue-500" />
          </div>
        </div>
        <p className="text-2xl font-bold font-bm">{stats.totalPages}</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Time Saved
          </h3>
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Clock className="h-4 w-4 text-purple-500" />
          </div>
        </div>
        <p className="text-2xl font-bold font-bm">{stats.timeSaved}</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Words Reduced
          </h3>
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <BarChart className="h-4 w-4 text-green-500" />
          </div>
        </div>
        <p className="text-2xl font-bold font-bm">{stats.wordsReduced}</p>
      </div>
    </div>
  );
}
