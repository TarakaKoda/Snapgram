import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "@/components/shared";
import UserCard from "@/components/shared/UserCard";
const AllUsers = () => {
  const { toast } = useToast();
  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();
  if (isErrorCreators) {
    toast({ title: "Something went wrong." });
    return;
  }
  return (
    <div className="common-container">
      <div className="user-container">
        <div className="flex gap-2">
          <img
            src="/assets/icons/people.svg"
            alt="users"
            width={24}
            height={24}
          />
          <h2 className="h3-bold md:h2-bold w-full text-left">All Users</h2>
        </div>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators?.documents.map((creator) => (
              <li key={creator.$id} className="w-full min-w-[200px] flex-1">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
