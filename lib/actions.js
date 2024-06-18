"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function PostUser({username,name,image,bio,path,userId}) {
  try {
    const user = await prisma.users.findUnique({
        where: {
            userId
        }
    })
    if(user){
        await prisma.users.update({
            where:{
                userId
            },
            data:{
                userId,
                username,
                name,
                image,
                bio,
                onboarded:true
            }
        })
        return;
    }
    const newuser = await prisma.users.create({
      data: {
        userId,
        username,
        name,
        image,
        bio,
        onboarded: true,
      },
    });
    console.log(newuser);
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error) {
    console.log(error);
  }
}
