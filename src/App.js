import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Lesson from "./components/Lesson";
import ProgressTracker from "./components/ProgressTracker";
import Forum from "./components/Forum";
import ResourceLibrary from "./components/ResourceLibrary";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Code Hobby Learning</h1>
      {user ? (
        <>
          <ProgressTracker user={user} />
          <Lesson />
          <CodeEditor />
          <ResourceLibrary />
          <Forum user={user} />
        </>
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}

export default App;