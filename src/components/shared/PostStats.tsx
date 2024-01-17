import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useGetUserById,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

interface PostStatsProps {
  post?: Models.Document;
  userId: string;
  showName?: boolean;
}

const PostStats = ({ post, userId, showName = false }: PostStatsProps) => {
  const likesList = post?.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { data: likedUser1 } = useGetUserById(likesList[0]);
  const { data: likedUser2 } = useGetUserById(likesList[1]);

  const { data: currentUser } = useGetCurrentUser();
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost, isPending: isSavingPost } = useSavePost();
  const { mutate: deleteSavedPost, isPending: isDeletingSavedPost } =
    useDeleteSavedPost();

  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post?.$id,
  );

  useEffect(() => {
    setIsSaved(!!savedPostRecord);
  }, [currentUser]);

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();
    let newLikes = [...likes];

    const hasLiked = newLikes.includes(userId);

    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId);
    } else {
      newLikes.push(userId);
    }

    setLikes([...newLikes]);
    likePost({ postId: post?.$id || "", likesArray: newLikes });
  };
  const handleSavePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (savedPostRecord) {
      setIsSaved(false);
      deleteSavedPost(savedPostRecord.$id);
    } else {
      savePost({ postId: post?.$id || "", userId });
      setIsSaved(true);
    }
  };

  return (
    <div className="z-20 flex items-center justify-between">
      <div className="mr-5 flex items-center justify-center gap-2">
        <img
          src={
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }
          alt="Like"
          width={20}
          height={20}
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
        {showName && (
          <div className="subtle-semibold flex gap-1 text-sm text-light-3">
            Liked by
            <Link to={`/profile/${likedUser1?.$id}`}>
              <p className="underline-offset-2 hover:text-white">
                {likedUser1 && likedUser1.name}
              </p>
            </Link>
            {likesList.length === 2 && (
              <>
                and{" "}
                <Link to={`/profile/${likedUser2?.$id}`}>
                  <p className="underline-offset-2  hover:text-white">
                    {likedUser2 && likedUser2.name}
                  </p>
                </Link>
                {""}
              </>
            )}
            {likesList.length > 2 && (
              <>
                and other{""}
                <Link to={""}>
                  <p className="underline-offset-2 hover:underline">
                    {likesList.length - 1}
                  </p>
                </Link>
                {""}
              </>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {isDeletingSavedPost || isSavingPost ? (
          <Loader />
        ) : (
          <img
            src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
            alt="Save"
            width={20}
            height={20}
            onClick={handleSavePost}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default PostStats;
