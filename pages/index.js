import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunt 4 Coders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <div className={styles.description}>
            <div className={styles.wrapper}>
              <Image
                className={styles.image}
                style={{ borderRadius: "200px" }}
                src="/homeimg.jpg"
                alt="home image"
                width={310}
                height={210}
              ></Image>
            </div>
            <h1>Hunt 4 Coders</h1>
            <p> A Blog by Hunting Coders for Hunting Coders</p>
          </div>
        </div>
        <div className={styles.grid}>
          <h2>Popular Blogs</h2>
        </div>

        <div className={styles.grid}>
          <a href="" className={styles.card} rel="noopener noreferrer">
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a href="" className={styles.card} rel="noopener noreferrer">
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a href="" className={styles.card} rel="noopener noreferrer">
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a href="" className={styles.card} rel="noopener noreferrer">
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
