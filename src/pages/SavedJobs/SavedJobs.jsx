import jobData from "../../data/jobData";
import JobCard from "../../components/JobCard/JobCard";
import { useState } from "react";


const SavedJobs = () => {

  const [savedJobs, setSavedJobs] = useState(() => {

    const storedJobs = localStorage.getItem("savedJobs");

    return storedJobs ? JSON.parse(storedJobs) : [];

  });


  const savedJobList = jobData.filter((job) =>
    savedJobs.includes(job.id)
  );


  return (

    <section className="max-w-7xl mx-auto py-16 px-6">


      <h1 className="text-4xl font-bold text-center mb-12">
        Saved Jobs
      </h1>


      {
        savedJobList.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              savedJobList.map((job)=>(

                <JobCard
                  key={job.id}
                  job={job}
                />

              ))
            }

          </div>


        ) : (

          <div className="text-center py-10">

            <h2 className="text-2xl font-bold text-gray-700">
              😔 No Saved Jobs
            </h2>

            <p className="text-gray-500 mt-3">
              Save jobs to see them here
            </p>

          </div>

        )
      }


    </section>

  );

};


export default SavedJobs;