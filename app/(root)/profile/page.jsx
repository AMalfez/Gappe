import { GetGappaByAuthorId, GetUser } from "@/lib/actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    return (
      <div className="w-full lg:w-4/6 bg-neutral-950  overflow-y-auto">
        <div className="h-full w-full flex justify-center items-center">
          Please{" "}
          <Link className="px-1 text-blue-500 cursor-pointer" href={"/sign-in"}>
            Login
          </Link>{" "}
          to see Profile.
        </div>
      </div>
    );
  }
  const userInfo = await GetUser(user.id);
  if (!userInfo.onboarded) redirect("/onboarding");
  const gappe = await GetGappaByAuthorId(userInfo.userId);
  return (
    <div className="w-full lg:w-4/6 bg-neutral-950 px-8">
      <h1 className="border-b border-neutral-600 mt-7 pb-1 text-2xl">
        Profile
      </h1>
      <div className="mt-4 flex gap-3">
        <div className="h-fit w-fit rounded-full bg-slate-800">
          <Image
            src={userInfo.image}
            width={90}
            height={90}
            priority
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
            <p className="text-xl">{userInfo.name}</p>
            <p className="text-sm text-slate-500">@{userInfo.username}</p>
        </div>
      </div>
      <div className="mt-7 pb-1">
            <p className="border-b border-neutral-800 pl-5 pb-1">Gappe</p>
            <div className="pt-3">
                {/* {gappe.length===0&&(<p className="flex items-center justify-center text-lg text-slate-600 h-44">You haven't posted any gappa yet.</p>)} */}
            </div>
        </div>
    </div>
  );
}
