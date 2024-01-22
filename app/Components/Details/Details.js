import React, { useState } from "react";
import styles from "./Details.module.css";

import DetailsImage from "./DetailsImage";
import DetailsFooter from "./DetailsFooter";
import DetailsExtendedSkills from "./DetailsExtendedSkills";
import DetailsPersonal from "./DetailsPersonal";
import DetailsActions from "./DetailsActions";

import { updateUserByUsername } from "../api/usersApi";
import { useReload } from "@/app/Context/ReloadContext";

export default function Details(props) {
  const { data } = props;
  const [formData, setFormData] = useState(data);
  const [image, setImage] = useState(data.image);
  const [username, setUsername] = useState(data.username);
  const [name, setName] = useState(data.name);
  const [surname, setSurname] = useState(data.surname);
  const [age, setAge] = useState(data.age);
  const [skills, setSkills] = useState(data.skills);
  const { reload, triggerReload } = useReload();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedFormData = {
      name: name || data.name,
      surname: surname || data.surname,
      age: age || data.age,
      username: data.username,
      skills: skills || data.skills,
    };

    if (data.username !== username) {
      updatedFormData.newUsername = username;
    }

    console.log(updatedFormData);

    const response = await updateUserByUsername(updatedFormData);

    triggerReload();
  };

  return (
    <div>
      <form className={styles.detailsCardMain} onSubmit={handleSubmit}>
        <DetailsMain
          image={image}
          setImage={setImage}
          username={username}
          setUsername={setUsername}
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          age={age}
          setAge={setAge}
          skills={skills}
          setSkills={setSkills}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

function DetailsMain(props) {
  const {
    image,
    setImage,
    username,
    setUsername,
    name,
    setName,
    surname,
    setSurname,
    age,
    setAge,
    skills,
    setSkills,
    handleSubmit,
  } = props;

  return (
    <>
      <div className={styles.detailsInfo}>
        <DetailsImage image={image} setImage={setImage} />
        <DetailsFooter username={username} setUsername={setUsername} />
      </div>
      <div className={styles.detailsExtended}>
        <DetailsPersonal
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          age={age}
          setAge={setAge}
        />

        <DetailsExtendedSkills skills={skills} setSkills={setSkills} />
      </div>
      <div className={styles.detailsActions}>
        <DetailsActions handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
