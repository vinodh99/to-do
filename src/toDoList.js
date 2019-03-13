import React, { Component } from "react";
import ToDo from "./toDoList";

class ToDo extends Component {
  render() {
    return (
      <div className="toDoList">
        <div>
          <form>
            <input placeholder="task" />
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDo;
