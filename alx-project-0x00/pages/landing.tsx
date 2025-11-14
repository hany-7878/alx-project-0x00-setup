import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-2xl font-extralight">Landing Page</h1>

      <Card />

      {/* Button Sizes */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Button Sizes</h2>
        <div className="flex gap-4 flex-wrap">
          <Button title="Small" styles="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600" />
          <Button title="Medium" styles="px-4 py-2 text-base rounded-md bg-blue-500 text-white hover:bg-blue-600" />
          <Button title="Large" styles="px-6 py-3 text-lg rounded-md bg-blue-500 text-white hover:bg-blue-600" />
        </div>
      </div>

      {/* Button Shapes */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Button Shapes</h2>
        <div className="flex gap-4 flex-wrap">
          <Button title="Rounded SM" styles="px-4 py-2 text-base rounded-sm bg-blue-500 text-white hover:bg-blue-600" />
          <Button title="Rounded MD" styles="px-4 py-2 text-base rounded-md bg-blue-500 text-white hover:bg-blue-600" />
          <Button title="Rounded FULL" styles="px-4 py-2 text-base rounded-full bg-blue-500 text-white hover:bg-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
