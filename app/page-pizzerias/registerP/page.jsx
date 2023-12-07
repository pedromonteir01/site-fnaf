"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./registerP.module.css"
import SideHeader from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Link from "next/link";

const Home = () => {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [franchise, setFranchise] = useState("");
    const [description, setDescription] = useState("");
    const [animatronics, setAnimatronics] = useState("");
    const [pizzerias, setPizzerias] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/pizzerias", { name, franchise, animatronics, description, img });
            setName("");
            setFranchise("");
            setDescription("");
            setAnimatronics("")
            setPizzerias(response.data.pizzerias)
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    useEffect(() => {
        async function fetchPizzerias() {
            try {
                const response = await axios.get("/api/pizzerias");
                setPizzerias(response.data.pizzerias);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchPizzerias();
    }, [pizzerias]);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.titlePage}>Registre sua pizzaria</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.containerInputs}>
                                <label className={styles.label} htmlFor="name">
                                    Nome:
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.containerInputs}>
                                <label className={styles.label} htmlFor="franchise">
                                    Franquia:
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="franchise"
                                    value={franchise}
                                    onChange={(e) => setFranchise(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.containerInputs}>
                                <label className={styles.label} htmlFor="description">
                                    Descrição:
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.containerInputs}>
                                <label className={styles.label} htmlFor="animatronics">
                                    Animatronics:
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="animatronics"
                                    value={animatronics}
                                    onChange={(e) => setAnimatronics(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.containerInputs}>
                                <label className={styles.label} htmlFor="image">
                                    Imagem:
                                </label>
                                <input
                                    className={styles.input}
                                    type="file"
                                    id="img"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                    required
                                />
                            </div>

                            <Link href={"./../page-pizzerias"}>
                                <button className={styles.btn} type="submit">
                                    Cadastrar
                                </button>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;