import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="Company Logo" width={40} height={40} className={styles.logoImage} />
          <span className={styles.companyName}>Obat Online</span>
        </Link>
      </div>
    </header>
  )
}

