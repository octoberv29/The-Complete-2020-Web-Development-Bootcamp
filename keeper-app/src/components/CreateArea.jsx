import React from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [isExpanded, setIsExpanded] = React.useState(false);
  const emptyInputText = { // {} - object
    title : "",
    content : ""
  };
  const [inputText, setInputText] = React.useState(emptyInputText);

  function handleChange(event) {
    const {name, value} = event.target; // {} - destructered object

    setInputText( (prevValue) => {
      return {
        ...prevValue,
        [name] : value
      };
    }); 
  }

  function submitNote(event) {
    props.onAdd(inputText);
    setInputText(emptyInputText);
    event.preventDefault(); // prevent the screen from refreshing (when the button is inside the form)
  }

  function handleExpand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? 
          <input 
            name="title" 
            onChange={handleChange} 
            value={inputText.title} 
            placeholder="Title" 
          /> 
          : null
        }
        <textarea 
          name="content" 
          onChange={handleChange}
          onClick={handleExpand}
          value={inputText.content} 
          placeholder="Take a note..." 
          rows={isExpanded ? "3" : "1"} 
        />
        <Zoom in={isExpanded}>
          <Fab 
            onClick={submitNote}
            // onClick={() => {
            //   props.onAdd(inputText);
            //   setInputText("");
            //   event.preventDefault();
            // }} // this is another way of dong it:
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;