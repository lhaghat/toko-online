import Image from "next/image";
import Header from "./_components/Header";
import ImageSlider from "./_components/image-slider";
import styles from "./page.module.css";
import { cache } from "react";

export const fetchSliderData = cache(async () => {
  try {
    const response = await fetch('https://dummyjson.com/c/58dd-d1cb-44a7-9e89', {
      next: { revalidate: 3600 },
      cache: 'force-cache'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch slider data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching slider data:', error);
    return { data: [] };
  }
});

export default async function Home() {
  const sliderData = await fetchSliderData();

  return (
    <div>
      <Header />
      <main className={styles.main}>
      
      <h3 className="subtitle">Multi vitamin</h3>
      <ImageSlider data={sliderData.data} />
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://github.com/lhaghat/toko-online"
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
