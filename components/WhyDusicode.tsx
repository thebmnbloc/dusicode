import { reasons } from "@/constants/reasons";
import { Button } from "./ui/button";
import { Square } from "lucide-react";


export const WhyDusicode = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-white-200 to-white-300 px-8 gap-6 ">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-2 rounded-full text-lg font-bold">
            WHY DUSICODE?
          </span>
          <h1 className="text-5xl font-bold">Our Competitive Advantages</h1>
          <p className="text-lg">We leverage cutting-edge technology to deliver exceptional software solutions that drive results.</p>
        </div>

        <Button className="bg-orange-600 text-white hover:bg-orange-400 text-lg px-5 py-6 rounded-4xl">
          <Square /> Learn More About Us
        </Button>
      </div>

      <div className="grid grid-cols-2">
        {reasons.map((reason, index) => (
          <div key={index} className="grid grid-cols-2 items-center justify-center gap-4 p-6">
              <span className="text-4xl">{reason.icon}</span>
              <span className="flex flex-col items-start justify-center gap-2 text-center">
                <h2 className="text-xl font-bold">{reason.title}</h2>
                <p className="text-md text-gray-600">{reason.description}</p>
              </span>
          </div>
        ))}
      </div>
    </div>
  );
};
