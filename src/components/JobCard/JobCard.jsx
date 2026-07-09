const JobCard = ({job}) => {       /* here ({job}) is a prop -> transfer data parent to child*/
        return (
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">

            <h2 className="text-xl font-bold">
                {job.title}
            </h2>

            <p className ="text-red-600 mt-2">
                {job.company}
            </p>

            <p className="text-gray-500">
                {job.location} • {job.type}
            </p>

            <p className ="text-gray-600 mt-2">
                {job.experience}
            </p>

            <p className="text-blue-600 font-semibold mt-3">
                {job.salary}
            </p>

            <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Apply Now
            </button>
        </div>
    );
};

export default JobCard;