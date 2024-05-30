import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.style}>helloo</div>

      <table className={styles.table}>
        <tr>
          <th>no</th>
          <th>name</th>
          <th>number</th>
        </tr>

        <tr><td>1</td>
        <td>sourav</td>
        <td>90/100</td></tr>
      </table>
    </>
  );
}
