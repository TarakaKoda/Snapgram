import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/AuthContext";

const formSchema = z.object({
  comment_text: z.string().min(1, {
    message: "Comment must be at least 1 characters.",
  }).max(300, {
    message: "Comment must be at most 300 characters.",
  }),
});

interface CommentFormProps {
    postId: string;
}

const CommentForm = ({postId}: CommentFormProps) => {

    const { user } = useUserContext();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          comment_text: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(user.id)
        console.log(postId)
        console.log(values)
      }
  return (
    <Form {...form}> 
      <form onSubmit={form.handleSubmit(onSubmit)} className="explore-search w-full flex items-center justify-between">
        <FormField
          control={form.control}
          name="comment_text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Write your comment..." {...field}  className="explore-search"/>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">
            <img src="/assets/images/comment-arrow.png" alt="comment arrow" width={18} height={18} />
        </Button>
      </form>
    </Form>
  );
};
export default CommentForm;
