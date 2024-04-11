import { SidebarContainer, SidebarContent } from "./styles";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { api } from '../../../../services/api'; 
import { useEffect, useState } from "react";

interface User {
  login: string
  name: string
  avatar_url: string
  bio: string
  company: string | null
  followers: number
  html_url: string
}

export function Sidebar() {
  const [user, setUser] = useState<User>()

  const followers = user?.followers.toLocaleString('pt-BR')
  const formatedFollowers = `${followers} ${
    user?.followers === 1 ? 'follower' : 'followers'
  }`

  async function userSidebar() {
    const response = await api.get(`/users/diego3g`)

    setUser(response.data)
  }

  useEffect(() => {
    userSidebar()
  }, [])

  return (
    <SidebarContainer>
      <div className="imgContainer">
       <img src={user?.avatar_url} alt="image github" />
       </div>
      <SidebarContent>
        <header>
        <h2>{user?.name}</h2>
          <a href={user?.html_url} target="_blank">
            GITHUB &nbsp;
            <FaExternalLinkAlt size={12}/>
          </a>
        </header>
        <main>
          <p>{user?.bio}</p>
        </main>
        <footer>
          <span>
          <FaGithub />
         <strong>{user?.login}</strong>
          </span>
          <span>
          <FaBuilding />
          <strong>{user?.company}</strong>
          </span>
          <span>
          <MdPeopleAlt />
          <strong>{formatedFollowers}</strong>
          </span>
        </footer>
    </SidebarContent>
    </SidebarContainer>
  )
}