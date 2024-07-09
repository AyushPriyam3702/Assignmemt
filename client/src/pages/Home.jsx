import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image from "../assets/HeroImg.png";
import Logo1 from "../assets/Logo (3).png";
import Logo2 from "../assets/Logo (4).png";
import Logo3 from "../assets/Logo (5).png";
import Logo4 from "../assets/Logo (6).png";
import Logo5 from "../assets/Logo (7).png";
import Logo6 from "../assets/Logo (8).png";
import Icon1 from "../assets/Icon (2).png";
import Icon2 from "../assets/Icon (5).png";
import Icon3 from "../assets/Icon (6).png";
import image2 from "../assets/frame1.png";
import { CommCard } from "../components/CommCard";
import { ImgTextBox } from "../components/ImgTextBox";
import BusinessSection from "../components/BusinessSection";
import MobileLogin from "../assets/pana.png";
import image3 from "../assets/image 9.png";
import Cardimage1 from "../assets/image 18.png";
import Cardimage2 from "../assets/image 19.png";
import Cardimage3 from "../assets/image 20.png";
import { Card } from "../components/Card";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      {/* Hero section  */}
      <div className="flex  flex-col md:flex-row justify-center items-center p-4 dark:bg-gray-900 dark:text-white">
        <div className="flex md:w-1/2 p-4 ">
          <div className="mx-auto">
            <h1 className="font-inter text-3xl md:text-6xl font-semibold md:leading-[76px] text-left  ">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="font-inter font-normal text-base md:leading-6">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Link to="/">
              <button className=" bg-[#4CAF4F] text-white px-6 py-3 my-4 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="flex md:w-1/2 p-4 ">
          <div className="mx-auto">
            <img src={image} alt="Hero image " />
          </div>
        </div>
      </div>

      {/* Our Client starts here */}
      <div className="flex flex-col p-4 bg-white mx-auto w-full dark:bg-black dark:text-white">
        <div className="flex flex-col">
          <h1 className="font-inter font-semibold text-3xl leading-[44px] text-center">
            Our Clients
          </h1>
          <p className="font-inter font-normal text-base leading-6 text-center text-[#18191F] dark:text-white ">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-row md:flex-wrap justify-center p-4 gap-4">
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo1} alt="client logo image" />
          </div>
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo2} alt="client logo image" />
          </div>
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo3} alt="client logo image" />
          </div>
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo4} alt="client logo image" />
          </div>
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo5} alt="client logo image" />
          </div>
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo6} alt="client logo image" />
          </div>
          <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={Logo3} alt="client logo image" />
          </div>
        </div>
      </div>
      {/* Our Client ends here */}

      {/* Community section starts here */}
      <div className="flex flex-col p-4 dark:bg-black dark:text-white">
        <div className="flex flex-col mx-auto text-center">
          <h1 className="font-inter font-semibold text-3xl leading-[44px] text-center">
            Manage your entire community in a single system
          </h1>
          <p className="font-inter font-normal text-base leading-6 text-center text-[#717171] dark:text-white">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 p-4 w-full lg:w-3/4 mx-auto">
          <div className="w-full lg:w-1/3">
            <CommCard
              icon={Icon1}
              text="Membership Organisations"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <CommCard
              icon={Icon2}
              text="National Associations"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <CommCard
              icon={Icon3}
              text="Clubs And Groups"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
          </div>
        </div>
      </div>
      {/* Community section ends here */}

      <ImgTextBox
        image={image2}
        text="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            minus quae porro earum voluptas officia laborum amet. Explicabo
            possimus optio, vitae voluptatibus aut rerum obcaecati esse
            praesentium neque expedita enim. Accusamus, obcaecati perspiciatis
            autem earum amet id et ipsum at ex enim voluptas sapiente nulla a
            voluptatibus omnis laborum quibusdam ut. Voluptatibus nobis maiores
            cumque maxime totam velit dicta ipsum."
        buttonText="Learn More"
      />

      <BusinessSection />

      <ImgTextBox
        image={MobileLogin}
        text="How to design your site footer like we did"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            minus quae porro earum voluptas officia laborum amet. Explicabo
            possimus optio, vitae voluptatibus aut rerum obcaecati esse
            praesentium neque expedita enim. Accusamus, obcaecati perspiciatis
            autem earum amet id et ipsum at ex enim voluptas sapiente nulla a
            voluptatibus omnis laborum quibusdam ut. Voluptatibus nobis maiores
            cumque maxime totam velit dicta ipsum."
        buttonText="Learn More"
      />
      <div className="flex flex-col md:flex-row justify-center items-center space-x-8 p-4 dark:bg-gray-900 dark:text-white">
        <div className="">
          <div className="mx-auto">
            <img src={image3} alt="mx-auto" />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            minus quae porro earum voluptas officia laborum amet. Explicabo
            possimus optio, vitae voluptatibus aut rerum obcaecati esse
            praesentium neque expedita enim. Accusamus, obcaecati perspiciatis
            autem earum amet id et ipsum at ex enim voluptas sapiente nulla a
            voluptatibus omnis laborum quibusdam ut. Voluptatibus nobis maiores
            cumque maxime totam velit dicta ipsum.
          </p>
          <h1 className="text-[#4CAF4F] text-2xl">Tim Smith</h1>
          <p>British Dragon Boat Association</p>

          <div className="flex flex-row md:flex-wrap justify-center p-4 gap-4 items-center">
            <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <img src={Logo1} alt="client logo image" />
            </div>
            <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <img src={Logo2} alt="client logo image" />
            </div>
            <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <img src={Logo3} alt="client logo image" />
            </div>
            <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <img src={Logo4} alt="client logo image" />
            </div>
            <div className="flex justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
              <img src={Logo5} alt="client logo image" />
            </div>
            <p className="md:text-xl md:font-bold text-[#4CAF4F]">
              Meet all customer &rarr;
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-6 gap-4 dark:bg-gray-900 dark:text-white">
        <Card
          image={Cardimage1}
          text="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <Card
          image={Cardimage2}
          text="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <Card
          image={Cardimage3}
          text="Creating Streamlined Safeguarding Processes with OneRen"
        />
      </div>
      <div className="flex flex-col p-8 space-y-4 bg-gray-900 text-white  dark:bg-black dark:text-white">
        <p className="font-inter font-semibold text-4xl md:text-6xl md:leading-[76px] text-center ">
          Pellentesque suscipit <br></br> fringilla libero eu.
        </p>
        <div className=" mx-auto">
          <button className=" bg-[#4CAF4F] text-white px-6 py-3 my-4 rounded-md">
            Get a Demo &rarr;
          </button>
        </div>
      </div>
    </>
  );
};
