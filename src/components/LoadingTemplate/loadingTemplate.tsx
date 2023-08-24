import { FC } from "react";

import LoadingIcon from "./loadingIcon.svg";
import styles from "./loadingTemplate.module.css";

const LoadingTemplate: FC = () => {
  return (
    <div className={styles.container}>
      <LoadingIcon className={styles.icon} />
    </div>
  );
};

export default LoadingTemplate;
