import { currentUser } from '@clerk/nextjs/server'
import '../scrollbar.css'
import { redirect } from 'next/navigation';
import { GetUser } from '@/lib/actions';
import PostForm from '@/components/PostForm';
async function Page() {
  const user = await currentUser();
  if(!user) redirect("/sign-in");
  const userInfo = await GetUser(user.id);
  if(!userInfo||!userInfo.onboarded) redirect("/onboarding")
  return (
    <div className="w-full lg:w-4/6 bg-neutral-950 px-8 overflow-y-auto pb-5">
      <h1 className="text-3xl py-4 mt-8 border-b border-neutral-600">Create Gappa</h1>
      <PostForm userId={user.id} />
    </div>
  )
}

export default Page