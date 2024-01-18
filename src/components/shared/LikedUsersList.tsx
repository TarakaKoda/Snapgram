import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LikedUser from "./LikedUser";


interface LikedUsersListProps {
  likedUsersList: string[];
  trigger: "Liked by" | "other";
  likedUserLength?: number;
}

const LikedUsersList = ({
  likedUsersList,
  trigger,
  likedUserLength,
}: LikedUsersListProps) => {

  const allUsers = trigger === "Liked by";

  if (!allUsers) {
    likedUsersList = likedUsersList.filter(
      (userId) => userId !== likedUsersList[0],
    );
  }

  return (
    <Dialog>
      <DialogTrigger className="hover:text-white">
        {trigger} {likedUserLength}
      </DialogTrigger>
      <DialogContent className="post-card">
        <DialogHeader>
          <div className="mb-2 flex items-center gap-2">
            <DialogTitle>
              {allUsers ? "All Liked Users" : "Liked Users"}
            </DialogTitle>
            <img src="/assets/icons/liked.svg" alt="like" className="" />
          </div>
          <DialogDescription>
            Explore the list of {allUsers && "all"} users who have shown
            appreciation for this post.
          </DialogDescription>
        </DialogHeader>
        <ul>
          {likedUsersList.map((userId) => (
            <LikedUser key={userId} likedUserId={userId} />
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default LikedUsersList;
