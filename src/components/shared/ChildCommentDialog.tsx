import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateComment from "./CreateComment";
import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import CommentCard from "./CommentCard";
import ShowNestedComments from "./ShowNestedComments";

interface CommentsDialogProps {
  comment: Models.Document;
}
const ChildCommentDialog = ({ comment }: CommentsDialogProps) => {
  const { user } = useUserContext();
  const childrenComments = comment.childrenCommentId;
  return (
    <Dialog>
      <DialogTrigger className="flex gap-2">
        <img src="/assets/icons/chat.svg" alt="comment" />
        <p>{childrenComments.length}</p>
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
            <CommentCard comment={comment} showStats={false} />
            Explore and engage with the conversations around this Comment.
          </DialogDescription>
        </DialogHeader>
        <div className="comments-dialog">
          {comment.childrenCommentId.length === 0 ? (
            <div className="flex h-full flex-col justify-between">
              <p>Be the first to start the conversation.</p>
              <CreateComment userId={user.id} parentCommentId={comment.$id} />
            </div>
          ) : (
            <div>
              {comment.childrenCommentId.map((commentId: string) => (
                <ShowNestedComments key={commentId} commentId={commentId} />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChildCommentDialog;
