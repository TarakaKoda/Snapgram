import { multiFormatDateString } from "@/lib/utils";
import { Models } from "appwrite";

interface CommentCardProps {
  comment: Models.Document;
}
const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="flex gap-2  py-4">
      <img
        className="h-8 w-8 rounded-full object-cover"
        src={comment.user.imageUrl}
        alt="user"
      />
      <div className="mr-3 flex w-full flex-col items-start justify-center gap-1">
        <div className="flex min-w-full items-center justify-between">
          <p className="text-color-bg-dark-2 text-nowrap text-sm text-light-3">
            {comment.user.name}
          </p>
        </div>
        <p>{comment.comment_text}</p>
        <p className="text-xs text-light-4">
          {multiFormatDateString(comment.$createdAt)}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
