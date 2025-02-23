import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Searchbar() {
  return (
    <>
      <form className="max-w-md mx-auto">
        <Link to={"/search"} className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch size={20} />
          </div>
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
            placeholder="Search milk"
            required
          />
        </Link>
      </form>
    </>
  );
}

export default Searchbar;
