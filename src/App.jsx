import "./App.css";
import Layout from "./components/Layout/Layout";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <Layout>
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
}

export default App;