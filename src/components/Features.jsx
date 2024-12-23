import star from "../assets/features/star-05.svg";
import star2 from "../assets/global/Star.svg";
import cube from "../assets/features/cube-02.svg";
import cube2 from "../assets/features/cube-04.svg";
import iPhone from "../assets/hero/iPhone.png";
import circle from "../assets/global/circle.svg";

const Features = () => {
  const features = [
    {
      img: star,
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      img: cube,
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      img: cube2,
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];
  return (
    <section className=" pt-12 px-3 overflow-hidden lg:flex lg:items-center lg:flex-row-reverse">
      <div className=" lg:w-2/4">
        <h5 className=" text-center lg:text-start uppercase">features</h5>
        <h2 className=" text-center pt-1 lg:text-start">Uifry Premium</h2>

        <div className=" pt-5 flex flex-col gap-5">
          {features.map((item, index) => (
            <div className="" key={index}>
              <div className=" flex items-center justify-center gap-2 lg:justify-start">
                <img src={item.img} alt="" className="w-5" />
                <h6 className=" font-semibold text-md md:text-lg">{item.title}</h6>
              </div>
              <p className="pt-2 text-center md:px-24 md:text-base lg:px-0 lg:text-start">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 relative lg:w-2/4">
        <img src={star2} alt="" className=" absolute w-10 -rotate-6 top-16 md:top-32 md:left-10" />
        <div className=" absolute inset-0 flex items-center justify-center -top-32 md:bottom-36 lg:bottom-10 md:-left-32 lg:-left-11 ">
          <div className=" w-[200px] h-[130px] md:w-[350px] md:h-[190px] bg-bgSecondary blur-xl rounded-full relative z-10"></div>
          <div className="w-[200px] h-[100px]md:w-[350px] md:h-[190px] bg-bgPrimary blur-xl rounded-full  absolute  z-10"></div>
        </div>
        <div className=" relative z-20">
          <img src={circle} alt="" className=" mx-auto " />
        </div>
        <div className="absolute top-16 left-12 md:left-32  z-30  lg:left-10 lg:top-8">
          <img src={iPhone} alt="" className=" rotate-[14deg] " />
        </div>
      </div>
    </section>
  );
};

export default Features;
