import React from "react";
import styles from "./DetailsPersonal.module.css";

export default function DetailsPersonal({
  name,
  setName,
  surname,
  setSurname,
  age,
  setAge,
}) {
  const handleInputChange = (setter) => (e) => {
    const updatedValue = e.target.value.replace(/\s/g, "");
    setter(updatedValue);
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.DetailsPersonalInputs}>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleInputChange(setName)}
          onCopy={preventCopyPaste}
          onPaste={preventCopyPaste}
          placeholder="Indica nombre"
        />
        <label>Nombre</label>
      </div>
      <div>
        <input
          type="text"
          value={surname}
          onChange={handleInputChange(setSurname)}
          onCopy={preventCopyPaste}
          onPaste={preventCopyPaste}
          placeholder="Indica username"
        />
        <label>Apellido</label>
      </div>
      <div>
        <input
          type="number"
          value={age}
          onChange={handleInputChange(setAge)}
          onCopy={preventCopyPaste}
          onPaste={preventCopyPaste}
          placeholder="Indica edad"
        />
        <label>Edad</label>
      </div>
    </div>
  );
}
