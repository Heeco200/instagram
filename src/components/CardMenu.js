import "../styles/cardMenu.css";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import { useState } from "react";

function CardMenu(props) {
  const [state, setState] = useState(true)
  return (
    <div className="cardMenu">
      <div className="interactions">
        {state&&<AiOutlineHeart onClick={()=> {setState(!state);props.like()}} className="icon" />}
        {!state&&<AiFillHeart style={{color: 'red'}} onClick={()=> {setState(!state);props.likel()}} className="icon" />}
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;
