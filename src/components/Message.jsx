import React from "react";
import photo1 from "../assets/photo2.jpg";
import photo2 from "../assets/photo1.jpg";
import Carousel from "./Carousel";
import { ImageCard } from "./ImageCard";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    {
      Image: photo1,
      title: "October 13, 2024",
      description: "Terimaksaih sayang ku,kamu wanita terbaik yang pernah kutemui",
    },
    {
      Image: photo2,
      title: "January 01, 2025",
      description: "I love You :>",
    },
  ];
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Messages
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Memorable moment"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
