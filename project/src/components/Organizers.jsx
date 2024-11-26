import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Importing CSS
import 'slick-carousel/slick/slick-theme.css';

const organizersData = [
  {
    name: 'Organizer One',
    description: 'Description for Organizer One.',
    image: 'link_to_image_1',
  },
  {
    name: 'Organizer Two',
    description: 'Description for Organizer Two.',
    image: 'link_to_image_2',
  },
  {
    name: 'Organizer Three',
    description: 'Description for Organizer Three.',
    image: 'link_to_image_3',
  },
  // Add more organizers as needed
];

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
  };

  return (
    <div className="organizers-section py-10">
      <h2 className="text-center text-4xl font-bold mb-6">Meet Our Organizers</h2>
      <Slider {...settings}>
        {organizersData.map((organizer, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={organizer.image} alt={organizer.name} className="w-full h-48 object-cover" />
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