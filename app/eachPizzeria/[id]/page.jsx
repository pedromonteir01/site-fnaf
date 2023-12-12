'use client'
import { useEffect, useState } from 'react';
import styles from './namePizzeria.module.css';
import NamePizzeria from "../../components/nameEachPizzeria/namePizzeria";
import axios from 'axios';
import SideHeader from '@/app/components/header/Header';
import HeaderMobile from '@/app/components/headerMobile/HeaderMobile';
import Footer from '@/app/components/footer/Footer';

export default function Home({ params }) {

    const [pizzeria, setPizzeria] = useState();
    const { id } = params;

    console.log(id);

    useEffect(() => {
        const fetchPizzerias = async () => {
            try {
                const res = await axios.get(`/api/pizzerias/${id}`);
                setPizzeria(res.data);
                setData(res.data)

            } catch (erro) {
                console.log("Deu erro")
            }
        }

        fetchPizzerias();
    }, []);

    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    {
                        pizzeria ? (
                            <div className={styles.subDiv2}>
                                <div className={styles.cardPizzeria}>
                                <NamePizzeria
                                    id={pizzeria.id}
                                    name={pizzeria.name}
                                    img={pizzeria.img}
                                    franchise={pizzeria.franchise}
                                    animatronics={pizzeria.animatronics}
                                    description={pizzeria.description}
                                />
                                </div>
                                </div>
                        ) : (
                            <div>
                                <h1>Carregando...</h1>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}