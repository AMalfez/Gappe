import { FaCommentDots, FaRegHeart, FaArrowRight } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import Image from "next/image";

export default function ThreadCard({message, username, img}) {
  return (
    <div
      style={{ backgroundColor: "rgb(18,18,18)" }}
      className="mx-4 rounded-xl py-4 px-3 flex gap-2 mb-7"
    >
        <div className="h-fit rounded-full bg-slate-800">
          <Image
            src={img}
            width={30}
            height={30}
            priority
            className="rounded-full object-contain"
          />
        </div>
      <div className="">
        <p className="text-white">{username}</p>
        <p className="text-xs text-slate-100">
          {message}
        </p>
        <div className="flex gap-3 mt-2 border-b border-slate-700 pb-2">
          <FaRegHeart className="text-slate-600 text-xs cursor-pointer hover:text-slate-400" />
          <FaCommentDots className="text-slate-600 text-xs cursor-pointer hover:text-slate-400" />
          <BiShare className="text-slate-600 text-xs cursor-pointer hover:text-slate-400" />
        </div>
        <p className="text-xs text-slate-600 hover:text-slate-400 cursor-pointer pt-1 inline">1 replies <FaArrowRight className="inline" /></p>
      </div>
    </div>
  );
}
