const SearchBar = () => {
    return (
        <div className="flex justify-center mt-10">

            <input
            type="text"
            placeholder="Search Jobs..."
            className="border p-4 w-[500px] rounded-l-lg"/>


            <button className="bg-blue-600 text-white px-8 rounded-r-lg hover:bg-blue-700 transition">
                Search
            </button>
           
        </div>
    );
};

export default SearchBar;