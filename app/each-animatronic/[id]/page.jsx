'use client'

import axios from "axios";
import styles from "/nameA.module.css"
import { useEffect, useState } from "react";


export default function Home({ params }) {

    const [data, setData] = useState(null);
    const [animatronic, setAnimatronic] = useState(null);

    const { id } = params;

    useEffect(() => {
        const fetchAnimatronic = async () => {
            const response = await axios.get(`/api/animatronics/${id}`);
            setData(response);
            setAnimatronic(response);
        }
        fetchAnimatronic();
    }, [])

    return (
        <div className={styles.containerPai}>
            <HeaderMobile/>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader/>
                </div>
                <div className={styles.body}>
                    {
                        animatronic ? (
                            <article>
                                <h1>{animatronic.name}</h1>

                            </article>
                        ) : (
                            <p>Carregando...</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

