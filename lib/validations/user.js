import * as yup from 'yup';

export const userSchema = yup.object({
    profile_photo: yup.string().url().nonNullable(),
    name: yup.string().min(3).max(30),
    username: yup.string().min(3).max(30),
    bio: yup.string().min(3).max(1000)
})