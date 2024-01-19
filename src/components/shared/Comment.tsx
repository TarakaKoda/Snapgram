import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import CommentForm from "../forms/CommentForm";
import { Models } from "appwrite";

interface CommentProps {
  userId: string;
  post: Models.Document; 
}

const Comment = ({ userId, post}: CommentProps) => {
  const { data: currentUser } = useGetUserById(userId);
  return (
    <div className="z-20 flex items-center justify-between">
      <div className="mt-8 flex w-full items-center gap-4">
        <img
          src={currentUser?.imageUrl}
          alt="user"
          className="h-10 w-10 rounded-full object-cover"
        />
        <CommentForm postId={post.$id} />
      </div>
    </div>
  );
};

export default Comment;
