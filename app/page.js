"use client";

import { useEffect, useState } from "react";

import { useReload } from "@/app/Context/ReloadContext";

import MainLayout from "./Components/Layouts/MainLayout";
import Card from "./Components/Card";
import styles from "./Components/Card/Card.module.css";
import { getAllUsersApi } from "./Components/api/usersApi";

export default function Home() {
  const { reload, triggerReload } = useReload();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (reload || !data) {
      async function fetchUsers() {
        const response = await getAllUsersApi();

        setData(response);
        triggerReload();
      }

      fetchUsers();
    }
  }, [reload, triggerReload]);

  return (
    <main className="main-page">
      <MainLayout>
        <div>
          {data === null && <p>Cargando datos...</p>}
          {data && data.length === 0 && <p>No hay datos disponibles.</p>}
          {data && data.length > 0 && (
            <div className={styles.cardMain}>
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </MainLayout>
    </main>
  );
}
