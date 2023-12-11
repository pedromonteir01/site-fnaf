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
    const [data, setData] = useState([]);

    const [franchise, setFranchise] = useState('');
    const [name, setName] = useState('');

    const router = useRouter();

    useEffect(() => {
        const fetchAnimatronics = async () => {
            try {
                let queryParams = '';
                if(franchise || name) {
                    queryParams += `franchise=${franchise}&name=${name}`
                }
                const url = `/api/animatronics?${queryParams}`
                console.log(url);
                const response = await axios.get(url);
                setData(response.data);
                setAnimatronics(response.data.animatronics)
            } catch (e) {
                console.log('feetching data', e);
            }
        }

        fetchAnimatronics();
    }, [franchise, name]);

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
                            <button className={styles.btnRegister} style={{ color: 'black' }}>
                                    CADASTRAR ANIMATRONIC
                                </button>
                            </Link>
                        </article>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivAnimatronics}>
                            <article className={styles.containerCard}>
                                <section className={styles.filters}>
                                    <select className={styles.franchise} value={franchise} onChange={(e) => setFranchise(e.target.value)}>
                                        <option value="">Selecione...</option>
                                        <option value={"Freddy Fazbear's Pizza (1993)"}>Freddy Fazbear's Pizza (1993)</option>
                                        <option value={"Freddy Fazbear's Pizza (1987)"}>Freddy Fazbear's Pizza (1987)</option>
                                        <option value={"Fazbear's Fright: The Horror Attraction (2023)"}>Fazbear's Fright: The Horror Attraction (2023)</option>
                                        <option value={"Casa William Afton (1983)"}>Casa William Afton (1983)</option>
                                        <option value={"Circus Baby's Pizza World (1995)"}>Circus Baby's Pizza World (1995)</option>
                                        <option value={"Chica's Party World (1995)"}>Chica's Party World (1995)</option>
                                        <option value={"Fredbear's Family Dinner (1983)"}>Fredbear's Family Dinner (1983)</option>
                                        <option value={"Freddy Fazbear's Pizza (2023)"}>Freddy Fazbear's Pizza (2023)</option>
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
                                                <Card name={animatronic.name} id={animatronic.id} image={animatronic.imageIcon} occupation={animatronic.occupation} edit={() => edit(animatronic.id)} exclude={() => exclude(animatronic.id)} openDetails={openDetails}/>
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