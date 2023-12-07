'use client'
import { useState, useEffect } from 'react';
import styles from './animatronic.module.css';
import axios from 'axios';
import Card from '../components/Card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SideHeader from '../components/header/Header';
import Footer from '../components/footer/Footer';

const animatronicPage = () => {
    const [animatronics, setAnimatronics] = useState([]);
    const [data, setData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        const fetchAnimatronics = async () => {
            try {
                const response = await axios.get("/api/animatronics");
                setAnimatronics(response.data.animatronics);
                setData(response.data);
            } catch (e) {
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

    const exclude = async (id) => {
        const url = `/api/animatronics/${id}`;
        try {
            await axios.delete(url);
            setAnimatronics(animatronics.filter((animatronic) => animatronic.id !== id));
        } catch (e) {
            console.log("Error feetching data:", e);
        }
    }

    console.log('data:', data);
    console.log('animatronics:', animatronics);

    return (
        <div className={styles.containerPai}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.titlePage}>ANIMATRONICS</h1>
                        <article className={styles.itens}>
                                <button className={styles.btnRegister}>
                                    <Link href={"/page-animatronic/register"}>
                                        Register
                                    </Link>
                                </button>
                        </article>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivAnimatronics}>
                            <article>
                                {
                                    data ? (
                                        animatronics ? (
                                            <section className={styles.animatronics}>
                                                {
                                                    animatronics.map((animatronic) => (
                                                        <Card key={animatronic.id} name={animatronic.name} image={animatronic.imageIcon} id={animatronic.id} instrument={animatronic.instrument} openDetails={openDetails} exclude={() => exclude(animatronic.id)} edit={() => edit(animatronic.id)} />
                                                    ))
                                                }
                                            </section>
                                        ) : (
                                            <p>Loading...</p>
                                        )
                                    ) : (
                                        <p>{
                                            data.message ? (data.message) : ("")
                                        }</p>
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
    );
}

export default animatronicPage;