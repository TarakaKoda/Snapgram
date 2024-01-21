import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/AuthContext";
import { CommentValidation } from "@/lib/validation";
import { useCreateComment } from "@/lib/react-query/queriesAndMutations";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Loader } from "../shared";

interface CommentFormProps {
  postId: string;
}

const CommentForm = ({ postId }: CommentFormProps) => {
  const navigate = useNavigate();
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
  function onSubmit(values: z.infer<typeof CommentValidation>) {
    const newComment = createComment({
      postId: postId,
      userId: user.id,
      parentCommentID: null,
      comment_text: values.comment_text,
    });
    form.reset();
    if (!newComment) {
      toast({ title: "Please try again." });
    }
    return navigate(`/posts/${postId}`);
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
              width={18}
              height={18}
            />
          </Button>
        )}
      </form>
    </Form>
  );
};
export default CommentForm;
