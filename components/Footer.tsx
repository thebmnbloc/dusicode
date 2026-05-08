import { Clock, CopyrightIcon, LocationEdit, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 items-center justify-between p-4 bg-slate-800 text-white px-20 py-6">
      <div>
        <div className="text-lg font-bold text-white">
          <span className="font-extrabold">Dusi</span>
          <span>
            Code  
          </span>
        </div>
        <p>Delivering end-to-end custom software solutions for organizations, businesses, banks, <br /> schools, and NGOs across South Sudan and East Africa.</p>

        <div>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      <div className="space-x-4 flex flex-col items-center justify-center gap-4">
        <h1>QUICK LINKS</h1>
        <span className="flex flex-col items-start justify-center gap-2">
          <Link href="#" className="hover:underline text-white-800">Home</Link>
          <Link href="#" className="hover:underline text-white-800">Custom Software</Link>
          <Link href="#" className="hover:underline text-white-800">Our Services</Link>
          <Link href="#" className="hover:underline text-white-800">About Us</Link>
          <Link href="#" className="hover:underline text-white-800">Blog</Link>
          <Link href="#" className="hover:underline text-white-800">Contact</Link>
          <Link href="#" className="hover:underline text-white-800">FAQ</Link>
          <Link href="#" className="hover:underline text-white-800">Contact Us u</Link>
          <Link href="#" className="hover:underline text-white-800">Privacy Policy</Link>
          <Link href="#" className="hover:underline text-white-800">Terms & Conditions</Link>
        </span>
      </div>

      <div className="space-x-4 flex flex-col items-center justify-center gap-4">
        <h1>TOP SOLUTIONS</h1>
        <div className="flex flex-col items-start justify-center gap-2">
          <Link href="#">
           School Management System
          </Link>
          <Link href="#">
           Hospital & Clinic Management System
          </Link>
          <Link href="#">
           NGO Project Tracking System
          </Link>
          <Link href="#">
           SACCO & Microfinance System
          </Link>
          <Link href="#">
           HR & Payroll System
          </Link>
          <Link href="#">
           Hotel Management System
          </Link>
          <Link href="#">
           Transport & Logistics System
          </Link>
          <Link href="#">
           Real Estate Management System
          </Link>
          <Link href="#">
           Enterprise ERP System
          </Link>
          <Link href="#">
           Restaurant & Bar Management System
          </Link>
        </div>
      </div>

      <div className="space-x-4 flex flex-col items-center justify-center gap-4">
        <h1>CONTACT US</h1>
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="flex items-center justify-center gap-2">
            <LocationEdit />
            <p>Gurei Next to Red Cross Office, Juba - South Sudan</p>
          </span>

          <span className="flex items-center justify-center gap-2">
            <Phone />
            <span>
              <p>+211 912 345 678</p>
              <p>+211 912 345 678</p>
              <p>+211 912 345 678</p>
            </span>
          </span>

          <span className="flex items-center justify-center gap-2">
            <MdEmail />
            <p>sales@dusicode.com</p>
            <p>sinfo@dusicode.com</p>
          </span>

          <span className="flex items-center justify-center gap-2">
            <Clock />
            <p>
              Monday-Friday: 8:00 AM - 6:00 PM
            </p>
          </span>
        </div>
      </div>

      <div>
        <span>
          <p>© 2026 DusiCode. All rights reserved. Registered in South Sudan.</p>
        </span>
        
        <span>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQ</p>
        </span>

      </div>
    </footer>
  );
}