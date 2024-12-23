import React from "react";

interface CardProps {
  title: string;
  link: string;
  img: string;
}

export const Card: React.FC<CardProps> = ({ title, link, img }) => {
  return (
    <div
      className="tab justify-between items-end h-52 p-4 border rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <p className="tab-title text-lg font-bold text-center  bg-white/70 p-2 rounded-md">
        {title}
      </p>
      <i className="fa-solid fa-code fa-3x my-2 text-white"></i>
      <div className="tab-more">
        <a
          href={link}
          className="text-blue-500 font-semibold hover:underline bg-white/70 p-1 rounded-md"
        >
          more
        </a>
      </div>
    </div>
  );
};
