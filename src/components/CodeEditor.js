import React, { useState } from "react";

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");

  return (
    <div>
      <h2>Interactive Code Editor</h2>
      <textarea
        rows={10}
        cols={50}
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      {/* For real execution, you'd use a library or backend */}
    </div>
  );
}

export default CodeEditor;