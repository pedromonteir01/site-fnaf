'use client'
import { useState, useEffect } from 'react';
import styles from './pizzerias.module.css';
import axios from 'axios';
import { Router } from 'next/router';

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
        <main className={styles.container}>
            <h1>PIZZARIA</h1>
            <article>
                {
                    data.length ? (
                        pizzerias ? (
                            <section className={styles.pizzarias}>
                                {
                                    data.map((pizzeria) => (
                                        <div key={pizzeria.id}>
                                            <img src={pizzeria.image} />
                                            <p>{pizzeria.name}</p>
                                            <p>{pizzeria.id}</p>
                                            <p>{pizzeria.franchise}</p>
                                            <p>{pizzeria.description}</p>
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
        </main>
    );
}

export default pizzeriaPage;