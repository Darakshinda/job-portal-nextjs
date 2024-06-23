"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import JobList from './Components/JobList';
import SalaryRangeSlider from './Components/FilterBox';
import { Tags2 } from '@/stories/Tags2';

const locationOptions = [
  { label: 'New York' },
  { label: 'Los Angeles' },
  { label: 'Chicago' },
  { label: 'San Francisco' },
  { label: 'Seattle' },
  { label: 'Boston' },
  {label: 'Africa'},
];

const jobPositionOptions = [
  { label: 'Software Engineer' },
  { label: 'Data Analyst' },
  { label: 'Product Manager' },
  { label: 'UI/UX Designer' },
];

const benefitOptions = [
  { label: 'Health Insurance' },
  { label: 'Paid Time Off' },
  { label: 'Retirement Benefits' },
  { label: 'Flexible Working Hours' },
];
const Home: React.FC = () => {
  const [selectedLocationTags, setSelectedLocationTags] = useState<string[]>([]);
  const [selectedJobTags, setSelectedJobTags] = useState<string[]>([]);
  const [selectedBenefitTags, setSelectedBenefitTags] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState([0, 100000]);

  const handleLocationTagSelection = (tags: string[]) => {
    setSelectedLocationTags(tags);
  };

  const handleJobTagSelection = (tags: string[]) => {
    setSelectedJobTags(tags);
  };
  const handleBenefitTagSelection = (tags: string[]) => {
    setSelectedBenefitTags(tags);
    console.log('Selected Benefit Tags:', tags);
  };

  return (
    <main>
      <Navbar />
      <div className="pb-4 h-20xl max-w-18xl bg-white size-5xl">
        <div className="relative isolate overflow-hidden bg-white pb-20 px-6 pt-40 text-center sm:px-18 sm:shadow-sm">
          <p className="mx-auto max-w-6xl text-5xl font-Nunito font-semibold tracking-tight text-gray-900">
            "Where Employers and Job Seekers Meet" <br /> Explore Opportunities Now
          </p>

          <form action="/search">
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm max-w-4xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                placeholder="Enter your Dream Job"
                name="q"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                required={true}
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </button>
            </label>
          </form>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <Tags2
              options={locationOptions}
              cls="input_company{background-color: #f2f1ed;width: 95%;margin-top:10px;margin-left: 14px;border-radius: 7px;border-width: 1px;border-color: #b1b3b6;padding: 3px 10px;}"
              placeholder="Search by Location"
              dynamic={true}
              onSelect={handleLocationTagSelection}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <Tags2
              options={jobPositionOptions}
              cls="input_company{background-color: #f2f1ed;width: 95%;margin-top:10px;margin-left: 14px;border-radius: 7px;border-width: 1px;border-color: #b1b3b6;padding: 3px 10px;}"
              placeholder="Search by Job Position"
              dynamic={true}
              onSelect={handleJobTagSelection}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <Tags2
              options={benefitOptions}
              cls="input_company{background-color: #f2f1ed;width: 95%;margin-top:10px;margin-left: 14px;border-radius: 7px;border-width: 1px;border-color: #b1b3b6;padding: 3px 10px;}"
              placeholder="Search by Benefits"
              dynamic={true}
              onSelect={handleBenefitTagSelection}
            />
          </div>
          <div className= "">
            <SalaryRangeSlider
            onRangeChange={setSalaryRange}
            salaryRange={salaryRange}
          />
          </div>
        </div>
        <JobList
          selectedLocationTags={selectedLocationTags}
          selectedJobTags={selectedJobTags}
          // salaryRange={salaryRange}
        />
      </div>
    </main>
  );
};

export default Home;