import React from "react";
import im1 from "../assets/images/im1.png";
import im2 from "../assets/images/im2.png";
import im3 from "../assets/images/im3.png";

const ImageCardSection = () => {
  const cards = [
    {
      imageSrc: im1,
      title: "our blog",
      description: "This is a brief description for blog. ",
    },
    {
      imageSrc: im2,
      title: "our work",
      description: "This is a brief description for work.",
    },
    {
      imageSrc: im3,
      title: "professional",
      description: "This is a brief description for profit.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Text Section */}
        <div className="text-center mb-8">
          <p className="text-gray-800 font-bold text-4xl mb-2">
            Carring is the new marketing
          </p>
          <p className="text-gray-400 font-light text-large">
            The Nexcent blog is the best place to read about the latest
             community are increasing their
           
          </p>
          <p className="text-gray-400 font-light text-large">
          membership insights, trends and more. See who's joining the
          community, read about how our
          </p>
          <p className="text-gray-400 font-light text-large">
          membership income and lot's more.​
          </p>
        </div>
        {/* Image Cards Section */}
        <div className="flex justify-between gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative w-1/3">
              <img
                src={card.imageSrc}
                alt={`Card ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                <h3 className="text-gray-800 font-semibold text-lg">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                <a href="#" className="text-green-500 font-medium text-sm">
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardSection;
