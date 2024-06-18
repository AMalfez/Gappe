import * as yup from 'yup';

export const userSchema = yup.object({
    profile_photo: yup.string().nonNullable(),
    name: yup.string().min(3,"Min 3 req").max(30),
    username: yup.string().min(3).max(30),
    bio: yup.string().min(3).max(1000)
})