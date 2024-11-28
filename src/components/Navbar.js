"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Left Icon */}
        <div className="flex items-center">
          <div className="bg-blue-500 w-40 h-10 flex items-center justify-center  text-white text-xl font-bold hover:bg-slate-200 hover:text-blue-700 hover:border hover:border-blue-400">
           <Link href={"/"}> HOME</Link>            
          </div>
        </div>

        {/* Right Links */}
        <div className="flex space-x-4">
          <Link
            href="/about"
            className="text-blue-500 font-semibold hover:text-blue-700 transition-all duration-300 relative after:absolute after:bg-blue-700 after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:hover:w-full"
          >
            ALL DATA
          </Link>

          <Link
            href="/addData"
            className="text-blue-500 font-semibold hover:text-blue-700 transition-all duration-300 relative after:absolute after:bg-blue-700 after:h-[2px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:hover:w-full"
          >
            ADD PRODUCT
          </Link>
        </div>
      </div>
    </nav>
  );
}
