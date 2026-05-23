import styles from "./TaskList.module.css";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { selectTask } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(selectTask);

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.listItem}>
          <Task  task={task}/>
        </li>
      ))}
    </ul>
  )
};

export default TaskList;