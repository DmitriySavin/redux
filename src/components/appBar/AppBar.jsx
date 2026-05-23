import { TaskCounter } from "../taskCounter/TaskCounter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
const AppBar = () => {
  return (
    <>
      <header style={{display:"flex" , justifyContent: "center" ,columnGap:"30px" , alignItems: "center"}}>
        <section>
          <h2>Задачі</h2>
          <TaskCounter />
        </section>
        <section >
          <h2>Статус: OK</h2>
          <StatusFilter />
        </section>
      </header>
    </>
  );
};

export default AppBar;
