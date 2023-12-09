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

    const [Loading, setLoading] = useState(false);

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
                                <Link href={"/page-animatronic/register"} style={{ color: 'black' }}>
                                    CADASTRAR ANIMATRONIC
                                </Link>
                            </button>
                        </article>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivAnimatronics}>
                            <article className={styles.containerCard}>
                                {
                                    data.animatronics ? (
                                        animatronics.length ? (
                                            animatronics.map((animatronic) => (
                                                <Card name={animatronic.name} id={animatronic.id} image={animatronic.imageIcon} occupation={animatronic.occupation} edit={() => edit(id)} exclude={() => exclude(id)} openDetails={openDetails}/>
                                            ))
                                        ) : (
                                            <p>Não há animatronics cadastrados</p>
                                        )
                                    ) : (
                                        <p>{data.message ? (data.message) : ('Carregando...')}</p>
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