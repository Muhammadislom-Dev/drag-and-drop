import { useState } from "react";
import { trello } from "../../locales/data";
import Section from "../Section";
import { CardPage } from "./style";

function Card() {
  const [boards, setBoards] = useState(trello);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  console.log(currentBoard);

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
            <div className="card-scroll">
              {board.items.map((item, index) => (
                <Section
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, board, item)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, board, item)}
                  item={item}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardPage>
  );
}
export default Card;
