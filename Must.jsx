import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: "https://www.trawell.in/blog/wp-content/uploads/2024/03/ooty-main-730x410.jpg",
      title: "Ooty",
      description:
        "A quaint hill town, perched against the backdrop of Doddabetta. Incredible hill views. Located at the crossroads of the states of Tamil Nadu, Kerala, and Karnataka, this section of the Nilgiris range brings joy to tourists from all over the country.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QSu9hjfEiDbmWviL_oYouboDv56nEbpEPQ&usqp=CAU",
      title: "Dalhousie",
      description:
        "Perched atop a rocky ridge, with snow-clad Dhauladhar mountains and Dalhousie is famous for its Victorian architecture, breath-taking lush green landscapes, tranquility, adventure activities and the snow-capped Dhauladhar Mountain Range.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdJo08YMtSNJOuQHfV4Tw7cFFxSyoi06Wug&usqp=CAU",
      title: "Dharamsala",
      description:
        "A pristine green expanse ringed by the mist-shrouded Himalayas Dharamshala is a beautiful hill station in the Indian state of Himachal Pradesh, famous for its stunning natural beauty, Buddhist monasteries, and vibrant culture.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC-uCj9cOJ2NPV2pORBM4o8mi1lDULvEk7Q&usqp=CAU",
      title: "Kavaratti",
      description:
        "Exerting a magnetic pull over scuba divers, snorkellers and nature enthusiasts alike, Kavaratti has the maximum number of mosques in Lakshadweep. Out of the 52 mosques, Jamnath, Mohidden, and Ujra are prominent ones. Jamnath mosque is a massive structure having the largest tank of any mosque in the islands.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GxfPVaf61XTQTjC0PNNTOuPvvK730utO7g&usqp=CAU",
      title: "Great Wall of China",
      description:
        "One of the most famous structures in the world, the Great Wall of China stretches over 13,000 miles and was built over centuries by various Chinese dynasties to protect against invasions from nomadic tribes.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFzHMjS0E-y0m3xWuzWe0RtQgqCcaaGNi0Q&usqp=CAU",
      title: "Taj Mahal",
      description:
        "Regarded as one of the most beautiful buildings in the world, the Taj Mahal is a mausoleum located in Agra, India. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawaOZW1jOYIZyVrWnxYIqUZ3G91zsz5pbjw&usqp=CAU",
      title: "Chichen Itza",
      description:
        "An ancient Mayan city located in Mexico, Chichen Itza is known for its well-preserved ruins, including the Pyramid of Kukulcán, which is one of the New Seven Wonders of the World.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FMo3hSra_nFcbSRuRWY8pzOFDHWpET9B0g&usqp=CAU",
      title: "Machu Picchu",
      description:
        "Located in Peru, Machu Picchu is an ancient Incan city perched high in the Andes Mountains. It is renowned for its stunning architecture and panoramic views.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl_5U5zoO8XdFOz8Ind5duijDHrAnDLhaEw&usqp=CAU",
      title: "Petra",
      description:
        "Located in Jordan, Petra is an ancient city famous for its rock-cut architecture and water conduit system. It is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E7k6ROKO1hQ-Ez1IkGJROsnDnuGaHttocA&usqp=CAU",
      title: "Colosseum",
      description:
        "An ancient amphitheater located in Rome, Italy, the Colosseum is one of the most iconic landmarks of the Roman Empire. It was used for gladiatorial contests and public spectacles.",
    },
  ];

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Must Visit Destinations
        </h2>
        <p className="text-center mb-4">
          From historical cities to natural splendours, come see the best of
          India
        </p>

        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <div className="card">
                  <img src={slide.img} alt={slide.title} />
                  <div className="card-content">
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="control-nav">
            {slides.map((_, index) => (
              <label
                key={index}
                className={currentIndex === index ? "active" : ""}
                onClick={() => handleNavClick(index)}
              ></label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
