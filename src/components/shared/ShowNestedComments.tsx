import { useGetCommentById } from "@/lib/react-query/queriesAndMutations";
import CommentCard from "./CommentCard";

interface Props {
  commentId: string;
}

const ShowNestedComments = ({ commentId }: Props) => {
  const {data: comment} = useGetCommentById(commentId);
  console.log(comment)
  if (comment) {
    return <CommentCard comment={comment} />;
  }
};
export default ShowNestedComments;
