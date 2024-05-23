import styles from "./UserTitle.module.scss";
import React from "react";

interface UserTitleProps {}

export const UserTitle = ({}: UserTitleProps) => (
  <div className={styles.userTitle}>UserTitle Component</div>
);
