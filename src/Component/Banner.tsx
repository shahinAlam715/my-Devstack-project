import banimg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center px-4">
      <div className="">
        <h2 className="font-extrabold font-inter text-[60px]">Build Your Ideal <br />
        <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Development Stack</span></h2>
        <p className="text-[#475569] text-[18px] font-jakarta font-medium mt-4 pr-30">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex">
          <button className="hover:bg-[#F1F5F9] border-2 border-transparent bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 px-6 rounded-xl">
           Explore Technologies
          </button>
          <button className="ml-4 bg-[#F1F5F9] hover:bg-[#DB2777] hover:text-[#FFFFFF] py-2 px-6 rounded-xl">
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
