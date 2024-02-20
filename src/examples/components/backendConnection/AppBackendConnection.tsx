import axios, { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";

interface IUser {
  id: string;
  name: string;
}

function AppBackendConnection() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUsers(data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {!isLoading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AppBackendConnection;
