import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import JobCard from "./JobCard";

interface Job {
  id: number;
  position: string;
  company_name: string;
  location_restriction: string;
  tags: string;
  created_at: string;
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const fetchCount = 10;
  const bottomBoundaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/jobs/?limit=${fetchCount}&offset=${(page - 1) * fetchCount}`;
        const response = await axios.get(url);
        console.log('Fetched jobs:', response.data.results);
        setJobs(prevJobs => [...prevJobs, ...response.data.results]); // Append new jobs to existing jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
      setLoading(false);
    };

    fetchData(); // Fetch initial data

  }, [page]); // Dependency on 'page' to trigger fetching new data on page change

  // Function to handle scroll event
  const handleScroll = () => {
    if (bottomBoundaryRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - bottomBoundaryRef.current.clientHeight) {
        setPage(prevPage => prevPage + 1); // Increment page to fetch more jobs
      }
    }
  };

  // Attach scroll listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center p-4 mt-8">
      <ul className="space-y-4 w-full flex flex-col items-center">
        {jobs.map(({ id, position, company_name, location_restriction, tags, created_at }) => (
          <JobCard
            key={id}
            id={id}
            position={position}
            company_name={company_name}
            location_restriction={location_restriction}
            tags={tags}
            created_at={created_at}
          />
        ))}
        {/* Render a loading indicator */}
        {loading && <p>Loading...</p>}
        {/* Element at the bottom to mark the end */}
        <div ref={bottomBoundaryRef}></div>
      </ul>
    </div>
  );
};

export default JobList;
