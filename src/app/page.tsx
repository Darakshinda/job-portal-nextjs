'use client';
import React, { useState, useEffect } from "react";
import DropdownMenu from './DropdownMenu';
import axios from "axios";
import Navbar from "./Navbar";
// Define an interface representing the structure of a job object
interface Job {
  id: number;
  position: string;
  company_name: string;
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
      <Navbar/>
      <div>
        <div className=" h-20xl max-w-18xl bg-white size-5xl">
          <div
        className="relative isolate overflow-hidden h-screen bg-white px-6 pt-40 text-center sm:px-18 sm:shadow-sm">
        <p className="mx-auto  max-w-6xl text-5xl font-Nunito font-semibold tracking-tight text-gray-900 ">
        "Where Employers and Job Seekers Meet" <br/> Explore Opportunities Now
        </p>


        <form action="/search">
            <label
                className="mx-auto mt-8 relative bg-white min-w-sm max-w-4xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                htmlFor="search-bar">

                <input
                  id="search-bar"
                  placeholder="Enter your Dream Job"
                  name="q"
                  className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                  required={true}
                />

                <button type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </div>
                </button>
            </label>
        </form>
        
    <div className="flex justify-center mt-8">
          <DropdownMenu label="Location" options={['New York', 'Los Angeles', 'Chicago']} />
          <DropdownMenu label="Salary" options={['$40k-$60k', '$60k-$80k', '$80k-$100k']} />
          <DropdownMenu label="Tags" options={['Engineering', 'Design', 'Marketing']} />
          <DropdownMenu label="Sort By" options={['Latest Jobs', 'Highest paid']} />
        </div>
        
    </div>
    
    
</div>

        <div>
          
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.position}</h3>
              <p>{job.company_name}</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </main>
  );
}
