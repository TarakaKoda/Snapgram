import { useParams } from "react-router-dom";
import PostForm from "@/components/forms/PostForm";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { Loader } from "@/components/shared";


const EditPost = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start w-full max-w-5xl justify-start gap-3 ">
          <img
            src="/assets/icons/add-post.svg"
            alt="add post"
            width={36}
            height={36}
          />
          <h2 className="h3-bold md:h2-bold w-full text-left">Edit Post</h2>
        </div>
        <PostForm post={post} action="Update" />
      </div>
    </div>
  );
};

export default EditPost;
