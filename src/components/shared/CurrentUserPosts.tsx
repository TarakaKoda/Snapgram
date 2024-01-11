import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import GridPostList from "./GridPostList";
import { useParams } from "react-router-dom";

const CurrentUserPosts = () => {
  const { id } = useParams();
  const { data: currentUser } = useGetUserById(id || "");

  if (currentUser)
    return <GridPostList posts={currentUser.posts} showUser={false} />;
};

export default CurrentUserPosts;
