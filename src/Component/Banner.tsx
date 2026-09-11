import banimg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4">
      <div className="">
        <h2 className="font-extrabold font-inter xl:text-[60px] text-center md:text-start">Build Your Ideal <br />
        <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Development Stack</span></h2>
        <p className="text-[#475569] lg:text-[18px] font-jakarta font-medium mt-4 pr-0 md:pr-30 text-center md:text-start">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex justify-center md:justify-start">
          <button className="hover:bg-[#F1F5F9] border-2 border-transparent bg-[#DB2777] text-[#FFFFFF] hover:text-black py-1 px-3 md:py-2 md:px-6 rounded-xl">
           Explore Technologies
          </button>
          <button className="ml-4 bg-[#F1F5F9] hover:bg-[#DB2777] hover:text-[#FFFFFF] py-1 px-3 md:py-2 md:px-6 rounded-xl">
           Learn More
          </button>
        </div>
      </div>
      <div className="text-center">
        <img src={banimg} alt="bannerimg" />
      </div>
    </div>
  );
};

export default Banner;
