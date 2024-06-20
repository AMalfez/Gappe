import ThreadCard from "@/components/cards/ThreadCard";
import "./scrollbar.css";
import { currentUser } from "@clerk/nextjs/server";
import { GetGappaWithComments, GetUser } from "@/lib/actions";
import Link from "next/link";
export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return (
      <div className="w-full lg:w-4/6 bg-neutral-950  overflow-y-auto">
        <div className="h-full w-full flex justify-center items-center">
          Please{" "}
          <Link className="px-1 text-blue-500 cursor-pointer" href={"/sign-in"}>
            Login
          </Link>{" "}
          to see gappe.
        </div>
      </div>
    );
  }
  const users = await GetGappaWithComments();
  const cardData = [];
  const comments = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].gappe.length; j++) {
      if (users[i].gappe[j].parentId == null) {
        cardData.push({
          message: users[i].gappe[j].message,
          userId: user.id,
          username: users[i].username,
          parentId: users[i].gappe[j].id,
          img: users[i].image,
        });
      }else{
        comments.push({
          message: users[i].gappe[j].message,
          userId: user.id,
          username: users[i].username,
          parentId: users[i].gappe[j].parentId,
          img: users[i].image,
        });
      }
    }
  }
  // console.log(users);
  return (
    <div className="w-full lg:w-4/6 bg-neutral-950  overflow-y-auto">
      <h1 className="text-black dark:text-white text-2xl mx-4 my-6 border-b border-neutral-600 pb-3 pl-1">
        Home
      </h1>
      <div className="h-fit">
        {cardData.map(d => (
          <ThreadCard key={d.img} username={d.username} message={d.message} userId={d.userId} img={d.img} parentId={d.parentId} comments={comments} />
        ))}
      </div>
    </div>
  );
}
