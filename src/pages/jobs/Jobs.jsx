import jobData from "../../data/jobData";
import JobCard from "../../components/JobCard/JobCard";
import { useState } from "react";


const Jobs = () => {

const [search, setSearch] = useState("");

const filteredJobs = jobData.filter((job) => {

    return job.title
        .toLowerCase()
        .includes(search.toLowerCase());

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


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


{
filteredJobs.map((job)=>(

<JobCard 
key={job.id}
job={job}
/>

))
}


</div>


</section>


)


}


export default Jobs;