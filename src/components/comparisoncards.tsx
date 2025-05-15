
import React from 'react';

interface ComparisonCardProps {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
}

const ComparisonCard = ({ beforeContent, afterContent }: ComparisonCardProps) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Before Card */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg transform rotate-[-4deg] p-4 z-10">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-2 text-sm font-medium">Before</span>
          </div>
          <div className="p-2">
            {beforeContent}
          </div>
        </div>
        
        {/* After Card */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg transform rotate-[4deg] p-4 md:ml-[-20px] z-20">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-2 text-sm font-medium">After</span>
          </div>
          <div className="p-2">
            {afterContent}
          </div>
        </div>
      </div>
      
      {/* Paper Stack Under Cards */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[80%] h-6 bg-gray-100 rounded-b-lg z-0 flex justify-around px-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-1 h-full bg-gray-200"></div>
        ))}
      </div>
      
      <div className="absolute bottom-[-26px] left-1/2 transform -translate-x-1/2 w-[70%] h-6 bg-gray-50 rounded-b-lg z-[-1] flex justify-around px-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-1 h-full bg-gray-100"></div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonCard;