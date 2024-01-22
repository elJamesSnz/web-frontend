import React from "react";
import styles from "./DetailsFooter.module.css";

export default function DetailsFooter({ username, setUsername }) {
  const handleChange = (e) => {
    const updatedUsername = e.target.value.replace(/\s/g, "");
    setUsername(updatedUsername);
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.inputUsername}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        onCopy={preventCopyPaste}
        onPaste={preventCopyPaste}
        placeholder="Indica username"
      />
    </div>
  );
}
