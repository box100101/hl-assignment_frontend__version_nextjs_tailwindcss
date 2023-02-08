import { Body, Footer, Header } from "@/components";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Header />
                <Body />
                <Footer />
            </div>
        </main>
    );
}
