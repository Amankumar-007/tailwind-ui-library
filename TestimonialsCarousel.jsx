import React, { useState } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    position: "Software Engineer",
    message: "This platform completely changed the way I work. Highly recommended!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Brown",
    position: "Product Manager",
    message: "Amazing design and easy to use. I absolutely love it!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Sarah Lee",
    position: "UI/UX Designer",
    message: "This is a game-changer! It streamlined our entire workflow.",
    avatar: "https://via.placeholder.com/150",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, position, message, avatar } = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg max-w-lg mx-auto text-white">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-white"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm">{position}</p>
        </div>
      </div>
      <p className="mt-4 text-sm italic">"{message}"</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevTestimonial}
          className="bg-white text-blue-500 hover:bg-blue-100 font-bold py-1 px-3 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-white text-blue-500 hover:bg-blue-100 font-bold py-1 px-3 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
