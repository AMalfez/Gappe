import { OrganizationSwitcher } from "@clerk/nextjs"
import { dark } from "@clerk/themes";
import { TiSocialInstagramCircular } from "react-icons/ti";

function Navbar() {
  return (
    <div className="w-full text-white p-5 flex justify-between">
      <p className="p-0 m-0 px-5 text-xl font-medium flex items-center justify-center"><TiSocialInstagramCircular className="text-2xl mr-2" /> Gappe</p>
      <OrganizationSwitcher
      appearance={{
        baseTheme: dark,
        elements: {
          organizationSwitcherTrigger: "py-2 px-4",
        },
      }}
      />
    </div>
  )
}

export default Navbar