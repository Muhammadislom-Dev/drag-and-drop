import { useState } from "react";
import { useRef } from "react";
import { DocumentIcon, UserIcon } from "../../assets/icons";
import { PersonImage } from "../../assets/images";
import { trello } from "../../locales/data";
import { CardPage } from "./style";

function Card() {
  const [boards, setBoards] = useState(trello);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dropHandler(e, board, item) {
    e.preventDefault();

    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  function dropCardHandler(e, board) {
    boards.item.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }
  return (
    <CardPage>
      <div className="card">
        {boards.map((board) => (
          <div className="card-list">
            <div
              className="card-item"
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}>
              {board.title}
            </div>
            {board.items.map((item, index) => (
              <div
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                draggable={true}
                className="card-box"
                key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              <div className="card-items">
                <button>{item.status}</button>
                <div>
                  <img src={UserIcon} />
                  <p>{item.number}</p>
                </div>
                <div>
                  <img src={DocumentIcon} />
                  <p>{item.documents}</p>
                </div>
              </div>
              <div className="card-bottom">
                <img src={PersonImage} />
                <span>
                  <p>{item.job}</p>
                  <h6>{item.name}</h6>
                </span>
              </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* {boards.map((board) => (
        <div className="board">
          <div
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
            className="board-title">
            {board.title}
          </div>
          {board.items.map((item) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className="item">
              {item.title}
            </div>
          ))}
        </div>
      ))} */}
    </CardPage>
  );
}
export default Card;
