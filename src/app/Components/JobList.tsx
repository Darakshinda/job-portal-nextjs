"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fetchCount = 10;

  const bottomBoundaryRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/jobs/job-list/?limit=${fetchCount}&offset=${(page - 1) * fetchCount}`
        );
        setJobs((prevJobs) => [...prevJobs, ...response.data]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
      setLoading(false);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [baseUrl, loading, page]);

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
        {/* Rendered at the bottom of the list */}
        <li ref={bottomBoundaryRef} />
      </ul>
    </div>
  );
};

export default JobList;
