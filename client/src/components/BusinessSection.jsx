import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Icon1 from "../assets/Icon (3).png";
import Icon2 from "../assets/Icon (4).png";
import Icon3 from "../assets/Icon (7).png";
import Icon4 from "../assets/Icon (8).png";

const BusinessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-center p-8 dark:bg-gray-900 dark:text-white"
      ref={ref}
    >
      <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0 md:p-8">
        <h1 className="text-3xl font-bold">
          Helping a local <br></br>
          <span className="text-green-600">Business reinvent itself</span>
        </h1>
        <p className="text-lg mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:w-1/2">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-2">
            <img src={Icon1} alt="" className="h-3/4" />
            {inView && (
              <CountUp
                end={2245341}
                duration={2.5}
                separator=","
                className=" text-xl font-semibold md:text-3xl md:font-bold"
              />
            )}
          </div>
          <p className="">Members</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-2">
            <img src={Icon2} alt="" className="" />
            {inView && (
              <CountUp
                end={46328}
                duration={2.5}
                separator=","
                className="text-xl font-semibold md:text-3xl md:font-bold"
              />
            )}
          </div>
          <p className="">Clubs</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-2">
            <img src={Icon3} alt="" className="h-3/4" />
            {inView && (
              <CountUp
                end={828868}
                duration={2.5}
                separator=","
                className="text-xl font-semibold md:text-3xl md:font-bold"
              />
            )}
          </div>
          <p className="">Event Bookings</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-2">
            <img src={Icon4} alt="" className="h-3/4" />
            {inView && (
              <CountUp
                end={1926436}
                duration={2.5}
                separator=","
                className="text-xl font-semibold md:text-3xl md:font-bold"
              />
            )}
          </div>
          <p className="">Payments</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
