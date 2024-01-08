import { Loader } from "@/components/shared";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetInfiniteUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AllUsers = () => {
  const { toast } = useToast();
  const { ref, inView } = useInView();
  const {
    data: creators,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError: isErrorCreators,
  } = useGetInfiniteUsers();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });
    return;
  }

  if (!creators) {
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <div className="flex gap-2">
          <img
            src="/assets/icons/people.svg"
            alt="users"
            width={38}
            height={38}
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold w-full text-left">All Users</h2>
        </div>
        {isFetching && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators.pages.map((item) => {
              return item.documents.map((user: Models.Document) => (
                <UserCard key={user.$id} user={user} />
              ));
            })}
          </ul>
        )}
      </div>
      {hasNextPage && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default AllUsers;
