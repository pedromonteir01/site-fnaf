'use client'
import { useState, useEffect } from 'react';
import styles from './pizzerias.module.css';
import axios from 'axios';
import Link from 'next/link';
import SideHeader from '../components/header/Header';
import Footer from '../components/footer/Footer';

const pizzeriaPage = () => {
    const [pizzerias, setPizzerias] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPizzerias = async () => {
            try {
                const response = await axios.get("/api/pizzarias");
                setPizzerias(response.data.pizzerias);
                setData(response.data.pizzerias);
            } catch (e) {
                console.log('feetching data', e);
            }
        }

        fetchPizzerias();
    }, []);

    return (
        <main className={styles.containerMain}>
            <div className={styles.container}>
                <div>
                    <SideHeader />
                </div>

                <div>
                    <h1 className={styles.title}>PIZZARIA</h1>
                    <button>
                        <Link href={"/page-pizzerias/registerP"}>
                            Resgistrar pizzaria
                        </Link>
                    </button>
                    <article>
                        {
                            data.length ? (
                                pizzerias ? (
                                    <section className={styles.secPizzerias}>
                                        {
                                            data.map((pizzeria) => (
                                                <div key={pizzeria.id} className={styles.card}>
                                                    <div className={styles.imgDiv}>
                                                    <img src={pizzeria.image} />
                                                    </div>
                                                    <div className={styles.infos}>
                                                    <p>{pizzeria.name}</p>
                                                    <p>{pizzeria.id}</p>
                                                    <p>{pizzeria.franchise}</p>
                                                    <p>{pizzeria.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </section>
                                ) : (
                                    <p>Loading...</p>
                                )
                            ) : (
                                <p>Nenhuma pizzaria foi cadastrada.</p>
                            )
                        }
                    </article>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </main>

    );
}

export default pizzeriaPage;