import { GraduationCap, HospitalIcon, Banknote, Briefcase, HandshakeIcon, ArrowRight } from "lucide-react";

export const sectors = [
  {
   key: 1,
   icon: <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-md w-8 h-8 p-6"><GraduationCap /></span>,
   name: "Education",
   title: "School Management System",
   description: "A complete digital platform to manage students, staff, academics, fees, and communication for schools of any size.",
   cta: <span className="flex items-center gap-2">Request This Solution <ArrowRight size={15} /></span>
  },
  {
   key: 2,
   icon: <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-md w-8 h-8 p-6"><HospitalIcon /></span>,
   name: "Healthcare",
   title: "Hospital & Clinic Management System",
   description: "A comprehensive solution for managing patient records, appointments, billing, and communication in healthcare facilities.",
   cta: <span className="flex items-center gap-2">Request This Solution <ArrowRight size={15} /></span>
  },
  {
   key: 3,
   icon: <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-md w-8 h-8 p-6"><Banknote /></span>,
   name: "Finance",
   title: "Core Banking System",
   description: "A robust platform for managing banking operations, customer accounts, and transactions securely and efficiently.",
   cta: <span className="flex items-center gap-2">Request This Solution <ArrowRight size={15} /></span>
  },
  {
   key: 4,
   icon: <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-md w-8 h-8 p-6"><Briefcase /></span>,
   name: "Business",
   title: "Enterprise Resource Planning (ERP)",
   description: "An integrated suite of applications to manage core business processes, including finance, HR, and supply chain.",
   cta: <span className="flex items-center gap-2">Request This Solution <ArrowRight size={15} /></span>
  },
  {
   key: 5,
   icon: <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-md w-8 h-8 p-6"><HandshakeIcon /></span>,
   name: "NGO",
   title: "NGO Project Tracking System",
   description: "Track donor funds, projects, beneficiaries, and impact reporting for NGOs and humanitarian organizations.",
   cta: <span className="flex items-center gap-2">Request This Solution <ArrowRight size={15} /></span>
  },
  {
   key: 6,
   icon: <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-md w-8 h-8 p-6"><Briefcase /></span>,
   name: "Business",
   title: "Enterprise Resource Planning (ERP)",
   description: "An integrated suite of applications to manage core business processes, including finance, HR, and supply chain.",
   cta: <span className="flex items-center gap-2">Request This Solution <ArrowRight size={15} /></span>
  },
];