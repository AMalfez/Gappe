'use client'
import Link from "next/link"
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsActivity } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

function BottomBar() {
  const path = usePathname();
  return (
    <div className="w-full text-white h-30 flex gap-1 p-2 lg:hidden">
      <Link href={"/"} className={`${path==="/" ? "bg-blue-600":"hover:bg-neutral-700"} w-1/6 cursor-pointer flex items-center justify-center rounded p-2`}><MdHomeFilled className="text-lg p-0" /></Link>
      <Link href={"/search"} className={`${path==="/search" ? "bg-blue-600":"hover:bg-neutral-700"} w-1/6 cursor-pointer rounded flex items-center justify-center p-2`}><CiSearch className="text-lg p-0" /></Link>
      <Link href={"/activity"} className={`${path==="/activity" ? "bg-blue-600":"hover:bg-neutral-700"} w-1/6 cursor-pointer rounded flex items-center justify-center p-2`}><BsActivity className="text-lg p-0" /></Link>
      <Link href={"/create"} className={`${path==="/create" ? "bg-blue-600":"hover:bg-neutral-700"} w-1/6 cursor-pointer rounded flex items-center justify-center p-2`}><IoIosCreate className="text-lg p-0" /></Link>
      <Link href={"/community"} className={`${path==="/community" ? "bg-blue-600":"hover:bg-neutral-700"} w-1/6 cursor-pointer rounded flex items-center justify-center p-2`}><FaUserGroup className="text-md p-0" /></Link>
      <Link href={"/profile"} className={`${path==="/profile" ? "bg-blue-600":"hover:bg-neutral-700"} w-1/6 cursor-pointer rounded flex items-center justify-center p-2`}><FaUser className="text-md p-0" /></Link>
    </div>
  )
}

export default BottomBar