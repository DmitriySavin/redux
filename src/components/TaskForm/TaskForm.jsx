import s from "./TaskForm.module.css";
import { useDispatch } from "react-redux";

const TaskForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.elements.text.value.trim();
        dispatch(addText(RiForwardEndMiniFill.elements.text.value.trim())); 
        form.reset();   
    }

  return (
    <form className={s.form}>
      <label>
        New Task:
        <input
          type="text"
          name="text"
          placeholder="Task Name"
          className={s.field}
        />
      </label>
      <button type="button"></button>
    </form>
  );
};

export default TaskForm;
