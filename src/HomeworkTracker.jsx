import React, { useState } from "react";

export default function HomeworkTracker() {
  const [homeworkList, setHomeworkList] = useState([]);
  const [newHomework, setNewHomework] = useState("");

  const addHomework = () => {
    if (newHomework.trim() !== "") {
      setHomeworkList([...homeworkList, newHomework]);
      setNewHomework(""); // Clear input after adding
    }
  };

  const removeHomework = (index) => {
    setHomeworkList(homeworkList.filter((_, i) => i !== index));
  };

  return (
      <div style={styles.container}>
        <h1>Homework Tracker</h1>
        <div style={styles.inputContainer}>
          <input
              type="text"
              placeholder="Enter homework..."
              value={newHomework}
              onChange={(e) => setNewHomework(e.target.value)}
              style={styles.input}
          />
          <button onClick={addHomework} style={styles.button}>
            Add Homework
          </button>
        </div>
        <ul style={styles.list}>
          {homeworkList.map((homework, index) => (
              <li key={index} style={styles.listItem}>
                {homework}
                <button onClick={() => removeHomework(index)} style={styles.removeButton}>
                  Remove
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
    padding: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "70%",
    fontSize: "1rem",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  removeButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};