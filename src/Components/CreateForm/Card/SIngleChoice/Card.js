import "./Card.css";

const Card = () => {
  // const [components, setComponents] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  return (
    <>
      <div
        className="SnackBar"
        onDragOver={(e) => {
          handleDragOver(e);
        }}
      >
        <button
          className="btn-drag"
          draggable
          onDragStart={(e) => {
            handleDragStart(e, "singleCorrect");
          }}
        >
          * Single Choice
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
        </button>
      </div>
    </>
  );
};

export default Card;
