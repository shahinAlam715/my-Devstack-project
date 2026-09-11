import { IoIosStar } from "react-icons/io";
import reactimg from "../assets/react (2).png";
import { use } from "react";
import type { Iproducts } from "../type";

interface Ipromisedata {
  Promisedata: Promise<Iproducts[]>
}

const Products = ({Promisedata}: Ipromisedata) => {
  const info = use(Promisedata)
  console.log(info);
  return (
    <>
      <div className="p-2">
        <div className="container mx-auto">
          <h2 className="font-inter font-extrabold text-center md:text-start md:text-[36px] my-2">
            Explore the
            <span className="text-[#DB2777]"> Technologies</span>
          </h2>
          <p className="font-medium font-jakarta text-center md:text-start md:text-[16px] text-[#64748B] my-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto mt-10 gap-4">
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
                <div className="flex justify-between">
                  <img src={reactimg} alt="reactimg" className="h-10 w-10" />
                  <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
                    Popular
                  </button>
                </div>
                <h2 className="text-[18px] font-bold font-jakarta mt-4">
                  React
                </h2>
                <p className="text-[12px] font-medium font-jakarta my-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>
                <hr className="text-gray-300 my-4" />
                <div className="flex justify-between items-center my-4">
                  <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
                    Frontend
                  </button>
                  <h3 className="font-medium font-jakarta text-[16px]">
                    Beginner-Friendly
                  </h3>

                  <span className="flex items-center">
                    <IoIosStar className="text-yellow-500" /> 4.9
                  </span>
                </div>
                <button className="hover:bg-[#F1F5F9] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 w-full rounded-3xl">
                  Add to Stack
                </button>
              </div>
              <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
                <div className="flex justify-between">
                  <img src={reactimg} alt="reactimg" className="h-10 w-10" />
                  <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
                    Popular
                  </button>
                </div>
                <h2 className="text-[18px] font-bold font-jakarta mt-4">
                  React
                </h2>
                <p className="text-[12px] font-medium font-jakarta my-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>
                <hr className="text-gray-300 my-4" />
                <div className="flex justify-between items-center my-4">
                  <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
                    Frontend
                  </button>
                  <h3 className="font-medium font-jakarta text-[16px]">
                    Beginner-Friendly
                  </h3>

                  <span className="flex items-center">
                    <IoIosStar className="text-yellow-500" /> 4.9
                  </span>
                </div>
                <button className="hover:bg-[#F1F5F9] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 w-full rounded-3xl">
                  Add to Stack
                </button>
              </div>
              <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
                <div className="flex justify-between">
                  <img src={reactimg} alt="reactimg" className="h-10 w-10" />
                  <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
                    Popular
                  </button>
                </div>
                <h2 className="text-[18px] font-bold font-jakarta mt-4">
                  React
                </h2>
                <p className="text-[12px] font-medium font-jakarta my-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>
                <hr className="text-gray-300 my-4" />
                <div className="flex justify-between items-center my-4">
                  <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
                    Frontend
                  </button>
                  <h3 className="font-medium font-jakarta text-[16px]">
                    Beginner-Friendly
                  </h3>

                  <span className="flex items-center">
                    <IoIosStar className="text-yellow-500" /> 4.9
                  </span>
                </div>
                <button className="hover:bg-[#F1F5F9] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 w-full rounded-3xl">
                  Add to Stack
                </button>
              </div>
              <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
                <div className="flex justify-between">
                  <img src={reactimg} alt="reactimg" className="h-10 w-10" />
                  <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
                    Popular
                  </button>
                </div>
                <h2 className="text-[18px] font-bold font-jakarta mt-4">
                  React
                </h2>
                <p className="text-[12px] font-medium font-jakarta my-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>
                <hr className="text-gray-300 my-4" />
                <div className="flex justify-between items-center my-4">
                  <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
                    Frontend
                  </button>
                  <h3 className="font-medium font-jakarta text-[16px]">
                    Beginner-Friendly
                  </h3>

                  <span className="flex items-center">
                    <IoIosStar className="text-yellow-500" /> 4.9
                  </span>
                </div>
                <button className="hover:bg-[#F1F5F9] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 w-full rounded-3xl">
                  Add to Stack
                </button>
              </div>
              <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
                <div className="flex justify-between">
                  <img src={reactimg} alt="reactimg" className="h-10 w-10" />
                  <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
                    Popular
                  </button>
                </div>
                <h2 className="text-[18px] font-bold font-jakarta mt-4">
                  React
                </h2>
                <p className="text-[12px] font-medium font-jakarta my-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>
                <hr className="text-gray-300 my-4" />
                <div className="flex justify-between items-center my-4">
                  <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
                    Frontend
                  </button>
                  <h3 className="font-medium font-jakarta text-[16px]">
                    Beginner-Friendly
                  </h3>

                  <span className="flex items-center">
                    <IoIosStar className="text-yellow-500" /> 4.9
                  </span>
                </div>
                <button className="hover:bg-[#F1F5F9] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 w-full rounded-3xl">
                  Add to Stack
                </button>
              </div>
              <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
                <div className="flex justify-between">
                  <img src={reactimg} alt="reactimg" className="h-10 w-10" />
                  <button className="bg-[#61DAFB] py-1 px-4 rounded-3xl">
                    Popular
                  </button>
                </div>
                <h2 className="text-[18px] font-bold font-jakarta mt-4">
                  React
                </h2>
                <p className="text-[12px] font-medium font-jakarta my-2">
                  A declarative, component-based JavaScript library for building
                  modern user interfaces.
                </p>
                <hr className="text-gray-300 my-4" />
                <div className="flex justify-between items-center my-4">
                  <button className="bg-[#F1F5F9] py-2 px-4 text-[14px] rounded-xl">
                    Frontend
                  </button>
                  <h3 className="font-medium font-jakarta text-[16px]">
                    Beginner-Friendly
                  </h3>

                  <span className="flex items-center">
                    <IoIosStar className="text-yellow-500" /> 4.9
                  </span>
                </div>
                <button className="hover:bg-[#F1F5F9] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 w-full rounded-3xl">
                  Add to Stack
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="border-2 border-gray-200 shadow-2xl rounded-xl p-4 my-4">
              <h2 className="text-[18px] font-bold font-jakarta mt-4">
                Your Stack
              </h2>
              <p className="text-[12px] font-medium font-jakarta my-2">
                No technologies selected yet.
              </p>
              <div className="border-2 border-dashed p-8">
                <p className="text-[12px] font-medium font-jakarta my-2 text-center">
                  Your stack is empty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
