import Image from "next/image"
import Link from "next/link"
import type { Product } from "../types/product"
import styles from "./Item.module.css"

interface ItemProps {
    product: Product
  }

function Item({ product }: ItemProps) {
  return (
    <Link href={`/product/${product.id}`} className={styles.item}>
      <div className={styles.imageContainer}>
        <Image
          src={product.thumbnail_image || "/placeholder.svg"}
          alt={product.name}
          width={80}
          height={80}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>{product.price}</span>
      </div>
    </Link>
  )
}

export default Item