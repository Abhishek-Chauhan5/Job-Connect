import { useParams } from "react-router-dom";
import jobData from "../../data/jobData";
import { Link } from "react-router-dom";


const JobDetails = () => {

    const { id } = useParams();


    const job = jobData.find(
        (job) => job.id === Number(id)
    );
    if (!job) {
  return (
    <div className="text-center py-20">

      <h1 className="text-3xl font-bold">
        Job Not Found
      </h1>

      <p className="text-gray-500 mt-3">
        The job you are looking for does not exist.
      </p>

      <Link to="/jobs">
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Back to Jobs
        </button>
      </Link>

    </div>
  );
}

    return (

        <div className="max-w-4xl mx-auto py-16 px-6">

            <h1 className="text-4xl font-bold">
                {job.title}
            </h1>


            <p className="text-red-600 text-xl mt-3">
                {job.company}
            </p>


            <div className="mt-8 space-y-3 text-gray-700">

                <p>
                    📍 Location: {job.location}
                </p>

                <p>
                    💰 Salary: {job.salary}
                </p>

                <p>
                    👨‍💻 Experience: {job.experience}
                </p>

                <p>
                    💼 Type: {job.type}
                </p>

            </div>

            <button
  className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
>
  Apply Now
</button>

        </div>

    )

}


export default JobDetails;