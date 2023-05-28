import { useEffect } from "react";
import Post from "./components/Post";
import Feed from "./components/Feed";

import { useGetUsersQuery } from "./service/users";

function App() {
  const userApi = useGetUsersQuery();

  useEffect(() => {
    if (userApi.isSuccess) {
      localStorage.setItem("user", userApi.data.payload[0]._id);
    }
  }, [userApi.isFetching]);

  return (
    <div
      id="container"
      style={{
        background: "#dae1ea",
        height: "100vh",
        width: "100vw",
        display: "flex",
        gap: "40px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: "auto",
        }}
      >
        <Post />
        <Feed />
      </div>
    </div>
  );
}

export default App;
