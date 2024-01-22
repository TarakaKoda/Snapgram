import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShowComments from "./ShowComments";
import CreateComment from "./CreateComment";
import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";

interface CommentsDialogProps {
  post?: Models.Document;
  commentsLength: number;
}

const CommentsDialog = ({ post, commentsLength }: CommentsDialogProps) => {
const { user } = useUserContext();
return (
  <Dialog>
    <DialogTrigger className="flex gap-2">
      <img src="/assets/icons/chat.svg" alt="comment" />
      <p>{commentsLength}</p>
    </DialogTrigger>
    <DialogContent className="post-card">
      <DialogHeader className="flex flex-col gap-2">
        <DialogTitle className="flex items-center gap-2">
          {" "}
          <img
            src="/assets/icons/chat.svg"
            alt="comment"
            className="invert-white"
          />
          Comments
        </DialogTitle>
        <DialogDescription className="text-light-4">
          Explore and engage with the conversations around this post.
        </DialogDescription>
      </DialogHeader>
      <div
        className="comments-dialog"
      >
        {commentsLength === 0 ? (
          <div className="flex h-full flex-col justify-between">
            <p>Be the first to start the conversation.</p>
            <CreateComment userId={user.id} post={post} />
          </div>
        ) : (
          <ShowComments postId={post?.$id} />
        )}
      </div>
    </DialogContent>
  </Dialog>
);
};

export default CommentsDialog;
