import React, { useState } from "react";
import TodoDatePicker from "./TodoDatePicker";
import { useForm, SubmitHandler } from "react-hook-form";
import { DatePickerProps } from "../../rickziUi/DatePicker";
import { formatDate } from "../../utilities/DateFormatter";
type Inputs = {
  title: string;
  cattegory: string;
  priority: string;
  alertMsg: string;
  desc: string;
  startingDate: string;
  EndingDate: string;
};
function TodoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startingDate, setStartingDate] = useState<DatePickerProps>();
  const [endingDate, setEndingDate] = useState<DatePickerProps>();
  function onSubmit(data) {
    const newdata = {
      title: data.title,
      cattegory: data.cattegory,
      priority: data.priorty,
      startingData: formatDate(startingDate),
      endingData: formatDate(endingDate),
      alertMsg: data.alert,
      description: data.desc,
    };
    console.log(newdata);
  }
  return (
    <div className="todo-form">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label htmlFor="">Enter Title</label>
          <input type="text" placeholder="Enter title" {...register("title")} />
        </div>
        <div className="group">
          <label htmlFor="">Cattegory</label>
          <select id="" {...register("cattegory", { required: true })}>
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
          <select id="" {...register("priorty", { required: true })}>
            <option value="">--select Priorty--</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="">Staring Date </label>
          <TodoDatePicker value={startingDate} setValue={setStartingDate} />
        </div>
        <div className="group">
          <label htmlFor="">Ending Date </label>
          <TodoDatePicker value={endingDate} setValue={setEndingDate} />
        </div>

        <div className="group">
          <label htmlFor="">Your alert msg</label>
          <input
            type="text"
            placeholder="msg"
            {...register("alert", { required: true })}
          />
        </div>
        <div className="group span-full">
          <label htmlFor="desc">Enter description</label>
          <textarea
            id="desc"
            {...register("desc", { required: true })}
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
