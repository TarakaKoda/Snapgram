import { useUserContext } from "@/context/AuthContext";
import { multiFormatDateString } from "@/lib/utils";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import CreateComment from "./CreateComment";
import PostStats from "./PostStats";
import ShowComments from "./ShowComments";

interface PostCardProps {
  post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();
  if (!post.creator) return;
  return (
    <div className="post-card">
      <div className="flex-between ">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex items-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular">
                {multiFormatDateString(post.$createdAt)}
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>
        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"} `}
        >
          <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <Link to={`/posts/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <ul className="mt-2 flex gap-1">
            {post.tags.map((tag: string) => (
              <li key={tag} className="text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt={post.caption}
          className="post-card_img"
        />
      </Link>
      <PostStats post={post} userId={user.id} showName={true} />
      {post.comments.length > 0 && <div className="comments-container bg-dark-2 mt-5">
        <ShowComments postId={post.$id} />
      </div>}
      <CreateComment userId={user.id} post={post} />
    </div>
  );
};

export default PostCard;
