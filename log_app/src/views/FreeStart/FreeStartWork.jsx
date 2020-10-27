import React from "react";
import styles from "./FreeStartWork.module.scss";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const FreeStartWork = () => {
  return (
    <div className={styles["section-free-start-work"]}>
      <div className={styles["section-free-start-work__return-button"]}>
        <ReturnButton />
      </div>
    </div>
  );
};

export default FreeStartWork;
