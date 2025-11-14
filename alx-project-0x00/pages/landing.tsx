import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Keep your original Card */}
      <Card />

      {/* Task 6 — Button Component Showcase */}
      <div className="space-y-6">
        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Button Sizes</h2>
          <div className="flex gap-4">
            <Button title="Small" size="small" />
            <Button title="Medium" size="medium" />
            <Button title="Large" size="large" />
          </div>
        </div>

        {/* Shapes */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Button Shapes</h2>
          <div className="flex gap-4">
            <Button title="Rounded SM" shape="rounded-sm" />
            <Button title="Rounded MD" shape="rounded-md" />
            <Button title="Rounded FULL" shape="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
