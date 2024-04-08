import Image from "next/image";
import styles from './Icon.module.css';

function Icon({src, hoverdisabled}) {
  return (
      <div className={`${styles.icon} ${hoverdisabled && styles.hoverdisabled}`}>
        <Image src={src} alt="search" />
      </div>
  );
}

export default Icon;
