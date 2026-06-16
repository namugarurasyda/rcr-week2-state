import React, { useState, useEffect, useRef } from "react";

export default function UserProfile() {
  // State to hold the actual bio text
  const [bio, setBio] = useState("Software engineer who loves building clean UIs.");
  
  // State to track if we are in "edit mode" or "view mode"
  const [isEditing, setIsEditing] = useState(false);
  
  // State to hold the temporary text while the user is typing
  const [tempBio, setTempBio] = useState(bio);

  // A ref to target the textarea DOM element directly
  const textareaRef = useRef(null);

  // useEffect runs whenever 'isEditing' changes
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      // Automatically focus the textarea and move the cursor to the end of the text
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(tempBio.length, tempBio.length);
    }
  }, [isEditing]);

  // Handler for entering edit mode
  const handleEdit = () => {
    setTempBio(bio); // Initialize the input with the current bio
    setIsEditing(true);
  };

  // Handler for saving the bio
  const handleSave = () => {
    setBio(tempBio); // Commit the temporary text to the main bio state
    setIsEditing(false); // Switch back to text display
  };

  // Handler for canceling edits
  const handleCancel = () => {
    setIsEditing(false); // Discard changes and switch back
  };

  return (
    <div style={styles.card}>
      <h2>User Profile</h2>
      
      <div style={styles.bioContainer}>
        <strong>Bio:</strong>
        {isEditing ? (
          /* Edit Mode: Displays the textarea */
          <textarea
            ref={textareaRef}
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            style={styles.textarea}
          />
        ) : (
          /* View Mode: Displays standard text */
          <p style={styles.bioText}>{bio}</p>
        )}
      </div>

      {/* Conditional rendering for buttons based on edit mode */}
      <div style={styles.buttonGroup}>
        {isEditing ? (
          <>
            <button onClick={handleSave} style={{ ...styles.btn, ...styles.btnSave }}>
              Save
            </button>
            <button onClick={handleCancel} style={{ ...styles.btn, ...styles.btnCancel }}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleEdit} style={{ ...styles.btn, ...styles.btnEdit }}>
            Edit Bio
          </button>
        )}
      </div>
    </div>
  );
}

// Simple inline styles for demonstration
const styles = {
  card: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  bioContainer: {
    margin: "20px 0",
  },
  bioText: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.5",
    marginTop: "8px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginTop: "8px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontFamily: "inherit",
    fontSize: "16px",
    resize: "vertical",
    boxSizing: "border-box",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  btn: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  btnEdit: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  btnSave: {
    backgroundColor: "#28a745",
    color: "#fff",
  },
  btnCancel: {
    backgroundColor: "#6c757d",
    color: "#fff",
  },
};