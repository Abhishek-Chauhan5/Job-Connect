import jobData from "../../data/jobData";
import JobCard from "../../components/JobCard/JobCard";


const Jobs = () => {


return (

<section className="max-w-7xl mx-auto py-16 px-6">


<h1 className="text-4xl font-bold text-center mb-12">
Latest Jobs
</h1>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


{
jobData.map((job)=>(

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