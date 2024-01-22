"use client";
import { useEffect, useState } from "react";

import { getUserByUsername } from "@/app/Components/api/usersApi";
import MainLayout from "@/app/Components/Layouts/MainLayout";

import Details from "@/app/Components/Details";
import styles from "@/app/Components/Details/Details.module.css";
import { useReload } from "@/app/Context/ReloadContext";

export default function Page({ params }) {
  const { reload, triggerReload } = useReload();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (params.username) {
      async function fetchUsers() {
        const response = await getUserByUsername(params.username);
        setData(response);
      }

      fetchUsers();
    }
  }, [params]);

  useEffect(() => {
    if (reload) {
      async function fetchUsers() {
        const response = await getUserByUsername(params.username);
        setData(response);
        triggerReload();
      }

      fetchUsers();
    }
  }, [reload, triggerReload]);

  return (
    <MainLayout>
      {data === null && <p>Cargando datos...</p>}
      {data && data.length === 0 && <p>No hay datos disponibles.</p>}
      {data && (
        <div className={styles.DetailsMain}>
          <Details key={data.id} data={data} />
        </div>
      )}
    </MainLayout>
  );
}
