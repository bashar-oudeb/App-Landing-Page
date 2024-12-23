import logo from "../assets/global/logo.png";
import mail from "../assets/Footer/mail.svg";
import phone from "../assets/Footer/phone.svg";



const Footer = () => {
  return (
    <footer className="bg-white text-gray-700  overflow-hidden">
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-4 xl:grid-cols-5">
          {/* Logo & Contact Section */}
          <div className="mb-6  md:mb-0 md:mt-8 col-span-4 md:col-span-1  mx-auto md:mx-0 ">
            <div className=" flex items-center justify-center md:justify-start">
              <img src={logo} alt="" />
             <h2 className=" text-2xl">uifry</h2> 
            </div>
            <div className="mt-4 flex items-center gap-1">
              <img src={mail} alt=""  className=" w-5 h-5"/>
             <h6 className=" text-black text-base">Help@Frybix.Com</h6> 
            </div>
            <div className="mt-2 flex items-center gap-1">
              <img src={phone} alt=""  className=" w-5 h-5"/>
              <h6 className=" text-black text-base">+1 234 456 6789</h6>
            </div>
            
          </div>

          {/* Links */}
          <div className=" col-span-2 ml-5 md:pt-10 md:col-span-1 xl:ml-0">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="text-black  text-base">Home</a></li>
              <li><a href="#" className="text-black   text-base">About Us</a></li>
              <li><a href="#" className="text-black  text-base">Bookings</a></li>
              
            </ul>
          </div>

          {/* Legal */}
          <div className=" col-span-2 ml-5 md:pt-10 md:col-span-1 xl:-ml-4">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black  text-base">Terms of Use</a></li>
              <li><a href="#" className="text-black  text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-black  text-base">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Product */}
          <div className="pt-4 col-span-2 ml-5 md:pt-10 md:col-span-1 xl:-ml-4">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black  text-base">Take Tour</a></li>
              <li><a href="#" className="text-black  text-base">Live Chat</a></li>
              <li><a href="#" className="text-black  text-base">Reviews</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="pt-4 w-full md:w-auto  md:mt-0 col-span-2 ml-5 md:pt-10 md:col-span-1 xl:-ml-14">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className=" mb-2">Stay Up To Date</p>
            <div className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 w-48 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-500"
              />
              <button className=" bg-black  text-white px-4 rounded-r-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className=" border mx-6 mt-8 xl:mt-12 border-black opacity-40 xl:opacity-20"/>
        {/* Bottom Footer */}
        <div className="text-center text-sm mt-4 xl:pt-6">
          <p>&copy; Copyright Bashar Oudeb All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
