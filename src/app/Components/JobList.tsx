"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../utils/JobCard";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/jobs/job-list/"
        );
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center p-4">
      <ul className="space-y-4 w-full flex flex-col items-center">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            position={job.position}
            company_name={job.company_name}
            location_restriction={job.location_restriction}
            tags={job.tags}
            created_at={job.created_at}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
