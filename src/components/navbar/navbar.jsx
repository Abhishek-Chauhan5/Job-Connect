const Navbar = () => {
    return (
        <nav classsName="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* logo*/}
               <div>
                  <h1 className="text-2xl font-bold text-blue-600">
                   JobConnect
                  </h1>
                </div>

                {/* navigation links */}
                <ul className="flex gap-8 font-medium text-gray-700">
                    <li className="cursor-pointer hover:text-blue-600 transition">
                        Home
                    </li>

                    <li className="cursor-pointer hover:text-blue-600 transition">
                        Job
                    </li>

                    <li className="cursor-pointer hover:text-blue-600 transition">
                        Companies
                    </li>

                    <li className="cursor-pointer hover:text-blue-600 transition">
                        About
                    </li>
                </ul>

                {/*Buttons*/ }
                <div className="flex gap-3">

                    <button className="px-5 py-2 border border-blue-600 rounded-lg 
                    text-blue-600 hover:bg-blue-600 hover:text-white transition">
                       Login
                    </button>

                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg 
                    hover:bg-blue-700 transition">
                       Register
                    </button>
                </div>
            </div>   
        </nav>
    );
};

export default Navbar;