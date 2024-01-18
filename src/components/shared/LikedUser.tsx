import {
  useGetCurrentUser,
  useGetUserById,
} from "@/lib/react-query/queriesAndMutations";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface Props {
  likedUserId: string;
}

const LikedUser = ({ likedUserId }: Props) => {
  const { data: likedUser } = useGetUserById(likedUserId);
  const { data: currentUser } = useGetCurrentUser();

  return (
    <div className="liked_user-card flex-between  my-5 w-full">
      <Link to={`/profile/${likedUserId}`} className="flex items-center gap-2">
        <img
          src={likedUser?.imageUrl}
          alt="user"
          className="h-8 w-8 rounded-full object-cover"
        />
        <p className="small-regular">{currentUser?.$id !== likedUserId ? likedUser?.name : "You"}</p>
      </Link>
      {currentUser?.$id !== likedUserId && (
        <Button type="button" size="sm" className="shad-button_primary px-5">
          Follow
        </Button>
      )}
    </div>
  );
};

export default LikedUser;
