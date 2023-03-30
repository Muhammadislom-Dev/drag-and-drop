import { DocumentIcon, UserIcon } from "../../assets/icons";
import { PersonImage } from "../../assets/images";

function Section({
  item,
  onDragOver,
  onDragLeave,
  onDragStart,
  onDragEnd,
  onDrop,
  key,
}) {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable
      onDrop={onDrop}
      key={key}
      className="card-box">
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
  );
}
export default Section;
