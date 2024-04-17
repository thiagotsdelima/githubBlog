import { useEffect, useState } from "react"
import { DetailsContent } from "./components/DetailsContent"
import { Sidebar } from "./components/Sidebar"
import { PostContainer } from "./styles"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"

export interface IPost {
  number: number
  html_url: string
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
}

export function Details({children}: ) {
  const [post, setPost] = useState<IPost>()
  const { id } = useParams()

  useEffect(() => {
    api.get(`repos:rocketseat-education/reactjs-github-blog-challenge${id}`).then((response) => {
      setPost(response.data)
    })
  }, [])

  return (
    <PostContainer>
       {post && .map((post) => {
        
          <Sidebar post={post!} />
          <DetailsContent children={post!.body} />
        
})}
    </PostContainer>
  )
}