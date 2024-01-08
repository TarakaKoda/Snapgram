import { Loader } from "@/components/shared";
import GridPostList from "@/components/shared/GridPostList";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();

  const savePosts = currentUser?.save
    .map((savedPost: Models.Document) => ({
      ...savedPost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="saved-container">
      <div className="flex w-full max-w-5xl items-center justify-center gap-2">
        <img
          src="assets/icons/save.svg"
          alt="save"
          width={36}
          height={36}
          className="invert-white"
        />
        <h2 className="md:h2-bold h3-bold">Saved Posts</h2>
      </div>
      {!currentUser ? (
        <Loader />
      ) : (
        <ul className="flex w-full max-w-5xl justify-center gap-9">
          {savePosts.length === 0 ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList
              posts={savePosts}
              showStats={false}
              showUser={false}
            />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
