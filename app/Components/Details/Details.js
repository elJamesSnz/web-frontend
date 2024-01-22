import React, { useState } from "react";
import styles from "./Details.module.css";

import DetailsImage from "./DetailsImage";
import DetailsFooter from "./DetailsFooter";
import DetailsExtendedSkills from "./DetailsExtendedSkills";
import DetailsPersonal from "./DetailsPersonal";
import DetailsActions from "./DetailsActions";

import { createUserApi, updateUserByUsername } from "../api/usersApi";
import { useReload } from "@/app/Context/ReloadContext";
import { useRouter } from "next/navigation";

export default function Details(props) {
  const { data, createApi } = props;
  const [formData, setFormData] = useState(data || {});
  const [image, setImage] = useState(data?.image || "");
  const [username, setUsername] = useState(data?.username || "");
  const [name, setName] = useState(data?.name || "");
  const [surname, setSurname] = useState(data?.surname || "");
  const [age, setAge] = useState(data?.age || 0);
  const [skills, setSkills] = useState(data?.skills || []);
  const { reload, triggerReload } = useReload();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (createApi) {
      if (!username || !name || !surname || age > 0 || age > 150) {
        alert(
          "Error: Algunos campos están vacíos o la edad no es válida (entre 0 y 150)"
        );
        return;
      }
    }

    const updatedFormData = {
      name: name || data.name,
      surname: surname || data.surname,
      age: parseInt(age) || parseInt(data.age),
      username: createApi ? username : data.username,
      skills: skills || data.skills,
    };

    if (!createApi)
      if (data.username !== username) {
        updatedFormData.newUsername = username;
      }

    if (createApi) {
      await createUserApi(updatedFormData);
    } else {
      await updateUserByUsername(updatedFormData);
    }

    router.push("/");
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
