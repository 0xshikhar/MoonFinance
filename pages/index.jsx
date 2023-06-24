import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  const SocialLoginDynamic = dynamic(
    () => import("../components/wallet").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
        <Suspense fallback={<div>Loading...</div>}>
          <SocialLoginDynamic />
        </Suspense>
      </main>
    </div>
  );
}
