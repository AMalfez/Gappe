import AccountProfile from "@/components/account/AccountProfile";
import { GetUser } from "@/lib/actions";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
async function Page() {
  const user = await currentUser();
  if (!user)
    return (
      <main className="h-fit flex flex-col justify-center items-center p-20">
        <h1 className="text-3xl font-medium">Onboarding</h1>
        <p>You are not logged in</p>
        <Link
          className="py-3 px-5 mt-3 bg-blue-600 text-white cursor-pointer hover:bg-blue-700 rounded border-none"
          href={"/sign-in"}
        >
          Sign in
        </Link>
      </main>
    );
  const userInfo = await GetUser(user.id);
  const userData = {
    id: user.id,
    ObjectId: userInfo._id,
    username:
      userInfo.username !== undefined ? userInfo.username : user.username,
    name: userInfo.name !== undefined ? userInfo.name : user.firstName,
    bio: userInfo.bio,
    image: userInfo.image ? userInfo.image : user.imageUrl,
  };
  return (
    <main className="h-fit flex flex-col justify-center items-center p-20">
      <h1 className="text-3xl font-medium">Onboarding</h1>
      <p>Complete your profile now to use Gappe</p>
      {/* <AccountProfileTest userData={userData} btnTitle={"Continue"} /> */}
      <AccountProfile userData={userData} btnTitle={"Continue"} />
    </main>
  );
}

export default Page;
