import Button from "./BTN";
import apple from "../assets/CallToAction/apple.svg";
import phone from "../assets/CallToAction/iphone.png";
import circle from "../assets/CallToAction/circle.png";
import star from "../assets/CallToAction/star.svg";

const CallToAction = () => {
  return (
    <section className=" pt-16 overflow-hidden">
      <div className="relative bg-black lg:flex ">
        <div className=" pt-20  text-center lg:text-start ">
          <h2 className="  text-white text-3xl lg:mt-14 lg:ml-11 xl:text-5xl">Ready To Get Started?</h2>
          <p className="text-center px-2 lg:px-0 py-4 text-white  lg:pr-8 lg:text-start lg:ml-11">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <Button
            style=" bg-white flex mx-auto lg:mx-0 lg:ml-11   "
            color="text-black"
            children={"Download App"}
            img={apple}
          />
          <img src={circle} alt="" className=" absolute top-40 lg:top-64" />
          <img src={star} alt=""  className=" hidden absolute lg:block w-8 left-96 top-96"/>
        </div>

        <div className=" pt-8 pb-20 relative lg:left-4 xl:left-44">
          <img
            src={phone}
            alt=""
            className="w-96 md:w-[500px] ml-auto lg:ml-0  relative z-20  "
          />
          <div className="  absolute inset-0 flex items-center justify-center  z-10 left-24 md:left-96">
            <div className=" w-[200px] h-[130px] bg-bgPrimary blur-xl rounded-full relative z-20 "></div>
            <div className="w-[200px] h-[100px] bg-bgSecondary blur-xl rounded-full  absolute mt-24 mr-5  z-10"></div>
          </div>

          <img src={star} alt=""  className=" hidden md:block absolute w-12 top-64 left-36 lg:top-16 lg:left-4"/>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
