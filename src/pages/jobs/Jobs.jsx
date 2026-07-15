import jobData from "../../data/jobData";
import JobCard from "../../components/JobCard/JobCard";
import { useState } from "react";


const Jobs = () => {

const [search, setSearch] = useState("");
const [jobType, setJobType] = useState("All");
const [location, setLocation] = useState("All");

const filteredJobs = jobData.filter((job) => {

  const matchesSearch = job.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesType =
    jobType === "All" || job.type === jobType;

  const matchesLocation =
    location === "All" || job.locatoin === location;  

  return matchesSearch && matchesType && matchesLocation;

});
return (


<section className="max-w-7xl mx-auto py-16 px-6">


<h1 className="text-4xl font-bold text-center mb-12">
Latest Jobs
</h1>

<input
  type="text"
  placeholder="Search job..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  className="w-full border border-gray-300 rounded-lg px-5 py-3 mb-10"/>

  <select
      value={jobType}
      onChange={(e) => setJobType(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8">
        <option value="All">All Jobs</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Remote">Remote</option>
  </select>

  <select
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8"
>

      <option value="All">
          All Locations
      </option>

      <option value="Noida">
          Noida
      </option>

      <option value="Bengaluru">
          Bengaluru
      </option>

      <option value="Hyderabad">
          Hyderabad
      </option>

      <option value="Remote">
          Remote
      </option>

  </select>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


{
filteredJobs.length > 0 ? (

filteredJobs.map((job)=>(

<JobCard 
key={job.id}
job={job}
/>

))

) : (

<div className="text-center col-span-3 py-10">

<h2 className="text-2xl font-bold text-gray-700">
😔 No Jobs Found
</h2>

<p className="text-red-500 mt-3">
Try changing your search or filters
</p>

</div>

)
}


</div>


</section>


)


}


export default Jobs;