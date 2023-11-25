'use client'
import { useState, useEffect } from 'react';
import styles from './animatronic.module.css';
import axios from 'axios';
import Card from '../components/Card';

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

    console.log('animatronics', animatronics);
    console.log('data', data);

    
    return(
        <main className={styles.container}>
            <article className={styles.itens}>
                <h1>ANIMATRONICS</h1>
                <button>REGISTRAR</button>
            </article>
            <article>
            {
                data.length ? (
                    animatronics ? (
                        <section className={styles.animatronics}>
                            {
                                data.map((animatronic) => (
                                    <Card key={animatronic.id} name={animatronic.name} image={animatronic.image} id={animatronic.id}/>
                                ))
                            }
                        </section>
                    ) : (
                        <p>Loading...</p>
                    )
                ) : (
                    <p>Nâo há animatronics</p>
                )
            }
            </article>
        </main>
    );
}

export default animatronicPage;