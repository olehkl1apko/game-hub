import HomePage from "./state-management/Homepage";
import NavBar from "./state-management/NavBar";
// import AuthProvider from "./state-management/auth/AuthProvider";
import TasksProvider from "./state-management/tasks/TasksProvider";

function AppExamples() {
  return (
    <>
      {/* <AuthProvider> */}
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
      {/* </AuthProvider> */}
    </>
  );
}

export default AppExamples;
