import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reveal } from "./Reveal";

const organizersData = [
  {
    name: "Shekhar Hans",
    description: "Description for Organizer Two.",
    image: "../src/pfp/shekhar.jpg",
  },
  {
    name: "Aniruddha Ghosh",
    description: "Description for Organizer One.",
    image: "../src/pfp/aniruddha.jpg",
  },
  {
    name: "Arnab Manna",
    description: "Description for Organizer Three.",
    image: "../src/pfp/arnab.jpg",
  },
  {
    name: "Bidisha Banik",
    description: "Description for Organizer Four.",
    image: "../src/pfp/bidisha.jpg",
  },
  {
    name: "Debangan Dey",
    description: "Description for Organizer Four.",
    image: "../src/pfp/debangan.jpg",
  },
  {
    name: "Sayandip Ghosh",
    description: "Description for Organizer Four.",
    image: "../src/pfp/sayandip.jpg",
  },
  {
    name: "Sahil Golder",
    description: "Description for Organizer Four.",
    image: "../src/pfp/sahil.jpg",
  },
  {
    name: "Somshirsha Bhattacharya",
    description: "Description for Organizer Four.",
    image: "../src/pfp/somshirsha.jpg",
  },
  {
    name: "Ankit Kundu",
    description: "Description for Organizer Four.",
    image: "../src/pfp/ankit.jpg",
  },
  {
    name: "Aahana Malakar",
    description: "Description for Organizer Four.",
    image: "../src/pfp/aahana.jpg",
  },
  {
    name: "Sagarika Bandopadhyay",
    description: "Description for Organizer Four.",
    image: "../src/pfp/sagarika.jpg",
  },
  {
    name: "Sayan Sanpui",
    description: "Description for Organizer Four.",
    image: "../src/pfp/sayan.jpg",
  },
  {
    name: "Muskan Das",
    description: "Description for Organizer Four.",
    image: "../src/pfp/muskaan.jpg",
  },
  // Add more organizers as needed
];

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <button className="bg-[#097969] text-white rounded-full p-2 m-8 w-12 h-12">
        &#10094; {/* Left arrow symbol */}
      </button>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <button className="bg-[#097969] text-white rounded-full p-2 m-8 w-12 h-12">
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

const Organizers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 820, // For screens up to 640px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560, // For screens up to 500px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen organizers-section relative py-40 px-10 bg-[#ffffff]">
      <h2 className="text-center font-oxanium text-[#004825] text-8xl font-bold mb-[8rem] max-[640px]:text-5xl md:text-6xl lg:text-8xl">
        <Reveal>Meet Our Organizers</Reveal>
      </h2>
      <Reveal>
        <Slider {...settings}>
          {organizersData.map((organizer, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#AFE1AF] flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-700 hover:scale-105">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-[260px] h-[260px] rounded-[1.5rem] object-cover p-4 flex items-center justify-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-oxanium text-center font-semibold">
                    {organizer.name}
                  </h3>
                  {/* <p className="text-gray-600 text-center">{organizer.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Reveal>
    </div>
  );
};

export default Organizers;
