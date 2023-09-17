import React from "react";

function TodoForm() {
  return (
    <div className="todo-form">
      <form action="">
        <div className="group">
          <label htmlFor="">Enter Title</label>
          <input type="text" placeholder="Enter title" />
        </div>
        <div className="group">
          <label htmlFor="">Cattegory</label>
          <select name="" id="">
            <option value="">--select cattegory--</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="freelance">Freelance</option>
            <option value="movies">Movies</option>
            <option value="workout">Workout</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="">Priorty</label>
          <select name="" id="">
            <option value="">--select Priorty--</option>
            <option value="home">Medium</option>
            <option value="work">Low</option>
            <option value="freelance">High</option>
            <option value="movies">Completed</option>
            <option value="workout">Uncompleted</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="">Staring Date & time</label>
          <input type="text" />
        </div>
        <div className="group">
          <label htmlFor="">Ending Date & time</label>
          <input type="text" />
        </div>

        <div className="group">
          <label htmlFor="">Your alert msg</label>
          <input type="text" placeholder="msg" />
        </div>
        <div className="group span-full">
          <label htmlFor="desc">Enter description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="group span-full">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
