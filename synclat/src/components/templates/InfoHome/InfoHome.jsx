import React from "react";
import styles from "./Infohome.module.css";
import { CardHome } from "../../molecules/CardHome/CardHome";
export const InfoHome = () => {
  return (
    <div>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Welcome to synclat</h1>
      </div>
      <div className={styles.containerText}>
        {" "}
        <p className={styles.text}>
          The AI-powered fueling latin music creation and sync for labels,
          supervisors, artist and producers: unite here to discover, generate
          and license autentic latin sounds
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <CardHome
          title={"Supervisor"}
          text={
            "Access License or generate Sync-ready music for all your projects using Synclat AI-technology"
          }
        />
        <CardHome
          title={"Artist"}
          text={
            "Create and share your latin music works with global creator and supervisors"
          }
        />
        <CardHome
          title={"Labels & Catalogs"}
          text={
            "Promote, sell and manage your new and existing music works with powerful AI tools all in one place"
          }
        />
        <CardHome
          title={"Producers"}
          text={
            "Generate original AI-driven Latin beats and streamline your production workflow while you sell share and exploit your works"
          }
        />
      </div>
    </div>
  );
};
