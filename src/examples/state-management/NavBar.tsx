import LoginStatus from "./auth/LoginStatus";
import { useTaskStore } from "./tasks/taskStore";
// import { useTasks } from "./tasks/useTasks";

const NavBar = () => {
  // const { tasks } = useTasks();
  const tasks = useTaskStore((s) => s.tasks);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
