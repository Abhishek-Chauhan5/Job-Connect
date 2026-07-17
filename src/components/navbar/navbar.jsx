import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* logo*/}
               <div>
                  <h1 className="text-2xl font-bold text-blue-600">
                   JobConnect
                  </h1>
                </div>

                {/* navigation links */}
                <ul className="flex gap-8 font-medium text-gray-700">

                    <li>
                        <Link
                           to="/"
                            className="cursor-pointer hover:text-blue-600 transition">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                           to="/jobs" 
                           className="cursor-pointer hover:text-blue-600 transition">
                           Job
                        </Link>  
                    </li>

                     <li>
                        <Link to="/saved-jobs">
                            Saved Jobs
                        </Link>
                    </li>    
                    <li>
                        <Link
                            to="/companies"
                            className="cursor-pointer hover:text-blue-600 transition">
                            Companies
                        </Link>    
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="cursor-pointer hover:text-blue-600 transition">
                            About
                        </Link>    
                    </li>

                </ul>

                {/*Buttons*/ }
                <div className="flex gap-3">
                    <Link
                       to="/login">
                            <button className="px-5 py-2 border border-blue-600 rounded-lg 
                                text-blue-600 hover:bg-blue-600 hover:text-white transition">
                                Login
                            </button>
                    </Link>
                    <Link 
                        to="/register">
                            <button
                               className="px-5 py-2 bg-blue-600 text-white rounded-lg
                               hover:bg-blue-700 transition">
                               Register
                            </button>
                    </Link>
                </div>
            </div>   
        </nav>
    );
};

export default Navbar;