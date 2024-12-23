import arrow from "../assets/hero/arrow.svg";
import play from "../assets/hero/play.svg";
import iPhone from "../assets/hero/iPhone.png";
import iPhone2 from "../assets/hero/iPhone-2.png";
import circle from "../assets/global/circle.svg";
import star from "../assets/global/Star.svg";
import line from "../assets/hero/Group.svg";

const Hero = () => {
  return (
    <section className=" relative  pt-12 px-3 lg:pt-32 overflow-hidden xl:px-10">
      <div className=" hidden absolute inset-0  items-center justify-center  ">
        <div className=" w-[200px] h-[130px] bg-bgPrimary blur-xl rounded-full relative z-20 ml-7"></div>
        <div className="w-[200px] h-[100px] bg-bgSecondary blur-xl rounded-full  absolute mt-24 mr-5  z-10"></div>
      </div>
      <div className=" lg:flex ">
        <div className=" relative z-40 lg:pl-5 xl:pl-0 lg:w-2/4 xl:-mt-10">
          <h1 className=" font-semibold text-5xl text-center lg:text-start lg:font-bold xl:text-[3.20rem]  ">
            Make The Best Financial Decisions
          </h1>
          <p className="pt-2 text-center md:px-14 lg:text-start lg:px-0">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="pt-4 flex justify-center items-center lg:justify-start">
            <button className="flex items-center gap-1 hover:brightness-110 hover:animate-pulse  py-2 px-4 rounded-sm bg-black ">
              <span className=" text-[13px] font-medium text-white">
                Get Started
              </span>
              <img src={arrow} alt="" className=" w-6 " />
            </button>

            <button className="flex items-center gap-1 hover:brightness-110 hover:animate-pulse  py-2 px-4 rounded-sm ">
              <img src={play} alt="" className=" w-6 " />
              <span className=" text-[13px] font-medium text-black">
                Watch Video
              </span>
            </button>
          </div>
        </div>

        <div className="pt-2 relative md:left-11 lg:pt-0 lg:left-0 lg:-mt-24 xl:ml-7">
          <img
            src={star}
            alt=""
            className=" absolute right-8 md:right-24 top-10 md:top-16 lg:right-10 lg:top-10 lg:w-12"
          />
          <div className=" z-10 xl:-mt-20 xl:ml-10">
            <img src={circle} alt="" className=" lg:mx-auto " />
          </div>
          <div className=" hidden md:block absolute z-20  top-16  -right-10 md:mr-16  lg:mr-10 xl:mr-36">
            <img src={iPhone} alt="" className=" lg:w-[299px] lg:h-[500px] lg:object-cover"/>
          </div>
          <div className="  absolute z-30 top-12  -right-10 ml-5 md:left-8 lg:left-14 lg:top-6 xl:left-36">
            <img src={iPhone2} alt="" className="lg:w-[299px] lg:h-[500px] lg:object-cover"/>
          </div>
          <div className=" absolute z-40  top-8  -left-8 lg:left-1 lg:-top-5 xl:left-20">
            <img src={iPhone} alt="" className=" lg:w-[299px] lg:h-[500px] lg:object-cover"/>
          </div>
          <div className=" absolute w-[200px] h-[130px] xl:w-[300px] xl:h-[230px] bg-bgPrimary blur-xl rounded-full  z-10  ml-12 md:ml-28  -mt-10 md:-mt-44 lg:-mt-20 xl:-mt-72 xl:ml-40"></div>
          <img
            src={star}
            alt=""
            className=" absolute left-6 -mt-16 md:-mt-48 w-12 z-20 lg:-mt-16 xl:-mt-48 xl:ml-10"
          />
        </div>
      </div>

      <div className=" relative mt-20 md:mt-1 lg:-mt-36 lg:mr-8 xl:-mt-64">
        <img
          src={star}
          alt=""
          className=" hidden md:block absolute w-12 left-44 top-32 -rotate-45 lg:top-14 lg:left-24"
        />
        <img src={line} alt="" className=" mx-auto lg:mx-0 lg:w-[490px] xl:w-[500px] lg:h-[390px] object-cover" />
      </div>
    </section>
  );
};

export default Hero;
