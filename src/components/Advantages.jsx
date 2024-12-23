import notifications from "../assets/Advantages/notifications.svg";
import reng from "../assets/Advantages/reng.png";
import circle from "../assets/global/circle.svg";
import star from "../assets/global/Star.svg";
import iPhone from "../assets/hero/iPhone-2.png";
import iPhone2 from "../assets/hero/iPhone.png";

const Advantages = () => {
  return (
    <section className="pt-16 md:pt-12 px-3 overflow-hidden ">
      <div className=" lg:flex lg:items-center">
        <div className="lg:w-2/4 lg:pl-16 lg:mt-5">
          <h5 className=" text-center uppercase lg:text-start">advatnages</h5>
          <h2 className=" text-center pt-1 lg:text-start">Why Choose Uifry?</h2>
          <div className="pt-6 flex items-center justify-center gap-2 lg:justify-start">
            <img src={notifications} alt="" className="w-8 h-8" />
            <h6 className=" font-semibold text-md md:text-lg">
              Clever Notifications
            </h6>
          </div>
          <p className="pt-3 text-center text-base md:px-10 lg:px-0 lg:text-start ">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>

        <div className="-mt-6 lg:w-2/4">
          <div className="pt-5 relative ">
            <img
              src={star}
              alt=""
              className=" absolute w-10 -rotate-6 top-16 right-0 md:right-24 md:top-32"
            />
            <div className=" absolute inset-0 flex items-center justify-center -bottom-32 md:top-52 md:right-40 lg:top-28 lg:left-24">
              <div className="md:top-40 w-[200px] h-[100px] md:w-[300px] md:h-[170px] bg-bgPrimary blur-xl rounded-full  absolute  z-10"></div>
              <div className=" w-[200px] h-[130px] md:w-[300px] md:h-[170px] bg-bgSecondary blur-xl rounded-full relative z-10"></div>
            </div>
            <div className=" relative z-20">
              <img src={circle} alt="" className=" md:mx-auto" />
            </div>
            <div className="absolute top-16 left-12 md:left-28 z-30 lg:left-10 lg:top-8">
              <img src={iPhone} alt="" className=" rotate-[14deg] " />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 lg:pb-28 md:pt-0 lg:flex lg:items-center lg:flex-row-reverse">
        <div className=" lg:w-2/4">
          <div className="pt-6 md:pt-2 flex items-center justify-center gap-2 lg:justify-start">
            <img src={reng} alt="" className="w-8 h-8" />
            <h6 className=" font-semibold text-md md:text-lg">
              Fully Customizable
            </h6>
          </div>
          <p className="pt-3 text-center md:text-base md:px-14 lg:px-0 lg:text-start xl:pr-28">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="-mt-6 ">
          <div className="pt-5 relative">
            <img
              src={star}
              alt=""
              className=" absolute w-10 -rotate-6 top-16 left-0 md:top-32 md:left-16"
            />
            <div className=" absolute inset-0 flex items-center justify-center -bottom-32 md:left-32 md:-bottom-72 lg:left-12">
              <div className=" w-[200px] h-[130px] md:w-[300px] md:h-[170px]  bg-bgSecondary blur-xl rounded-full relative z-10 md:-top-20"></div>
              <div className="w-[200px] h-[100px] md:w-[300px] md:h-[170px] bg-bgPrimary blur-xl rounded-full  absolute  z-10"></div>
            </div>
            <div className=" relative z-20 ">
              <img src={circle} alt="" className="md:mx-auto" />
            </div>
            <div className="absolute top-16 left-12 md:left-32 z-30 lg:left-16 lg:top-14 xl:left-28">
              <img src={iPhone2} alt="" className=" rotate-[14deg] lg:w-[470px] lg:h-[ 547px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
