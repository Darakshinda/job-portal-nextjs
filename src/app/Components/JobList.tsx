"use client";
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

interface Props {
  selectedLocationTags: string[];
  selectedJobTags: string[];
  selectedBenefitTags: string[];
}

const JobList: React.FC<Props> = ({
  selectedLocationTags,
  selectedJobTags,
  selectedBenefitTags,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fetchCount = 10;

  const bottomBoundaryRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `${baseUrl}/jobs/job-list/?limit=${fetchCount}&offset=${(page - 1) * fetchCount}`;

        if (selectedLocationTags.length > 0) {
          url += `&location=${selectedLocationTags.join(",")}`;
        }
        if (selectedJobTags.length > 0) {
          url += `&position=${selectedJobTags.join(",")}`;
        }
        if (selectedBenefitTags.length > 0) {
          url += `&benefits=${selectedBenefitTags.join(",")}`;
        }

        const response = await axios.get(url);
        setJobs(response.data);
        setPage(1); // Reset page to 1 when fetching new data
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
      setLoading(false);
    };

    fetchData(); // Fetch data initially

  }, [baseUrl, selectedLocationTags, selectedJobTags, selectedBenefitTags]);

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
        {/* Rendered at the bottom of the list */}
        <li ref={bottomBoundaryRef} />
      </ul>
    </div>
  );
};

export default JobList;