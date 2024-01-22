import { useParams, Link, useNavigate } from "react-router-dom";

import {
  useGetPostById,
  useGetUserPosts,
  useDeletePost,
} from "@/lib/react-query/queriesAndMutations";
import { formatDateString } from "@/lib/utils";
import { useUserContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/shared";
import PostStats from "@/components/shared/PostStats";
import GridPostList from "@/components/shared/GridPostList";
import ShowComments from "@/components/shared/ShowComments";
import CreateComment from "@/components/shared/CreateComment";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: post, isLoading } = useGetPostById(id || "");
  const { data: userPosts, isLoading: isUserPostLoading } = useGetUserPosts(
    post?.creator.$id,
  );
  const { mutate: deletePost } = useDeletePost();

  const relatedPosts = userPosts?.documents.filter(
    (userPost) => userPost.$id !== id,
  );

  const handleDeletePost = () => {
    deletePost({ postId: id || "", imageId: post?.imageId });
    navigate(-1);
  };

  return (
    <div className="post_details-container">
      <div className="hidden w-full max-w-5xl md:flex">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost"
        >
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>

      {isLoading || !post ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img
            src={post?.imageUrl}
            alt="creator"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                to={`/profile/${post?.creator.$id}`}
                className="flex items-center gap-3"
              >
                <img
                  src={
                    post?.creator.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
                />
                <div className="flex flex-col gap-1">
                  <p className="base-medium max-sm:small-medium lg:body-bold text-nowrap text-light-1 max-lg:text-[14px]">
                    {post?.creator.name}
                  </p>
                  <div className="flex items-center justify-start gap-2 text-nowrap text-light-3">
                    <p className="subtle-semibold lg:small-regular max-sm:text-[12px] md:text-[10px]">
                      {formatDateString(post?.$createdAt)}
                    </p>
                    •
                    <p className="subtle-semibold lg:small-regular max-sm:text-[12px] md:text-[10px]">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex  h-6 self-start max-lg:gap-3 max-lg:pl-3 sm:justify-end lg:gap-4">
                <Link
                  to={`/update-post/${post?.$id}`}
                  className={`${user.id !== post?.creator.$id && "hidden"}`}
                >
                  <img
                    src={"/assets/icons/edit.svg"}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </Link>

                {user.id === post?.creator.$id && (
                  <Button
                    onClick={handleDeletePost}
                    variant="ghost"
                    className="post_details-delete_btn items-start"
                  >
                    <img
                      src={"/assets/icons/delete.svg"}
                      alt="delete"
                      width={24}
                      height={24}
                    />
                  </Button>
                )}
              </div>
            </div>

            <div className="small-medium lg:base-regular flex w-full flex-col">
              <p>{post?.caption}</p>
              <ul className="mt-2 flex gap-1">
                {post?.tags.map((tag: string, index: string) => (
                  <li
                    key={`${tag}${index}`}
                    className="small-regular text-light-3"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
              <hr className="mt-5 w-full border border-dark-4/80" />
            </div>
            <div className="comments-container">
              <ShowComments postId={post.$id} />
            </div>
            <div className="w-full">
              <PostStats post={post} userId={user.id} showName={true} />
              <CreateComment userId={user.id} post={post} />
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <hr className="w-full border border-dark-4/80" />

        <h3 className="body-bold md:h3-bold my-10 w-full">
          More Related Posts
        </h3>
        {isUserPostLoading || !relatedPosts ? (
          <Loader />
        ) : (
          <GridPostList posts={relatedPosts} />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
