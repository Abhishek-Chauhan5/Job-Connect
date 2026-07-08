const SearchBar = () => {
    return (
        <div className="flex justify-center mt-10">

            <input
            type="text"
            placeholder="Search jobs...."
            className="w-[450px] border border-gray-300 rounded-l-lg px-5 py-3 outline-none"
            />
            <button className="bg-blue-600 text-white px-8 rounded-r-lg hover:bg-blue-700 transition">
                Search
            </button>
           
        </div>
    );
};

export default SearchBar;