import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

interface GridPostsListProps {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
}

const GridPostList = ({
  posts,
  showUser = true,
  showStats = true,
}: GridPostsListProps) => {
  const { user } = useUserContext();

  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.$id} className="min-w-78 relative h-80">
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img
              src={post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>
          <div className="grid-post_user">
            {showUser && (
              <div className="flex flex-1 items-center justify-start gap-2">
                <img
                  src={post.creator.imageUrl}
                  alt="creator"
                  className="h-8 min-h-8 min-w-8 w-8 rounded-full object-cover"
                />
                <p className="line-clamp-1">{post.creator.name}</p>
              </div>
            )}
            {showStats && <PostStats post={post} userId={user.id} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
