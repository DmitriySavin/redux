import "./App.css";
import  Layout  from "./components/Layout/Layout";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { selectError , selectIsLoading } from "./redux/selectors";
import { fetchTasks } from "./redux/operations";
import AppBar from "./components/appBar/AppBar";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
  dispatch(fetchTasks())
}, [dispatch])

  return (
    <>
      <Layout>
        <AppBar />
        <TaskForm />
        {loading && error && <p>АБВГД</p>}
        <TaskList />
     </Layout>
    </>
  );
}

export default App;