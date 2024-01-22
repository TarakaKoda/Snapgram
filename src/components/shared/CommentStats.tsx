import { useUserContext } from "@/context/AuthContext";
import {
    useLikeComment
} from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { useState } from "react";

interface CommentStatsProps {
  comment: Models.Document;

}

const CommentStats = ({ comment }: CommentStatsProps) => {
  const { user } = useUserContext();
  const { mutate: likeComment } = useLikeComment();
  const likesList = comment?.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState(likesList);

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();
    let newLikes = [...likes];

    const hasLiked = newLikes.includes(user.id);

    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== user.id);
    } else {
      newLikes.push(user.id);
    }

    setLikes([...newLikes]);
    likeComment({commentId: comment.$id, likesArray: newLikes})
  };

  return (
    <div className="z-20 flex items-center justify-between">
      <div className="mr-5 flex items-center justify-center gap-2">
        <img
          src={
            checkIsLiked(likes, user.id)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }
          alt="Like"
          width={15}
          height={15}
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:text-sm">{likes.length}</p>
      </div>
    </div>
  );
};

export default CommentStats;
