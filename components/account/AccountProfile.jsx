"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/validations/uploadthing";
import { PostUser } from "@/lib/actions";

function AccountProfileTest({ userData, btnTitle }) {
  const { startUpload } = useUploadThing("media");
  const path = usePathname();
  const route = useRouter();
  const [field, setField] = useState({
    profile_photo: userData.image || "",
    name: userData.name || "",
    username: userData.username || "",
    bio: userData.bio || "",
  });

  const handleTextChange = (data, value) => {
    field[data] = value;
    setField(field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blob = field.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(field.profile_photo);

      if (imgRes && imgRes[0].fileUrl) {
        field.profile_photo = imgRes[0].fileUrl;
      }
    }

    await PostUser({
      name: field.name,
      path: path,
      username: field.username,
      userId: userData.id,
      bio: field.bio,
      image: field.profile_photo,
    });

    if (path === "/profile/edit") {
      route.back();
    } else {
      route.push("/");
    }
  };

  const handleImage = (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (!file.type.includes("image")) return;

      field.profile_photo = URL.createObjectURL(e.target.files[0]);
      setField(field);
    }
  };

  return (
    <div className="bg-neutral-800 p-5 mt-4 rounded-md w-full md:w-3/4 lg:w-3/5">
      <form className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label htmlFor="profile_photo">
            {field.profile_photo ? (
              <Image
                src={field.profile_photo}
                alt="profile_icon"
                width={96}
                height={96}
                priority
                className="rounded-full object-contain"
              />
            ) : (
              <Image
                src="/assets/profile.svg"
                alt="profile_icon"
                width={24}
                height={24}
                className="object-contain"
              />
            )}
          </label>
          <input
            type="file"
            name="profile_photo"
            onChange={handleImage}
            placeholder="Choose your image"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="p-2 outline-none rounded text-white"
            type="text"
            name="name"
            placeholder="Name..."
            onChange={(e) => handleTextChange("name", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            className="p-2 outline-none rounded text-white"
            type="text"
            name="username"
            placeholder="Username..."
            onChange={(e) => handleTextChange("username", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bio">Bio</label>
          <textarea
            className="p-2 outline-none rounded text-white"
            rows={5}
            name="bio"
            placeholder="Bio..."
            onChange={(e) => handleTextChange("bio", e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer rounded p-2"
          type="submit"
          onClick={handleSubmit}
        >
          {btnTitle}
        </button>
      </form>
    </div>
  );
}

export default AccountProfileTest;
