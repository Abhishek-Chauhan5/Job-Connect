import jobData from "../../data/jobData";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-6">

            <h2 className="text-3xl font-bold text-center mb-10">
                Featured Jobs
            </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobData.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

        </section>
    );
};

export default FeaturedJobs;
