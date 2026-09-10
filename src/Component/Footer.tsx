import footerlogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
    
    <div className="mt-16 border-2 border-gray-300 p-4">
      <div className="grid grid-cols-4 container mx-auto gap-4">
        <div className="mt-4">
          <img src={footerlogo} alt="logo" />
          <p className="font-medium font-jakarta text-[12px] my-4">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4">
            <h3 className="font-semibold font-jakarta text-[12px] my-4">GitHub</h3>
            <h3 className="font-semibold font-jakarta text-[12px] my-4">Twitter</h3>
            <h3 className="font-semibold font-jakarta text-[12px] my-4">LinkedIn</h3>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold font-jakarta text-[12px] mb-2">PRODUCT</h2>
          <ul>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Home</a>
            </li>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Technologies</a>
            </li>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Projects</a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold font-jakarta text-[12px] mb-2">COMPANY</h2>
          <ul>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">About</a>
            </li>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Contact</a>
            </li>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Careers</a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold font-jakarta text-[12px] mb-2">LEGAL</h2>
          <ul>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Privacy Policy</a>
            </li>
            <li>
              <a href="" className="font-medium font-jakarta text-[12px]">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

     <hr className="text-gray-300"/>
      <div className="container mx-auto flex justify-between items-center py-2">
        <h3>© 2026 Dev Stack. All rights reserved.</h3>
        <div className="flex gap-4">
          <h3>Privacy</h3>
          <h3>Terms</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
