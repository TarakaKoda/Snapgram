import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/AuthContext";
import {
  useCreateComment,
  useGetCommentById,
  useNestedComment,
} from "@/lib/react-query/queriesAndMutations";
import { CommentValidation } from "@/lib/validation";
import { useToast } from "../ui/use-toast";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../shared";

// import { addNestedComment } from "@/lib/appwrite/api";

interface CommentFormProps {
  postId?: string;
  parentCommentID?: string;
}

const CommentForm = ({ postId, parentCommentID }: CommentFormProps) => {
  const { data: comment } = useGetCommentById(parentCommentID || "");
  const { mutateAsync: addNestedComments } = useNestedComment();
  const [childrenComments, setChildrenComments] = useState<string[]>(
    comment?.childrenCommentId,
  );

  // const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUserContext();
  const { mutateAsync: createComment, isPending: isCreatingComment } =
    useCreateComment();

  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      comment_text: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CommentValidation>) {
    const newComment = await createComment({
      postId: postId || "",
      userId: user.id,
      parentCommentID: parentCommentID || null,
      comment_text: values.comment_text,
      childrenCommentId: [],
    });

    form.reset();

    if (!newComment) {
      toast({ title: "Please try again." });
    }
    if (parentCommentID && newComment && childrenComments) {
      setChildrenComments(
        childrenComments.length > 0
          ? [...childrenComments, newComment.$id]
          : [newComment.$id],
      );

      addNestedComments({
        commentId: parentCommentID,
        childrenComment: childrenComments,
      });
    }
    // return navigate(`/posts/${comment?.post.$id}`);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="explore-search flex w-full items-center justify-between overflow-hidden rounded-full"
      >
        <FormField
          control={form.control}
          name="comment_text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Write your comment..."
                  {...field}
                  autoComplete="off"
                  className="explore-search hover:bg-transparent lg:w-[26vw]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        {isCreatingComment ? (
          <Loader />
        ) : (
          <Button type="submit">
            <img
              src="/assets/images/comment-arrow.png"
              alt="comment arrow"
              className="h-4 w-4 lg:min-h-4 lg:min-w-4"
            />
          </Button>
        )}
      </form>
    </Form>
  );
};
export default CommentForm;
