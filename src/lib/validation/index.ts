import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "To short" }),
  username: z.string().min(2, { message: "To short" }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(1000),
  tags: z.string(),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

export const CommentValidation = z.object({
  comment_text: z
    .string()
    .min(1, {
      message: "Comment must be at least 1 characters.",
    })
    .max(300, {
      message: "Comment must be at most 300 characters.",
    }),
});
