"use client";

import { Box, PlusIcon, Hospital, School, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cardItems } from "@/constants/card-items";
import DusiCodeDetails from "@/components/DusiCodeDetails";
import { WeBuild } from "@/components/WeBuild";
import { WhyDusicode } from "@/components/WhyDusicode";
import { OurServices } from "@/components/OurServices";
import { OurClients } from "@/components/OurClients";
import { GetStarted } from "@/components/GetStarted";
import { OurTestimonials } from "@/components/OurTestimonials";



export default function Home() {
  return (
    
    <>
   {/* first Carousel content */}

   <div className="grid grid-cols-2 items-center justify-center min-h-screen py-2 bg-gradient-to-b from-slate-800 to-slate-900 px-8 gap-16">

    <div className="gap-6 flex flex-col items-start justify-center">

      <div className="flex items-center justify-center text-sm font-bold text-orange-400 bg-orange-900 border-1 border-orange-400 px-6 py-2 rounded-full gap-2">

       <span className="bg-orange-800 w-4 h-4 rounded-full"></span>

       <span>
         South Sudan's Leading Software Company
       </span>

      </div>

      <h1 className="text-5xl font-bold text-white mt-4">
        We Build Custom <br /> <span className="text-orange-600">Software</span> That <br /> Powers Africa
      </h1>

      <p className="text-lg text-white mt-2">
        From core banking systems to school management platforms- <br /> DusiCode delivers secure, scalable and tailor-made digital solutions for organizations across South Sudan and East Africa.
      </p>

      <div className="mt-4 flex gap-4">
        <Button className="bg-orange-600 text-white hover:bg-orange-400 text-lg px-5 py-6 rounded-4xl">
          Explore Solutions
        </Button>

        <Button className="bg-slate-800 text-white border-white hover:text-slate-800 hover:bg-white text-lg px-5 py-6 rounded-4xl">
          Free Consultations
        </Button>
      </div>

    </div>

    <div className="bg-taupe-800 rounded-2xl h-[300px] w-80 text-white flex flex-col items-center items-start justify-center gap-4 px-8">
      <div className="flex items-center justify-center gap-4">
        <span className="bg-orange-600 text-lg font-bold p-2 rounded-lg">
         <Box />
        </span>

        <div className="flex flex-col items-start items-center justify-center">
          <span className="text-lg text-bold text-white-400">
            DusiCode
          </span>
          <span className="text-sm text-gray-400">
            Software Solutions
          </span>
        </div>
        
      </div>
      
      <div className="relative flex flex-col items-start justify-center gap-3 mt-4 text-sm text-orange-600">
        <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2"> 
          <School className="w-5 h-5 text-orange-600" /> 
          <div>School Management Systems</div>
        </div>

        <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2"> 
          <Hospital className="w-5 h-5 text-orange-600" />
          <div>Hospital Management Systems</div>
        </div>

          <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2"> 
            <Banknote className="w-5 h-5 text-orange-600" />
            <div>Core Banking Systems</div>
          </div>

          <div className="bg-orange-900/20 h-10 w-60 rounded-4xl flex items-center justify-center gap-2 text-orange-600"> 
            <PlusIcon className="w-5 h-5 text-orange-600" />
            <div>28+ More Solutions</div>
          </div>


          <Button className="absolute top-[-105px] right-[-60px] bg-orange-600 text-white hover:bg-orange-400 text-md px-5 py-4 rounded-4xl">
            100+ Delivered
          </Button>

          <Button className="absolute bottom-[-15px] left-[-60px] bg-white text-black text-md px-5 py-4 rounded-4xl">
            28+ Solutions
          </Button>
      </div>
    </div>
   </div>


    {/* Second Carousel content */}

   <div className="grid grid-cols-2 items-center justify-center min-h-screen py-2 bg-gradient-to-b from-slate-800 to-slate-900 px-8 gap-16">

    <div className="gap-6 flex flex-col items-start justify-center">

      <div className="flex items-center justify-center text-sm font-bold text-orange-400 bg-orange-900 border-1 border-orange-400 px-6 py-2 rounded-full gap-2">

       <span className="bg-orange-800 w-4 h-4 rounded-full"></span>

       <span>
         South Sudan's Leading Software Company
       </span>

      </div>

      <h1 className="text-5xl font-bold text-white mt-4">
        Digital Solutions <br /> Built for the <br /> African Context
      </h1>

      <p className="text-lg text-white mt-2">
        We understand the unique challenges of operating in South Sudan - unreliable internet, mobile money payments and multi-language requiremnets. Our software is built for your reality.
      </p>

      <div className="mt-4 flex gap-4">
        <Button className="bg-orange-600 text-white hover:bg-orange-400 text-lg px-12 py-6 rounded-4xl">
          View Our Work
        </Button>

        <Button className="bg-slate-800 text-white border-white hover:text-slate-800 hover:bg-white text-lg px-12 py-6 rounded-4xl">
          About DusiCode
        </Button>
      </div>

    </div>

    <div className="bg-taupe-800 rounded-2xl h-[300px] w-80 text-white flex flex-col items-center items-start justify-center gap-4 px-8">
      <div className="flex items-center justify-center gap-4">
        <span className="bg-orange-600 text-lg font-bold p-2 rounded-lg">
         <Box />
        </span>

        <div className="flex flex-col items-start items-center justify-center">
          <span className="text-lg text-bold text-white-400">
            Proven Impact
          </span>
          <span className="text-sm text-gray-400">
            Across South Sudan & East Africa
          </span>
        </div>
        
      </div>
      
      <div className="flex flex-col items-start justify-center gap-3 mt-4 text-sm text-orange-600">
        <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2"> 
          <School className="w-5 h-5 text-orange-600" /> 
          <div>Projects Delivered 100+</div>
        </div>

        <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2"> 
          <Hospital className="w-5 h-5 text-orange-600" />
          <div>Years of experience 4+</div>
        </div>

          <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2"> 
            <Banknote className="w-5 h-5 text-orange-600" />
            <div>Custom Solutions 28+</div>
          </div>

          <div className="bg-neutral-500 h-10 w-60 rounded-4xl flex items-center justify-center gap-2 text-orange-600"> 
            <PlusIcon className="w-5 h-5 text-orange-600" />
            <div>Satisfaction 100%</div>
          </div>
      </div>
    </div>
   </div>

   {/* third Carousel content */}

   <div className="grid grid-cols-2 items-center justify-center min-h-screen py-2 bg-gradient-to-b from-slate-800 to-slate-900 px-8 gap-16">

    <div className="gap-6 flex flex-col items-start justify-center">

      <div className="flex items-center justify-center text-sm font-bold text-orange-400 bg-orange-900 border-1 border-orange-400 px-6 py-2 rounded-full gap-2">

       <span className="bg-orange-800 w-4 h-4 rounded-full"></span>

       <span>
         South Sudan's Leading Software Company
       </span>

      </div>

      <h1 className="text-5xl font-bold text-white mt-4">
        From Idea to <br /> <span className="text-orange-600">Live Systems,</span> <br /> We handle it All
      </h1>

      <p className="text-lg text-white mt-2">
        Custom Software Development, mobile apps, websites, branding, digital marketing and ongoing technical support - complete digital transformation under one roof.
      </p>

      <div className="mt-4 flex gap-4">
        <Button className="bg-orange-600 text-white hover:bg-orange-400 text-lg px-5 py-6 rounded-4xl">
          Explore Our Services
        </Button>

      </div>

    </div>

    <div className="grid grid-cols-2 items-center justify-center">
      {/*
      {cardItems.map((item) => (
        <div key={item.key} className="bg-taupe-800 rounded-2xl h-[300px] w-80 text-white flex flex-col items-center items-start justify-center gap-4 px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="bg-orange-600 text-lg font-bold p-2 rounded-lg">
              <item.icon />
            </span>

            <div className="flex flex-col items-start items-center justify-center">
              <span className="text-lg text-bold text-white-400">
                {item.title}
              </span>
              <span className="text-sm text-gray-400">
                {item.description}
              </span>
            </div>
            
          </div>
        </div>
      ))}
    */}

    </div>
   </div>

   <DusiCodeDetails />
   <WeBuild />
   <WhyDusicode />
   <OurServices />
   <OurClients />
   <OurTestimonials />
   <GetStarted />
   </>
  );
}
