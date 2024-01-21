import { useGetPostComments } from "@/lib/react-query/queriesAndMutations";
import CommentCard from "./CommentCard";
import { Loader } from ".";

interface ShowCommentProps {
  postId?: string;
}
const ShowComments = ({ postId }: ShowCommentProps) => {
  const { data: comments, isPending: isCommentCreating } = useGetPostComments(
    postId || "",
  );

  return (
    <>
      {isCommentCreating ? (
        <Loader />
      ) : (
        comments?.documents.map((comment) => (
          <CommentCard comment={comment} key={comment.$id} />
        ))
      )}
    </>
  );
};

export default ShowComments;
