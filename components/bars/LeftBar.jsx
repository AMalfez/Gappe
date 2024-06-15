"use client";
import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { CiLogout, CiSearch } from "react-icons/ci";
import { BsActivity } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { GoSignIn } from "react-icons/go";

function LeftBar() {
  const path = usePathname();
  return (
    <div className="w-1/6 hidden lg:flex flex-col pt-5 px-3">
      <Link
        href={"/"}
        className={`${
          path === "/" ? "bg-blue-600" : "hover:bg-neutral-700"
        } pl-8 cursor-pointer flex items-center rounded py-3`}
      >
        <MdHomeFilled className="mr-1 text-lg p-0" />{" "}
        <p className="m-0 p-0">Home</p>
      </Link>
      <Link
        href={"/search"}
        className={`${
          path === "/search" ? "bg-blue-600" : "hover:bg-neutral-700"
        } pl-8 cursor-pointer rounded flex items-center py-3`}
      >
        <CiSearch className="mr-1 text-lg p-0" />
        <p className="m-0 p-0">Search</p>
      </Link>
      <Link
        href={"/activity"}
        className={`${
          path === "/activity" ? "bg-blue-600" : "hover:bg-neutral-700"
        } pl-8 cursor-pointer rounded flex items-center py-3`}
      >
        <BsActivity className="mr-1 text-lg p-0" />
        <p className="m-0 p-0">Activity</p>
      </Link>
      <Link
        href={"/create"}
        className={`${
          path === "/create" ? "bg-blue-600" : "hover:bg-neutral-700"
        } pl-8 cursor-pointer rounded flex items-center py-3`}
      >
        <IoIosCreate className="mr-1 text-lg p-0" />
        <p className="m-0 p-0">Create Gappa</p>
      </Link>
      <Link
        href={"/community"}
        className={`${
          path === "/community" ? "bg-blue-600" : "hover:bg-neutral-700"
        } pl-8 cursor-pointer rounded flex items-center py-3`}
      >
        <FaUserGroup className="mr-1 text-md p-0" />
        <p className="m-0 p-0">Communities</p>
      </Link>
      <Link
        href={"/profile"}
        className={`${
          path === "/profile" ? "bg-blue-600" : "hover:bg-neutral-700"
        } pl-8 cursor-pointer rounded flex items-center py-3`}
      >
        <FaUser className="mr-1 text-md p-0" />
        <p className="m-0 p-0">Profile</p>
      </Link>
      <div className="w-full h-full mb-2 relative">
        <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className="flex absolute bottom-0 w-full border border-white cursor-pointer hover:bg-slate-800 justify-center items-center py-2"><CiLogout className="text-2xl cursor-pointer mr-1" /> Logout</div>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton>
          <div className="flex absolute bottom-0 w-full border border-white cursor-pointer hover:bg-slate-800 justify-center items-center py-2"><GoSignIn className="text-2xl cursor-pointer mr-1" /> Sign In</div>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default LeftBar;
