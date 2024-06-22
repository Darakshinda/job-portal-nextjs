import React, { useState, useEffect, useRef, useCallback } from "react";
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
}

const JobList: React.FC<JobListProps> = ({ selectedLocationTags, selectedJobTags }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const fetchCount = 10;
  const observer = useRef<IntersectionObserver | null>(null);
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
  }, [selectedLocationTags, selectedJobTags]);

  const lastJobElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    if (page > 1) {
      fetchJobs(page);
    }
  }, [page]);

  return (
    <div className="flex justify-center p-4 mt-8">
      <ul className="space-y-4 w-full flex flex-col items-center">
        {jobs.map((job, index) => {
          if (jobs.length === index + 1) {
            return (
              <JobCard
                ref={lastJobElementRef}
                key={job.id}
                id={job.id}
                position={job.position}
                company_name={job.company_name}
                location_restriction={job.location_restriction}
                tags={job.tags}
                created_at={job.created_at}
              />
            );
          } else {
            return (
              <JobCard
                key={job.id}
                id={job.id}
                position={job.position}
                company_name={job.company_name}
                location_restriction={job.location_restriction}
                tags={job.tags}
                created_at={job.created_at}
              />
            );
          }
        })}
        {loading && <p>Loading...</p>}
      </ul>
    </div>
  );
};

export default JobList;
