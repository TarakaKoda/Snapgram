import { Loader } from "@/components/shared";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import { useGetPosts, useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { data: posts, isFetching, fetchNextPage, hasNextPage } = useGetPosts();
  const {data: creators, isLoading: isUserLoading} = useGetUsers()

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  if (!posts) {
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <div className="flex gap-2">
            <img src="/assets/icons/home.svg" alt="home" width={36} height={36} className="invert-white" />
            <h2 className="h3-bold md:h2-bold w-full">Home Feed</h2>
          </div>
          {isFetching && !posts ? (
            <Loader />
          ) : (
            <ul className="flex w-full flex-1 flex-col gap-9">
              {posts.pages.map((item) => {
                return item.documents.map((post: Models.Document) => (
                  <PostCard key={post.$id} post={post} />
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
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
