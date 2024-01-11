import LikedPosts from "@/_root/pages/LikedPosts";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";

const CurrentUserLikedPosts = () => {
  const { user } = useUserContext();
  const { id } = useParams();

  const { data: currentUser } = useGetUserById(id || "");

  if (currentUser && currentUser.$id === user.id) return <LikedPosts />;
};

export default CurrentUserLikedPosts;
