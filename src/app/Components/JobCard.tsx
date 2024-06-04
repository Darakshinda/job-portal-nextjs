import React from "react";
interface JobCardProps {
  id: number;
  position: string;
  company_name: string;
  location_restriction: string;
  tags: string;
  created_at: string;
}

const JobCard: React.FC<JobCardProps> = ({ id, position, company_name, location_restriction, tags, created_at }) => {
  const getTimeDifference = (createdAt: string) => {
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt);
    const timeDifference = currentTime.getTime() - createdAtTime.getTime();

    if (timeDifference < 5000) { // If less than 5 seconds
      return "Just now";
    }

    const minutes = Math.floor(timeDifference / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return `${timeDifference / 1000}s`; // Convert milliseconds to seconds
    }
  };

  return (
    <li className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 transition-transform transform hover:scale-105 flex flex-col items-start">
      <div className="flex justify-between w-full mb-2">
        <h3 className="text-lg font-bold">{position}</h3>
      </div>
      <div className="flex items-center w-full mb-2">
        <div className="w-2/5">
          <p className="text-gray-700">{company_name}</p>
        </div>
        {tags && tags.split(',').map((tag, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-1 ml-2">
            <p className="text-black-400">{tag.trim()}</p>
          </div>
        ))}
        <div className="ml-auto flex items-center">
          <p className="text-black-500 mr-32">{getTimeDifference(created_at)}</p>
          <button className="border border-gray-300 rounded-md px-2 py-2 w-16">Apply</button>
        </div>
      </div>
      <p className="border border-gray-300 rounded-md px-2 py-2 text-black-500 text-center">{location_restriction}</p>
    </li>
  );
};

export default JobCard;
