import ThreadCard from "@/components/cards/ThreadCard";
import './scrollbar.css'
import { currentUser } from "@clerk/nextjs/server";
import { GetGappe, GetUser } from "@/lib/actions";
export default async function Home() {
  const user = await currentUser();
  if(!user){
    return(
      <div className="w-full lg:w-4/6 bg-neutral-950  overflow-y-auto">
      <h1 className="text-black dark:text-white text-2xl mx-4 my-6 border-b border-neutral-600 pb-3 pl-1">Home</h1>
      <div className="h-fit">
        Please Login to see gappe.
      </div>
    </div>
    )
  }
  const userInfo = await GetUser(user.id);
  return (
    <div className="w-full lg:w-4/6 bg-neutral-950  overflow-y-auto">
      <h1 className="text-black dark:text-white text-2xl mx-4 my-6 border-b border-neutral-600 pb-3 pl-1">Home</h1>
      <div className="h-fit">
        {userInfo.gappe.map((g)=>(
          <ThreadCard img={userInfo.image} username={userInfo.username} message={g.message} />
        ))}
      </div>
    </div>
  );
}
