import { useState } from "react";
import logo from "../assets/global/logo.png"; 
import Button from "./BTN";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className=" relative xl:px-10">
      <div className="py-6 lg:py-8 px-3 flex items-center justify-between ">
        <div className="flex items-center gap-1">
          <img src={logo} alt=" " className=" lg:w-12" />
          <span className=" text-lg font-semibold  mt-2 lg:text-2xl">uifry</span>
        </div>
        <div className=" hidden lg:block mt-2">
          <ul className=" flex items-center justify-center gap-2 ">
            {["Home", "About Us", "Pricing", "Features"].map((item, index) => (
              <li key={index}>
                <a href="#" className=" text-black tracking-widest xl:text-base xl:font-semibold transition-all">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Button children="Download" />
        </div>

        <div className=" lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM7.834 15.75C7.41979 15.75 7.084 16.0858 7.084 16.5C7.084 16.9142 7.41979 17.25 7.834 17.25V15.75ZM17.167 17.25C17.5812 17.25 17.917 16.9142 17.917 16.5C17.917 16.0858 17.5812 15.75 17.167 15.75V17.25ZM7.834 7.75C7.41979 7.75 7.084 8.08579 7.084 8.5C7.084 8.91421 7.41979 9.25 7.834 9.25V7.75ZM17.167 9.25C17.5812 9.25 17.917 8.91421 17.917 8.5C17.917 8.08579 17.5812 7.75 17.167 7.75V9.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM7.834 17.25H17.167V15.75H7.834V17.25ZM7.834 9.25H17.167V7.75H7.834V9.25Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>

      {!open && (
        <div className=" absolute w-full z-50  bg-black top-20 md:top-24 ">
          <ul className=" flex flex-col items-center gap-10 py-28 uppercase  ">
            {["home", "About Us", "pricing", "features"].map((item, index) => (
              <li key={index} className=" ">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
