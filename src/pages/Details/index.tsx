import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DetailsContent } from "./components/DetailsContent";
import { Sidebar } from "./components/Sidebar";
import { PostContainer } from "./styles";
import { IPost, PostsContext } from "../../PostContext";

export function Details() {
  const { fetchPost } = useContext(PostsContext);
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      if (id) {
        try {
          const fetchedPost = await fetchPost(id);
          setPost(fetchedPost);
        } catch (error) {
          console.error("Failed to fetch post:", error);
          setError("Failed to load post");
        }
      }
    };
  
    fetchAndSetPost();
  }, [id, fetchPost]);

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
