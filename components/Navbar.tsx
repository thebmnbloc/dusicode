"use client";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Rocket } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white-200 text-slate-800 px-20 py-6">

      <div className="text-lg font-bold text-slate-800">
        <span className="font-extrabold">Dusi</span>
        <span>Code</span>
      </div>

        <div className="space-x-4 text-base">

          <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Home</a>

          {/* Dropdown menu for Custom Software with 13 items */}
          {/* <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Custom Software</a> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Custom Software
               <span>
                <ChevronDown className="inline-block w-4 h-4 ml-1" />
               </span>
              </a>
            </DropdownMenuTrigger>

            <DropdownMenuContent>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 1</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 2</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 3</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 4</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 5</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 6</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 7</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 7</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 8</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 9</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 10</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 11</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 12</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 13</a>
              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

          {/* Dropdown menu for Services with 13 items */}
          {/* <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Services</a> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Services
                <span>
                  <ChevronDown className="inline-block w-4 h-4 ml-1" />
                </span>
              </a>
            </DropdownMenuTrigger>

            <DropdownMenuContent>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 1</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 2</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 3</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 4</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 5</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 6</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 7</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 7</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 8</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 9</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 10</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 11</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 12</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 13</a>
              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

          
          <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Portfolio</a>

          {/* Dropdown menu for About with 13 items */}
           {/* <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">About</a> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">About
                <span>
                  <ChevronDown className="inline-block w-4 h-4 ml-1" />
                </span>
              </a>
            </DropdownMenuTrigger>

            <DropdownMenuContent>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 1</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 2</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 3</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 4</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 5</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 6</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 7</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 8</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 9</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 10</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 11</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 12</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Item 13</a>
              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

          <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Blog</a>
          <a href="#" className="hover:underline hover:text-orange-600 text-slate-800">Contact</a>
          
        </div>

        <Button className="bg-orange-600 text-lg text-white px-10 py-6 rounded-4xl">
          <span><Rocket className="inline-block w-4 h-4 ml-1" /></span>
          Get Started 
        </Button>

    </nav>
  ); 
}