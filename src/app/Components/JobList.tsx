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

interface JobListProps {
  selectedLocationTags: string[];
  selectedJobTags: string[];
  salaryRange: [number, number];  // Add this line
}

const JobList: React.FC<JobListProps> = ({ selectedLocationTags, selectedJobTags, salaryRange }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const fetchCount = 10;
  const bottomBoundaryRef = useRef<HTMLDivElement>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchJobs = async (page: number, reset: boolean = false) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedJobTags.length > 0) {
        params.append('position', selectedJobTags.join(','));
      }
      if (selectedLocationTags.length > 0) {
        selectedLocationTags.forEach(tag => params.append('location', tag));
      }
      params.append('salary_min', salaryRange[0].toString());  // Add this line
      params.append('salary_max', salaryRange[1].toString());  // Add this line
      params.append('limit', fetchCount.toString());
      params.append('offset', ((page - 1) * fetchCount).toString());

      const url = `${baseUrl}/jobs/jobs/?${params.toString()}`;
      const response = await axios.get(url);
      console.log('Fetched jobs:', response.data.results);

      setJobs(reset ? response.data.results : [...jobs, ...response.data.results]);
      setHasMore(response.data.results.length === fetchCount);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPage(1); // Reset page number when tags change
    fetchJobs(1, true); // Fetch jobs when tags change
  }, [selectedLocationTags, selectedJobTags, salaryRange]);  // Add salaryRange here

  const handleScroll = () => {
    if (bottomBoundaryRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - bottomBoundaryRef.current.clientHeight) {
        if (!loading && hasMore) {
          setPage(prevPage => prevPage + 1); // Increment page to fetch more jobs
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

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
        {loading && <p>Loading...</p>}
        <div ref={bottomBoundaryRef}></div>
      </ul>
    </div>
  );
};

export default JobList;
