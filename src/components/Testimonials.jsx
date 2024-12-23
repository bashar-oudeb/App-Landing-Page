import React, { useState } from "react";
import circle from "../assets/global/circle.svg";
import img from "../assets/Testimonials/Ellipse.jpeg";
import img2 from "../assets/Testimonials/Ellipse-2.jpeg";
import img3 from "../assets/Testimonials/Ellipse-3.jpeg";
import img4 from "../assets/Testimonials/Ellipse-4.png";
import img5 from "../assets/Testimonials/Ellipse-5.png";

const Testimonials = () => {
  const initialTestimonials = [
    {
      id: 1,
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl .”",
      img: img,
      name: "User 1",
    },
    {
      id: 2,
      description:
        "“Ut venenatis tellus in metus vulputate eu scelerisque. Ut faucibus pulvinar elementum integer. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.”",
      img: img2,
      name: "User 2",
    },
    {
      id: 3,
      description:
        "“Eget gravida cum sociis natoque penatibus et magnis. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet.”",
      img: img3,
      name: "User 3",
    },
    {
      id: 4,
      description:
        "“Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent.”",
      img: img4,
      name: "User 4",
    },
    {
      id: 5,
      description:
        "“Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus.”",
      img: img5,
      name: "User 5",
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const handleImageClick = (clickedIndex) => {
    // Swap the main image with the clicked one
    const newTestimonials = [...testimonials];
    const [clickedItem] = newTestimonials.splice(clickedIndex, 1);
    newTestimonials.unshift(clickedItem);
    setTestimonials(newTestimonials);
  };

  return (
    <section className="pt-20 md:pt-5 px-3 overflow-hidden">
      {/* Section Header */}
      <div>
        <h5 className="text-center uppercase ">testimonial</h5>
        <h2 className="text-center pt-1 lg:px-72">
          What Our Users Say About Us?
        </h2>
      </div>

      <div className=" xl:flex xl:items-center ">
        {/* Circle Layout with Images */}
        <div className="relative ">
          <img
            src={circle}
            alt="background circle"
            className="relative mx-auto "
          />
          {/* Main Center Image */}
          <div className="absolute top-4  flex items-center justify-center inset-0">
            <img
              src={testimonials[0].img}
              alt="Current Testimonial"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          {/* Other Images in the Circle */}
          <div className="absolute top-12 right-24 md:top-32 md:right-44 lg:right-[315px] xl:top-24 xl:right-56">
            <img
              src={testimonials[1].img}
              alt="Testimonial 2"
              className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20 object-cover xl:w-14 xl:h-14"
              onClick={() => handleImageClick(1)}
            />
          </div>

          <div className="absolute top-[270px] md:top-[490px] left-16 md:left-40 lg:left-72 xl:left-44">
            <img
              src={testimonials[2].img}
              alt="Testimonial 3"
              className="cursor-pointer rounded-full  w-16 h-16 md:w-20 md:h-20  object-cover xl:w-14 xl:h-14"
              onClick={() => handleImageClick(2)}
            />
          </div>

          <div className="absolute top-16 left-12 md:top-32 md:left-32 lg:left-64 xl:left-32">
            <img
              src={testimonials[3].img}
              alt="Testimonial 4"
              className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20  object-cover xl:w-14 xl:h-14"
              onClick={() => handleImageClick(3)}
            />
          </div>

          <div className="absolute top-[270px] md:top-[510px] right-12 md:right-36 lg:right-64 xl:right-32 xl:top-[480px]">
            <img
              src={testimonials[4].img}
              alt="Testimonial 5"
              className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20  object-cover xl:w-14 xl:h-14"
              onClick={() => handleImageClick(4)}
            />
          </div>
        </div>

        <div className=" xl:w-2/4">
          {/* Testimonial Content */}
          <div className="text-center pt-6 md:pt-0 md:-mt-6">
            <h6 className="font-semibold text-lg lg:text-xl">
              {testimonials[0].name}
            </h6>
            <p className="pt-2 md:px-12 lg:px-44 xl:px-20">
              {testimonials[0].description}
            </p>
          </div>

          {/* Thumbnails Below */}
          <div className="pt-4  flex items-center justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={` cursor-pointer ${
                  index === 0 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={testimonial.img}
                  alt={`Thumbnail ${testimonial.id}`}
                  className="rounded-full w-10 h-10 object-cover xl:w-8 xl:h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
