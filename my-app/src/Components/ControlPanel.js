import React from "react";
import "./ControlPanel.css";
function ControlPanel(props) {
  return (
    <div className="control">
      <button onClick={props.prevIndex} disabled={!props.index}>
        Previous
      </button>

      <button className="crud">Edit</button>
      <button className="crud">Delete</button>
      <button className="crud">New</button>

      <button onClick={props.nextIndex} disabled={props.index >= 24}>
        Next
      </button>
    </div>
  );
}
export default ControlPanel;
