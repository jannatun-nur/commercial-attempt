import logo from "../../public/logo.png";
import { GrLineChart } from "react-icons/gr";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaCoins } from "react-icons/fa6";
import { ImConnection } from "react-icons/im";
import { RiOpenSourceFill } from "react-icons/ri";
import { MdOutlineSell } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { MdManageHistory } from "react-icons/md";
import profile from "../../public/download.jpg";






const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50">
      <div className="navbar bg-white text-blue-800">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="text-semibold font-serif lg:text-2xl md:text-xl text-xs"
              >
                {" "}
                Dashboard
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 lg:w-80 w-6/12 md:w-3/12 min-h-full bg-[#095da2] text-base-content">
                {/* Sidebar content here */}
                <div className="flex py-3">
                  <img
                    className="lg:w-16 lg:h-10 w-20 h-10 "
                    src={logo}
                    alt=""
                  />
                  <p className="lg:text-xl font-serif font-bold text-white text-xs">
                    Commercial Attempt
                  </p>
                </div>
                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <GrLineChart />
                  </span>{" "}
                  Progress
                </p>

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <LuBadgeDollarSign />
                  </span>{" "}
                  Income
                </p>

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <FaCoins />
                  </span>{" "}
                  Coins
                </p>

              

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <ImConnection />
                  </span>
                  Connection
                </p>

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <RiOpenSourceFill />
                  </span>{" "}
                  Source
                </p>

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <MdOutlineSell />
                  </span>{" "}
                  Sell
                </p>

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <CiImport />
                  </span>
                  Buy
                </p>

                <p className="flex gap-5 lg:text-xl text-xs text-white font-serif py-2">
                  {" "}
                  <span className="mt-1">
                    <MdManageHistory />
                  </span>{" "}
                  History
                </p>
              </ul>
            </div>
          </div>

          {/* o2 */}
          <div className="relative hidden  md:block md:ml-20">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2  pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
            />
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex"></div>

        <div className="navbar-end">
          <div className="relative md:hidden">
           
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              
        
          </div>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1">
              {" "}
              <img
                className="w-8 h-8 lg:w-16 lg:h-16 rounded-full"
                src={profile}
                alt=""
              />{" "}
            </div>
            <ul
              tabIndex={0}
              className="absolute right-5 dropdown-content z-[1] menu p-2 ]"
            >

              <div className=" border border-sky-500 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">

	<img src={profile} alt="" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square " />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300 ">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold md:text-xl sm:text-2xl">Leroy Jenkins</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600 font-serif">Manager</p>
		</div>
		<div className="flex justify-center pt-2 space-x-4 align-center">
			
			<a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
					<path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
				</svg>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
					<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
				</svg>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
					<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
				</svg>
			</a>
		</div>
	</div>
</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
