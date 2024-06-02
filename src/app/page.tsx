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
  location_restriction: string;
  tags: string;
  created_at: string;
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


  const getTimeDifference = (createdAt: string) => {
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt);
    const timeDifference = currentTime.getTime() - createdAtTime.getTime();
    const minutes = Math.floor(timeDifference / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
      return `${days}d`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  };

  return (
    <main>
      <Navbar/>
      <div>
        <div className=" h-20xl max-w-18xl bg-white size-5xl">
          <div
        className="relative isolate overflow-hidden  bg-white pb-20 px-6 pt-40 text-center sm:px-18 sm:shadow-sm">
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
        
    <div className="flex justify-center mt-8 z-100">
          <DropdownMenu label="Location" options={['New York', 'Los Angeles', 'Chicago']} />
          <DropdownMenu label="Salary" options={['$40k-$60k', '$60k-$80k', '$80k-$100k']} />
          <DropdownMenu label="Tags" options={['Engineering', 'Design', 'Marketing']} />
          <DropdownMenu label="Sort By" options={['Latest Jobs', 'Highest paid']} />
        </div>
        
    </div>
    <div>
    <div className="flex justify-center p-4">
  <ul className="space-y-4 w-full flex flex-col items-center">
    {jobs.map((job) => (
      <li key={job.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 transition-transform transform hover:scale-105 flex flex-col items-start">
        <div className="flex justify-between w-full mb-2">
          <h3 className="text-lg font-bold">{job.position}</h3>
          
          
        </div>
          <div className="flex items-center w-full mb-2">
            <div className="w-2/5">
              <p className="text-gray-700">{job.company_name}</p>
            </div>
            {job.tags && job.tags.split(',').map((tag, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-1 ml-2"> 
                <p className="text-black-400">{tag.trim()}</p> 
              </div>
            ))}
          <div className="ml-auto flex items-center"> 
            <p className="text-black-500 mr-32">{getTimeDifference(job.created_at)}</p> 
            <button className="border border-gray-300 rounded-md px-2 py-2 w-16">Apply</button>
          </div>
        </div>

        <p className="border border-gray-300 rounded-md px-2 py-2 text-black-500 text-center">{job.location_restriction}</p>

      </li>
    ))}
  </ul>
</div>

        </div>
    
    
</div>

        
      </div>
    </main>
  );
}
