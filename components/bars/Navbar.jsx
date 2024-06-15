import { OrganizationSwitcher } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="w-full text-white p-3 flex justify-between">
      <p className="p-0 m-0 px-5 text-xl font-medium flex items-center justify-center">
        <TiSocialInstagramCircular className="text-2xl mr-2" /> Gappe
      </p>
      <div className="flex items-center">
        <div className="flex lg:hidden">
          <SignedIn>
            <SignOutButton redirectUrl="/sign-in">
              <CiLogout className="text-2xl cursor-pointer" />
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="border cursor-pointer border-white px-5 py-1 mr-2 rounded">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-2",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
