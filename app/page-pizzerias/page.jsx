'use client'
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./pizzerias.module.css"
import SideHeader from "../components/header/Header";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import Footer from "../components/footer/Footer";
import HeaderMobile from "../components/headerMobile/HeaderMobile";


export default function Page() {

    const [pizzerias, setPizzerias] = useState([]);
    const [data, setData] = useState([]);

    const editPizzerias = (id) => {
        router.push(`/page-animatronic/${id}`)
    }

    const deletePizzerias = async (id) => {
        const url = `/api/pizzerias/${id}`;
        try {
            await axios.delete(url);
            setData(data.filter((pizzeria) => pizzeria.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const fetchPizzerias = async () => {
            try {
                const res = await axios.get("/api/pizzerias");
                setPizzerias(res.data.pizzerias);
                setData(res.data.pizzerias)

            } catch (erro) {
                console.log("Deu erro")
            }
        }

        fetchPizzerias();
    }, [data]);

    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.title}>Pizzarias</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivAnimatronics}>
                            <button className={styles.btnRegister}>
                                <a className={styles.link} href={"/page-pizzerias/registerP"}><FaAddressBook /></a>
                            </button>
                            <article className={styles.containerCard}>
                                {
                                    data.length ?
                                        pizzerias ? (
                                            <section className={styles.sec}>
                                                {
                                                    data.map((pizzerias) => (
                                                    <Link href={`eachPizzeria/${pizzerias.id}`} className={styles.card}>
                                                        <div key={pizzerias.id}>
                                                            <div className={styles.imgDiv}>
                                                                <img src={pizzerias.img} alt={pizzerias.name} />
                                                            </div>
                                                            <div className={styles.infos}>
                                                                <p><b>Nome:</b> {pizzerias.name}</p>
                                                                <p><b>Franquia:</b> {pizzerias.franchise}</p>
                                                                <p><b>Animatronics:</b> {pizzerias.animatronics}</p>
                                                            </div>

                                                            <div className={styles.buttons}>
                                                                <div className={styles.buttonEdit}>
                                                                    <button
                                                                        onClick={() => editPizzerias(pizzerias.id)}
                                                                        className={styles.button}><MdEdit />
                                                                    </button>
                                                                </div>

                                                                <div className={styles.buttonDelete}>
                                                                    <button
                                                                        onClick={() => deletePizzerias(pizzerias.id)}
                                                                        className={styles.button}><MdDelete />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </Link>
                                                    ))
                                                }
                                            </section>
                                        ) : (
                                            <p>Carregando</p>
                                        )

                                        : (
                                            <p>Não tem pizzarias cadastradas</p>
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
    )
}
