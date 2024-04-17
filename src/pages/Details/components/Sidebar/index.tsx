import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { SidebarContainer } from "./styles";

interface SidebarProps {
  post: IPost
}

export function Sidebar({ post }: SidebarProps) {

  const timeDistanceToNow = formatDistanceToNow(new Date(post!.created_at), {
    addSuffix: true,
    locale: ptBR,
  })
  const commentsFormated = `${post.comments} ${
    post.comments === 1 ? 'comment' : 'comments'
  }`

  return (
    <SidebarContainer>
      <main>
        <header>
          <a className="backHome" href="">
          <FontAwesomeIcon icon={faChevronLeft} />
          <strong>BACK</strong>
          </a>
          <a className="goGithub" href="">
          SEE ON GITHUB &nbsp;
            <FaExternalLinkAlt size={12}/>
          </a>
          <h2>{post.title}</h2>
        </header>
          <footer>
          <span>
            <FaGithub />
            <strong>{post.user.login}</strong>
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            <strong>{timeDistanceToNow}</strong>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <strong>{commentsFormated}</strong>
          </span>
          </footer>
      </main>
    </SidebarContainer>
  )
}