"use client";
import { useEffect, useState } from "react";

import { getUserByUsername } from "@/app/Components/api/usersApi";
import MainLayout from "@/app/Components/Layouts/MainLayout";

import Details from "@/app/Components/Details";
import styles from "@/app/Components/Details/Details.module.css";
import { useReload } from "@/app/Context/ReloadContext";

export default function Page() {
  const { reload, triggerReload } = useReload();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (reload) {
      async function fetchUsers() {
        ///const response = await getUserByUsername(params.username);
        //setData(response);
        triggerReload();
      }

      fetchUsers();
    }
  }, [reload, triggerReload]);

  return (
    <MainLayout>
      <div className={styles.DetailsMain}>
        <Details data={data} createApi={true} />
      </div>
    </MainLayout>
  );
}
