import { PostContainer, PostContent } from "./styles";
import { IPost } from '../../../../PostContext/index.tsx'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function PostDetails() {
  const [postDetails, setPostDetails] = useState<IPost>({} as IPost);
  const { id } = useParams();

  async function loadPost() {
    try {
      const response = await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`);
      setPostDetails(response.data);
    } catch (error) {
      console.error("Erro ao carregar o post:", error);
    }
  }

  useEffect(() => {
    loadPost();
  }, [id]);

  return (
    <PostContainer>
      <PostContent>
            <header>
                <h2>{postDetails?.title}</h2>
                <span>{postDetails.created_at}</span>
            </header>
            <footer>
                <p>{postDetails?.body}</p>
            </footer>
      </PostContent>
    </PostContainer>
  );
}
