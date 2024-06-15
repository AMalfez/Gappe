import AccountProfile from "@/components/account/AccountProfile";
import {currentUser} from '@clerk/nextjs/server'
async function Page() {
  const user = await currentUser()
  console.log(user);
  const userInfo = {};
  const userData = {
    id:user.id,
    ObjectId:userInfo._id,
    username: userInfo.username !==undefined ? userInfo.username : user.username,
    name: userInfo.name !==undefined ? userInfo.name : user.firstName,
    bio: userInfo.bio,
    image: userInfo.image ? userInfo.image : user.imageUrl
  }
  return (
    <main className="border border-white h-screen p-14 lg:p-20">
        <h1 className="text-3xl font-medium">Onboarding</h1>
        <p>Complete your profile now to use Gappe</p>
        <AccountProfile userData={userData} btnTitle={"Continue"} />
    </main>
  )
}

export default Page;