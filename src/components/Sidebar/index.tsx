import { SidebarContainer, SidebarContent } from "./styles";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

export function Sidebar() {
  return (
    <SidebarContainer>
      <div className="imgContainer">
       <img src="https://github.com/thiagotsdelima.png" alt="image github" />
       </div>
      <SidebarContent>
        <header>
        <h2>Cameron Williamson</h2>
          <a href="#">
            GITHUB &nbsp;
            <FaExternalLinkAlt size={12}/>
          </a>
        </header>
        <main>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </main>
        <footer>
          <span>
          <FaGithub />
         <strong>cameronwll</strong>
          </span>
          <span>
          <FaBuilding />
          <strong>Rocketseat</strong>
          </span>
          <span>
          <MdPeopleAlt />
          <strong>32 seguidores</strong>
          </span>
        </footer>
    </SidebarContent>
    </SidebarContainer>
  )
}