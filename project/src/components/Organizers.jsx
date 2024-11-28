import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const organizersData = [
  {
    name: 'Aniruddha Ghosh',
    description: 'Description for Organizer One.',
    image: 'link_to_image_1',
  },
  {
    name: 'Shekhar Hans',
    description: 'Description for Organizer Two.',
    image: 'link_to_image_2',
  },
  {
    name: 'Arnab Manna',
    description: 'Description for Organizer Three.',
    image: 'link_to_image_3',
  },
  {
    name: 'arekjon',
    description: 'Description for Organizer Three.',
    image: 'link_to_image_3',
  },
  // Add more organizers as needed
];

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <button className="bg-[#097969] text-white rounded-full p-2 m-8 w-12 h-12">
        &#10094; {/* Left arrow symbol */}
      </button>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
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
  };

  return (
    <div className="min-h-screen organizers-section relative py-40 px-10">
      <h2 className="text-center font-oxanium text-[#004825] text-8xl font-bold mb-[8rem]">Meet Our Organizers</h2>
      <Slider {...settings}>
        {organizersData.map((organizer, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#AFE1AF] border-black border-solid rounded-lg shadow-lg overflow-hidden transform transition-transform duration-700 hover:scale-105">
              <img src={organizer.image} alt={organizer.name} className="w-50 h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{organizer.name}</h3>
                <p className="text-gray-600">{organizer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Organizers;