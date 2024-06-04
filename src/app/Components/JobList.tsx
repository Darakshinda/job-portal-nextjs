"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";

// Define an interface representing the structure of a job object
interface Job {
  id: number;
  position: string;
  company_name: string;
  location_restriction: string;
  tags: string;
  created_at: string;
  // Add other properties as needed
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]); // Specify the type of jobs as Job[]
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/jobs/job-list/`);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div className="flex justify-center p-4">
      <ul className="space-y-4 w-full flex flex-col items-center">
        {jobs.map(
          ({
            id,
            position,
            company_name,
            location_restriction,
            tags,
            created_at,
          }) => (
            <JobCard
              key={id}
              id={id}
              position={position}
              company_name={company_name}
              location_restriction={location_restriction}
              tags={tags}
              created_at={created_at}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default JobList;
