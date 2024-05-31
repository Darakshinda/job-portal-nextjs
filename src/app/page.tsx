'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

// Define an interface representing the structure of a job object
interface Job {
  id: number;
  position: string;
  companyName: string;
  // Add other properties as needed
}

// Your component


export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]); // Specify the type of jobs as Job[]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/jobs/job-list/");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        <h1>HomePage</h1>
        <Link href="/loginpage">Login</Link>
        <Link href="/post">Post a Job</Link>
        <div>
          <h2>Recent Job Postings</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <h3>{job.position}</h3>
                <p>{job.companyName}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
