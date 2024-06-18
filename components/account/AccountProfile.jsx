"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUploadThing } from "@/lib/validations/uploadthing";
import { PostUser } from "@/lib/actions";
import { userSchema } from "@/lib/validations/user";

function AccountProfile({ userData, btnTitle }) {
  const [loading,setLoading] = useState(false);
  const { startUpload } = useUploadThing("media");
  const [files, setFiles] = useState([]);
  const path = usePathname();
  const route = useRouter();
  const [field, setField] = useState({
    profile_photo: userData.image || "",
    name: userData.name || "",
    username: userData.username || "",
    bio: userData.bio || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSchema.validate(field);
    } catch (error) {
      alert(error.toString());
      console.log(error.toString());
      return;
    }

    if (files.length > 0) {
      setLoading(true);
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].url) {
        field.profile_photo = imgRes[0].url;
        setField({ ...field, profile_photo: imgRes[0].url });
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
    setLoading(false);
    if (path === "/profile/edit") {
      route.back();
    } else {
      route.push("/");
    }
  };

  const handleImage = (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const fileReader = new FileReader();

      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        setFiles(Array.from(e.target.files));
        setField({...field, profile_photo:URL.createObjectURL(e.target.files[0])});
        if (!file.type.includes("image")) return;

        fileReader.onload = async (event) => {
          const imageDataUrl = event.target.result.toString() || "";
          console.log(imageDataUrl);
          // fieldChange(imageDataUrl);
        };

        fileReader.readAsDataURL(file);
      }
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
            minLength={3}
            maxLength={30}
            value={field.name}
            onChange={(e) => setField({ ...field, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            className="p-2 outline-none rounded text-white"
            type="text"
            name="username"
            value={field.username}
            minLength={3}
            maxLength={30}
            placeholder="Username..."
            onChange={(e) => setField({ ...field, username: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bio">Bio</label>
          <textarea
            className="p-2 outline-none rounded text-white"
            rows={5}
            name="bio"
            value={field.bio}
            placeholder="Bio..."
            minLength={3}
            maxLength={1000}
            onChange={(e) => setField({ ...field, bio: e.target.value })}
          />
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer rounded p-2"
          type="submit"
          onClick={handleSubmit}
        >
          {loading?("Loading..."):(btnTitle)}
        </button>
      </form>
    </div>
  );
}

export default AccountProfile;
