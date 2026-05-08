import { Rocket } from "lucide-react";
import { Button } from "./ui/button";

export const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-orange-600 to-orange-800 px-8 gap-6">
       
      <span className="flex items-center justify-center bg-orange-600 text-lg text-white px-8 py-2 rounded-4xl gap-2">
          <span><Rocket className="inline-block w-4 h-4 ml-1" /></span>
          <span>Ready to Get Started</span>
      </span>

      <h1 className="text-6xl font-bold text-white text-center">
        Let's Build Something <br /> Amazing Together
      </h1>

      <p className="text-lg text-white">
        Ready to take your project to the next level? Let's get started!
      </p>

      <div className="flex items-center justify-center gap-6">
        <Button className="bg-orange-600 hover:bg-white hover:text-black text-lg text-white px-10 py-8 rounded-full">
            <span><Rocket className="inline-block w-4 h-4 ml-1" /></span>
            Start Your Project
        </Button>

        <Button className="bg-green-600 hover:bg-green-400 text-lg text-white px-10 py-8 rounded-full">
            <span><Rocket className="inline-block w-4 h-4 ml-1" /></span>
            Chat On WhatsApp
        </Button>
      </div>
    </div>
  );
};