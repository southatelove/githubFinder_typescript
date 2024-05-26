import styles from "./InfoItem.module.scss";
import React from "react";

interface InfoItemProps {}

export const InfoItem = ({}: InfoItemProps) => (
  <div className={styles.infoItem}>InfoItem Component</div>
);
