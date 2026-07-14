const JobCard = ({job}) => {

  return (

    <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition">


      <h2 className="text-xl font-bold text-gray-800">
        {job.title}
      </h2>


      <p className="text-blue-600 font-medium mt-2">
        {job.company}
      </p>


      <div className="mt-4 space-y-2 text-gray-600">

        <p>
          📍 {job.location}
        </p>

        <p>
          💰 {job.salary}
        </p>

        <p>
          👨‍💻 {job.experience}
        </p>

        <p>
          💼 {job.type}
        </p>

      </div>


      <button
      className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>


    </div>

  );

}


export default JobCard;