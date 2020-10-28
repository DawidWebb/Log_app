import React from "react";
import { Link } from "react-router-dom";
import styles from "./FreeStart.module.scss";

import ReturnButton from "../../components/ReturnButton/ReturnButton";

const FreeStartPage = () => {
  return (
    <div className={styles["section-free-start"]}>
      <Link
        className={styles["section-free-start__link"]}
        to="/free_start_work"
      >
        Zacznij pracę bez logowania
      </Link>

      <div className={styles["section-free-start__return-button"]}>
        <ReturnButton />
      </div>
    </div>
  );
};

export default FreeStartPage;
