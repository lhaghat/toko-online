import Image from "next/image";
import Header from "./_components/Header";
import ImageSlider from "./_components/image-slider";
import styles from "./page.module.css";

const datas = {
  status: "success",
  status_code: 200,
  result: {
    data: [
      {
        id: "64c9da5d5165cfb1571d6808",
        type: "products",
        name: "Caviplex CDEZ 10 Kaplet",
        sku: "Cavi210296772EREL",
        thumbnail_image:
          "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1691047962_caviplex_cdez_10-removebg-preview",
        category: "Multivitamin",
        price: "Rp27.176",
      },
      {
        id: "2",
        type: "products",
        name: "Blackmores Bio C 1000 Mg 30 Tablet",
        thumbnail_image:
          "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1659935216_61dff62de139ec05b9c8cadd",
        price: "Rp27.176",
      },
      {
        id: "3",
        type: "products",
        name: "L-Vit D3 1000 10 Tablet",
        alodokter_sku: "L-Vi782566740LAPI",
        thumbnail_image:
          "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1661157175_62a19151f15ee840f566029c",
        price: "Rp27.176",
      },
      {
        "id": "4",
        "type": "products",
        "name": "Redoxon Triple Action 10 Tablet",
        "alodokter_sku": "Redo420801286BAYE",
        "thumbnail_image": "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1659932227_5fb38a0041ab59059e86a5f4",
    },
    {
        "id": "5",
        "type": "products",
        "name": "Blackmores Daily Immune C 500 30 Tablet",
        "alodokter_sku": "Blac129863497KALB",
        "thumbnail_image": "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1713752963_bm_daily_immune-removebg-preview",
    },
    {
        "id": "6",
        "type": "products",
        "name": "Hevit C 1000 mg 10 Kaplet",
        "alodokter_sku": "Hevi359812112HEXP",
        "thumbnail_image": "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1660980249_61dff629e139ec05b9c8cad7",
    },
    {
        "id": "7",
        "type": "products",
        "name": "Vitacimin Lemon 2 Tablet",
        "alodokter_sku": "Vita411988517TAKE",
        "thumbnail_image": "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1701705407_vitacimin_lemon",
    },
    {
        "id": "8",
        "type": "products",
        "name": "Holisticare Ester C 1000 30 Tablet",
        "alodokter_sku": "Holi682004379INDO",
        "thumbnail_image": "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1659934906_1642147548_holisticare_ester_c-1000_30_tablet",
    },
    {
        "id": "61b36989b5a5e2062d9798df",
        "type": "products",
        "name": "Hevit C 500 Mg 10 Tablet",
        "alodokter_sku": "Hevi539004781HEXP",
        "thumbnail_image": "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1660027808_61b36989b5a5e2062d9798df",
    },
    ],
  },
};


export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
      
      <h3 className="subtitle">Multi vitamin</h3>
      <ImageSlider data={datas.result.data} />
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Source →
        </a>
      </footer>
    </div>
  );
}
