import { useGetPostComments } from "@/lib/react-query/queriesAndMutations";
import CommentCard from "./CommentCard";

interface ShowCommentProps {
  postId: string;
}
const ShowComments = ({ postId }: ShowCommentProps) => {
  const { data: comments } = useGetPostComments(postId);

  return (
    <div className="">
      {comments?.documents.map((comment) => (
        <CommentCard comment={comment} key={comment.$id} />
      ))}
    </div>
  );
};

export default ShowComments;
