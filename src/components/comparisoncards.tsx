import { FileIcon, LightbulbIcon } from "lucide-react";
import type React from "react";

interface ComparisonCardProps {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
}

const ComparisonCard = ({
  beforeContent,
  afterContent,
}: ComparisonCardProps) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-32">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Before Card */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg transform rotate-[-7deg] p-4 z-10 relative">
          {/* Before Tab */}
          <div className="absolute -top-2 left-4 bg-white px-2 py-1 rounded-full shadow-inner border border-gray-200 sadow-md">
            <div className="flex items-center">
              <FileIcon size={12} className="text-gray-400" />
              <span className="text-sm ml-2 font-medium text-gray-600">
                PDF Chaos
              </span>
            </div>
          </div>

          <div className="p-2 pt-4">{beforeContent}</div>
        </div>

        {/* After Card */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg transform rotate-[7deg] p-4 md:ml-[-50px] z-20 relative">
          {/* After Tab */}
          <div className="absolute -top-2 left-4 bg-white px-2 py-1 rounded-full shadow-inner border border-gray-200 shadow-md">
            <div className="flex items-center">
              <LightbulbIcon size={12} className="text-gray-400" />
              <span className="text-sm ml-2 font-medium text-gray-600">
                AI Clarity
              </span>
            </div>
          </div>

          <div className="p-2 pt-4">{afterContent}</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;
