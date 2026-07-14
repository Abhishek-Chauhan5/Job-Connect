import { useParams } from "react-router-dom";
import jobData from "../../data/jobData";
import { Link } from "react-router-dom";


const JobDetails = () => {

    const { id } = useParams();


    const job = jobData.find(
        (job) => job.id === Number(id)
    );


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

            <Link to={`/job/${job.id}`}>
                <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg">
                    Apply Now
                </button>
            </Link>

        </div>

    )

}


export default JobDetails;