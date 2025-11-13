import React from "react";
import { PillProps } from "@/interfaces";
// // Define props for the component
// interface PillProps {
//   title: string;
// }

// Accept props properly
const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;
