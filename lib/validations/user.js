import * as yup from 'yup';

export const userSchema = yup.object({
    profile_photo: yup.string().nonNullable(),
    name: yup.string().min(3,"Name must be atleast 3 character long.").max(30, "Name exceeds 30 characters."),
    username: yup.string().min(3,"Name must be atleast 3 character long.").max(30,"Username exceeds 30 characters."),
    bio: yup.string().min(3,"Bio must be atleast 3 character long.").max(1000, "Bio exceeds 1000 characters.")
})