'use client'
import { useState, useEffect } from 'react';
import styles from "./pizzerias.module.css";
import axios from 'axios';
import Link from 'next/link';
import SideHeader from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RegisterPizzeiras = () => {
    const [pizzerias, setPizzerias] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPizzerias = async () => {
            try {
                const response = await axios.get("/api/pizzerias");
                setPizzerias(response.data.pizzerias);
                setData(response.data.pizzerias);
            } catch (e) {
                console.log('feetching data', e);
            }
        }

        fetchPizzerias();
    }, []);

    return (
        <div className={styles.containerPai}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.titlePage}>PIZZARIAS</h1>
                    </div>
                    <div className={styles.divButtons}>
                        <button className={styles.buttons}>
                            <Link href={"/page-pizzerias/registerP"}>
                                Registrar pizzaria
                            </Link>
                        </button>
                    </div>
                    <div className={styles.subDiv2}>
                        <div>

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
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default RegisterPizzeiras;