'use client'
import { useState, useEffect } from 'react';
import styles from './animatronic.module.css';
import axios from 'axios';
import Card from '../components/Card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const animatronicPage = () => {
    const [animatronics, setAnimatronics] = useState([]);
    const [data, setData] = useState([]);

    const router = useRouter();

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

    const openDetails = () => {

    }

    //put animatronic

    const edit = (id) => {
        router.push(`/page-animatronic/${id}`)
    }

    //delete animatronic
    
    const exclude = async(id) => {
        const url = `/api/animatronics/${id}`;
        try {
            await axios.delete(url);
            setData(data.filter((animatronic) => animatronic.id !== id));
        } catch(e) {
        console.log("Error feetching data:", e);
        }
    }

    return(
        <main className={styles.container}>
            <article className={styles.itens}>
                <h1>ANIMATRONICS</h1>
                <button>
                    <Link href={"/page-animatronic/register"}>
                        Register
                    </Link>
                </button>
            </article>
            <article>
            {
                data.length ? (
                    animatronics ? (
                        <section className={styles.animatronics}>
                            {
                                data.map((animatronic) => (
                                    <Card key={animatronic.id} name={animatronic.name} image={animatronic.imageIcon} id={animatronic.id} openDetails={openDetails} exclude={() => exclude(animatronic.id)} edit={() => edit(animatronic.id)}/>
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