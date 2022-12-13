import Image from "next/image";

import styles from "../styles/Logo.module.css";

export default function Logo() {
    return (
        <Image
            src="/img/home/wxmasc_onwhite-logo.svg"
            alt="Logo"
            width={100}
            height={50}
            objectFit="cover"
            className={styles.logo}
        />
    );
}
