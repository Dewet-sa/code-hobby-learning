import React from "react";

function ResourceLibrary() {
  return (
    <div>
      <h2>Resource Library</h2>
      <ul>
        <li>
          <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
            FreeCodeCamp
          </a>
        </li>
        <li>
          <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">
            Codecademy
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </li>
        {/* Add more resources here */}
      </ul>
    </div>
  );
}

export default ResourceLibrary;