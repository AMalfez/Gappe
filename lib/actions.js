"use server";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function PostUser({ username, name, image, bio, path, userId }) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        userId,
      },
    });
    if (user) {
      await prisma.users.update({
        where: {
          userId,
        },
        data: {
          userId,
          username,
          name,
          image,
          bio,
          onboarded: true,
        },
      });
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
export async function GetUser(userId) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        userId,
      },
      include:{
        gappe: true
      }
    });
    return user ? user : {};
  } catch (error) {
    console.log(error);
  }
}

export async function CreateGappa(authorId, message){
  try {
    const gappa = await prisma.gappa.create({
      data:{
        message,
        author:{
          connect: {
            userId:authorId
          }
        }
      }
    })
    console.log(gappa);
  } catch (error) {
    console.log(error);
  }
}
export async function CreateComment({authorId,message,parentId}){
  try{
    const comment = await prisma.gappa.create({
      data:{
        message,
        author:{
          connect:{
            userId:authorId
          }
        },
        parent:{
          connect:{
            id:parentId
          }
        }
      }
    })
    return comment;
    // console.log(comment);
  }catch(err){
    console.log(err);
  }
}
export async function GetGappaWithComments(){
  try {
    //something
    const gappe = await prisma.users.findMany({include:{
      gappe: true
    }});
    return gappe;
  } catch (error) {
    console.log(error);
  }
}