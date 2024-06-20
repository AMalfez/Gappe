"use client";
import { CreateComment } from "@/lib/actions";
import Image from "next/image";

function ReplyCard({ username, img, message, showReply }) {
  if(!showReply) return null;
  return (
    <div className="text-sm flex gap-2 rounded-md p-3 bg-neutral-800 mt-1">
      <div className="h-fit rounded-full bg-slate-800">
          <Image
            src={img}
            width={15}
            height={15}
            priority
            className="rounded-full object-contain"
          />
        </div>
      <div>
        <p className="text-xs">{username}</p>
        <p className="text-xs text-slate-400">{message}</p>
      </div>
    </div>
  );
}

export default ReplyCard;
