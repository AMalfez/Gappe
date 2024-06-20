"use client";

import { FaCommentDots, FaRegHeart, FaArrowRight } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import Image from "next/image";
import ReplyCard from "./ReplyCard";
import { useEffect, useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { CreateComment } from "@/lib/actions";

export default function ThreadCard({
  message,
  username,
  img,
  parentId,
  userId,
  comments,
}) {
  const [showReply, setShowReply] = useState(false);
  const [comment, setComment] = useState("");
  const [Comments, setComments] = useState([]);
  const [openCommentDailogbox, setOpenCommentDailogbox] = useState(false);
  useEffect(()=>{
    setComments(comments.filter((c) => c.parentId === parentId))
  },[comments])
  const handleToggle = () => {
    if (!showReply) setShowReply(true);
    else setShowReply(false);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const Comment = await CreateComment({
      message:comment,
      parentId,
      authorId:userId
    })
    setComments([...Comments, Comment]);
    setOpenCommentDailogbox(false);
    setComment("");
    setShowReply(true);
  };
  return (
    <div
      style={{ backgroundColor: "rgb(18,18,18)" }}
      className="mx-4 rounded-xl py-4 px-3 flex gap-3 mb-7"
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
      <div className="w-full">
        <p className="text-white">{username}</p>
        <p className="text-sm text-slate-400">{message}</p>
        <div className="flex gap-3 mt-2 border-b border-slate-700 pb-2">
          <FaRegHeart className="text-slate-600 text-xs cursor-pointer hover:text-slate-400" />
          <FaCommentDots
            onClick={() => setOpenCommentDailogbox(true)}
            className="text-slate-600 text-xs cursor-pointer hover:text-slate-400"
          />
          <BiShare className="text-slate-600 text-xs cursor-pointer hover:text-slate-400" />
        </div>
        {!openCommentDailogbox && !showReply && (
          <p
            onClick={handleToggle}
            className="text-xs text-slate-600 hover:text-slate-400 cursor-pointer pt-1 inline"
          >
            {Comments.length} replies <FaArrowRight className="inline" />
          </p>
        )}
        {!openCommentDailogbox && showReply && (
          <p
            onClick={handleToggle}
            className="text-xs text-slate-600 hover:text-slate-400 cursor-pointer pt-1 inline"
          >
            Hide comments
          </p>
        )}
        {openCommentDailogbox && (
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 p-1 mt-2 bg-neutral-800 rounded"
          >
            <input
              type="text"
              className="bg-neutral-800 outline-none px-2 py-1 w-full text-sm"
              placeholder="Type you comment here"
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
            />
            <button type="submit" className="hover:text-slate-400">
              <MdOutlinePostAdd />
            </button>
          </form>
        )}
        {Comments.length > 0 &&
          Comments.map((c) => (
            <ReplyCard
              key={c.img}
              showReply={showReply}
              message={c.message}
              username={c.username}
              img={c.img}
            />
          ))}
        {Comments.length === 0 && showReply && (
          <p className="text-center text-sm text-slate-300">No Comments</p>
        )}
      </div>
    </div>
  );
}
