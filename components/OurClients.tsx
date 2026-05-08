import { clients } from "@/constants/clients";

export const OurClients = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-white-600 to-slate-700 px-8 gap-6 ">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-2 rounded-full text-lg font-bold">
          INDUSTRIES WE SERVE
        </span>
        <h1 className="text-6xl font-bold text-black">Serving Every Sector</h1>
        <p className="text-lg text-gray-300">Our expertise spans across all major industries in South Sudan and East Africa.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
          {clients.map((client) => (
            <div key={client.key} className="flex flex-col items-center justify-center bg-gray-300 hover:bg-orange-600 hover:border-1 hover:border-orange-600 px-6 py-4 rounded-xl gap-4">
              <span className="bg-orange-900 text-orange-600 rounded-md w-12 h-12 flex items-center justify-center">{client.icon}</span>
              <h1 className="text-lg font-bold text-black">{client.title}</h1>
              <p className="text-sm text-gray-600">{client.description}</p>
            </div>
          ))}
      </div>

    </div>
  );
};
