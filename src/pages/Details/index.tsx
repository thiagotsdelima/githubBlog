import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DetailsContent } from "./components/DetailsContent";
import { Sidebar } from "./components/Sidebar";
import { PostContainer } from "./styles";
import { IPost, PostsContext } from "../../PostContext";

export function Details() {
  const { posts, fetchPost } = useContext(PostsContext);
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Attempting to fetch post with ID:", id);
    if (id) {
      fetchPost(id).catch((error) => {
        console.error("Failed to fetch post:", error);
        setError("Failed to load post");
      });
    }
  }, [id, fetchPost]);
  
  const post = posts.find((p: IPost) => p.id === Number(id));
  console.log("Rendered with post:", post);
  

  if (error) {
      return <div>{error}</div>;
  }
  if (!post) {
      return <div>Loading...</div>;
  }
  if (!post.title || !post.body) {
      return <div>Post is not available or is missing essential data.</div>;
  }

  return (
      <PostContainer>
          <Sidebar post={post} />
          <DetailsContent post={post} />
      </PostContainer>
  );
}
