
import { services } from "@/constants/services";

export const OurServices = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-slate-800 to-slate-900 px-8 gap-6 ">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-2 rounded-full text-lg font-bold">
          OUR SERVICES
        </span>
        <h1 className="text-6xl font-bold text-white">End-to-End Digital Solutions</h1>
        <p className="text-lg text-gray-300">From initial concept to live deployment and beyond — we're your complete <br /> technology partner. Explore our solutions below.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.key} className="flex flex-col items-start justify-center bg-cyan-950 hover:bg-cyan-800 hover:border-1 hover:border-orange-600 px-6 py-4 rounded-xl gap-4">
            <span className="bg-orange-900 text-orange-600 rounded-md w-12 h-12 flex items-center justify-center">{service.icon}</span>
            <h1 className="text-lg font-bold text-white">{service.title}</h1>
            <p className="text-sm text-white-600">{service.description}</p>
            <span className="text-sm text-orange-600">{service.cta}</span>
          </div>
        ))}
      </div>

    </div>
  );
};
