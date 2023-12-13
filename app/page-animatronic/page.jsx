'use client'
import { useState, useEffect } from 'react';
import styles from './animatronic.module.css';
import axios from 'axios';
import Card from '../components/Card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SideHeader from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeaderMobile from '../components/headerMobile/HeaderMobile';

const animatronicPage = () => {
    const [animatronics, setAnimatronics] = useState([]);
    const [pizzerias, setPizzerias] = useState([]);
    const [data, setData] = useState([]);

    const [franchise, setFranchise] = useState('');
    const [name, setName] = useState('');

    const router = useRouter();

    useEffect(() => {
        const fetchAnimatronics = async () => {
            try {
                let queryParams = '';
                if (franchise || name) {
                    queryParams += `franchise=${franchise}&name=${name}`
                }
                const url = `/api/animatronics?${queryParams}`
                const response = await axios.get(url);
                setData(response.data);
                setAnimatronics(response.data.animatronics)
            } catch (e) {
                console.log('feetching data', e);
            }
        }

        fetchAnimatronics();
    }, [franchise, name]);

    useEffect(() => {
        async function fetchPizzerias() {
            try {
                const response = await axios.get("/api/pizzerias");
                setPizzerias(response.data.pizzerias);
            } catch (e) {
                console.log('Error fetching data pizzerias:', e);
            }
        }

        fetchPizzerias();
    }, []);

    const openDetails = () => {
        router.push('')
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

    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.titlePage}>ANIMATRONICS</h1>
                        <article className={styles.itens}>
                            <Link href={"/page-animatronic/register"}>
                                <button className={styles.btnRegister}>
                                    CRIAR ANIMATRONIC
                                </button>
                            </Link>
                        </article>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivAnimatronics}>
                            <article className={styles.containerCard}>
                                <section className={styles.filters}>
                                    <select
                                        value={franchise}
                                        onChange={(e) => setFranchise(e.target.value)}
                                        name="occupation"
                                        className={styles.Input}
                                    >
                                        <option value=''>Selecione...</option>
                                        {
                                            pizzerias.map((pizzeria) => (
                                                <option key={pizzeria.id} value={pizzeria.name}>{pizzeria.name}</option>
                                            ))
                                        }
                                    </select>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </section>
                                <section className={styles.cards}>
                                    {
                                        data.animatronics ? (
                                            animatronics.length ? (
                                                animatronics.map((animatronic) => (
                                                    <Card name={animatronic.name}
                                                        id={animatronic.id}
                                                        image={animatronic.imageIcon}
                                                        occupation={animatronic.occupation}
                                                        edit={() => edit(animatronic.id)}
                                                        exclude={() => exclude(animatronic.id)}
                                                        openDetails={<Link href={`each-animatronic/${animatronic.id}`}></Link>} />
                                                ))
                                            ) : (
                                                <p>Não há animatronics cadastrados</p>
                                            )
                                        ) : (
                                            <p>{data.message ? (data.message) : ('Carregando...')}</p>
                                        )
                                    }
                                </section>
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