import React from "react";

interface CardProps {
  title: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ title, link }) => {
  return (
    <div className="tab flex flex-col justify-between items-end h-52 p-4 border rounded-lg shadow-lg">
      <div>
      </div>
        <p className="tab-title text-lg font-bold text-center">{title}</p>
        <i className="fa-solid fa-code fa-7x my-2"></i>
      {/* Uncomment and style if needed */}
      {/* <div className="overlay">
          <i className="fa-brands fa-github fa-2xl" style={{ color: "#000" }}></i>
    </div> */}
      <div className="tab-more ">
        <a href={link} className="text-blue-500 font-semibold hover:underline">
          more
        </a>
      </div>
    </div>
  );
};
