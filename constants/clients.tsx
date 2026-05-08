import { Star } from "lucide-react";
import { AiFillFrown, AiOutlineSolution } from "react-icons/ai";
import { BiMobile, BiSupport } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";

export const clients = [
  {
    key: 1,
    icon: <span className="bg-orange-100 text-orange-600 rounded-md"><Star /></span>,
    title: "Fully Registered",
    description: "Officially registered in South Sudan with full legal compliance."
  },
  {
    key: 2,
    icon: <span className="bg-orange-100 text-orange-600 rounded-md"><GrSecure /></span>,
    title: "Modern & Secure",
    description: "Enterprise-grade security standards across all platforms."
  },
  {
    key: 3,
    icon: <span className="bg-orange-100 text-orange-600 rounded-md"><BiSupport /></span>,
    title: "Ongoing Support",
    description: "Dedicated post-launch support and maintenance."
  },
  {
    key: 4,
    icon: <span className="bg-orange-100 text-orange-600 rounded-md"><AiOutlineSolution /></span>,
    title: "Custom-Built Solutions",
    description: "Every system built specifically for your organization's needs."
  },
  {
    key: 5,
    icon: <span className="bg-orange-100 text-orange-600 rounded-md"><BiMobile /></span>,
    title: "Mobile, Desktop & Web",
    description: "Cross-platform solutions accessible on any device."
  },
  {
    key: 6,
    icon: <span className="bg-orange-100 text-orange-600 rounded-md"><AiFillFrown /></span>,
    title: "Affordable & Scalable",
    description: "Cost-effective systems that grow with your organization."
  }
];