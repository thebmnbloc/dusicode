import { sectors } from "@/constants/sectors";
import { Button } from "./ui/button";
import { Square } from "lucide-react";

export const WeBuild = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-gray-200 to-gray-300 px-8 gap-6 ">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
          <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-2 rounded-full text-lg font-bold">
            WHAT WE BUILD
          </span>
          <h1 className="text-5xl font-bold">Custom Software Solutions</h1>
          <p className="text-lg">We specialize in building tailored software systems for organizations across <br /> every sector. Click any solution to see what is included.</p>
      </div>

      <div className="grid grid-cols-3 items-center justify-center gap-2">
        {sectors.map((sector, index) => (
          <div key={index} className="flex flex-col items-items justify-center bg-white hover:border-1 hover:border-orange-600 px-6 py-2 rounded-xl gap-4">
            <span>{sector.icon}</span>
            <span className="text-md font-bold bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-20 py-1 rounded-3xl">{sector.name}</span>
            <span className="text-xl font-bold text-gray-800">{sector.title}</span>
            <span className="text-md text-gray-800">{sector.description}</span>
            <span className="text-sm text-orange-600">{sector.cta}</span>
          </div>
        ))}
      </div>
      
      <Button className="bg-orange-600 text-white hover:bg-orange-400 text-lg px-5 py-6 rounded-4xl">
         <Square /> View All 40+ Solutions
      </Button>

    </div>
  );
};
