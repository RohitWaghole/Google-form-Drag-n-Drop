import "./MultipleChoiceCard.css";

const MultipleChoiceCard = () => {
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
        className="SnackBar newSnackbar"
        onDragOver={(e) => {
          handleDragOver(e);
        }}
      >
        <button
          className="btn-drag cardNewBtn"
          draggable
          onDragStart={(e) => {
            handleDragStart(e, "multipleChoice");
          }}
        >
          * Multiple Choice
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
        </button>
      </div>
    </>
  );
};

export default MultipleChoiceCard;
