'use client'
import { useState, useEffect } from 'react';
import styles from './animatronic.module.css';
import axios from 'axios';
import { Router } from 'next/router';

const animatronicPage = () => {
    const [animatronics, setAnimatronics] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAnimatronics = async() => {
            try {
                const response = await axios.get("/api/animatronics");
                setAnimatronics(response.data.animatronics);
                setData(response.data.animatronics);
            }catch(e) {
                console.log('feetching data', e);
            }
        }

        fetchAnimatronics();
    }, []);
    
    return(
        <main className={styles.container}>
            <h1>ANIMATRONICS</h1>
            <article>
            {
                data.length ? (
                    animatronics ? (
                        <section className={styles.animatronics}>
                            {
                                data.map((animatronic) => (
                                    <div key={animatronic.id}>
                                        <img src={animatronic.image}/>
                                        <p>{animatronic.name}</p>
                                        <p>{animatronic.id}</p>
                                    </div>
                                ))
                            }
                        </section>
                    ) : (
                        <p>Loading...</p>
                    )
                ) : (
                    <p>Nenhum animatronic foi cadastrado.</p>
                )
            }
            </article>
        </main>
    );
}

export default animatronicPage;