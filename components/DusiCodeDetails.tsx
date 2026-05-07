import { details } from "@/constants/details";



export const DusiCodeDetails = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white-200 text-slate-800 px-20 py-6">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-2">
          <span className="text-3xl font-bold text-orange-600">{detail.title}</span>
          <span className="text-sm text-gray-400">{detail.description}</span>
        </div>
      ))}
    </div>
  );
};

export default DusiCodeDetails;
