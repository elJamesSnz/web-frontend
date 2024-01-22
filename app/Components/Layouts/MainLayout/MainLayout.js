"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import styles from "./MainLayout.module.css";

export default function MainLayout(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
