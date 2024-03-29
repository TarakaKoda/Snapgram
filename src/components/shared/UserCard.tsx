import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

interface UserCardProps {
  user: Models.Document;
}

const UserCard = ({ user }: UserCardProps) => {
  const { data: currentUser } = useGetCurrentUser();
  
  return (
    <Link to={`/profile/${user.$id}`} className={`flex-col gap-4 rounded-[20px] border border-dark-4 px-5 py-8 ${currentUser?.$id === user.$id ? "hidden" : "flex-center"}`}>
      <img
        src={user.imageUrl || `/assets/icons/profile-placeholder.svg`}
        alt="creator"
        className="h-14 w-14 object-cover rounded-full"
      />
      <div className="flex-center flex-col gap-1">
        <p className="base-medium line-clamp-1 text-center text-light-1">
          {user.name}
        </p>
        <p className="small-regular line-clamp-1 text-center text-light-3">
          @{user.username}
        </p>
      </div>
      <Button type="button" size="sm" className="shad-button_primary px-5">
        Follow
      </Button>
    </Link>
  );
};

export default UserCard;
