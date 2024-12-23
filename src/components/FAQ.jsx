const FAQ = () => {
  const faq = [
    {
      id: 1,
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 2,
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 3,
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 4,
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 5,
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      id: 6,
      title: "The Best Financial Accounting App Ever!",
      description:
        "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];
  return (
    <section className=" pt-16 md:pt-28 px-3 overflow-hidden">
      <div>
        <h5 className="text-center uppercase">FAQ</h5>
        <h2 className="text-center pt-1">Frequently Asked Questions</h2>
      </div>

      <div className=" pt-5 xl:pt-10 md:w-3/4 md:mx-auto lg:mx-0 lg:w-full lg:grid lg:grid-cols-2 gap-3 xl:gap-y-5">
        {faq.map((item, index) => (
          <div
            className={`h-36 rounded-lg  ${
              item.id === 1 || item.id === 4 || item.id === 5 ? "bg-bgPrimary" : ""
            }`}
            key={index}
          >
            <h4
              className={`pt-8 px-2 ${
                item.id == 1 || item.id === 4 || item.id === 5 ? "text-white" : " text-black"
              }`}
            >
              {item.title}
            </h4>
            <p
              className={`  px-2 pt-4  ${
                item.id == 1 || item.id === 4 || item.id === 5 ? "text-white" : ""
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
