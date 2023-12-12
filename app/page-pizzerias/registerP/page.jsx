"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./registerP.module.css";
import { useRouter } from "next/navigation";
import SideHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import HeaderMobile from "@/app/components/headerMobile/HeaderMobile";


export default function RegisterPizzerias() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [franchise, setFranchise] = useState("");
    const [animatronics, setAnimatronics] = useState("");
    const [description, setDescription] = useState("");
    const [pizzerias, setPizzerias] = useState([])
const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/pizzerias", { name, franchise, animatronics, description, img });
            setName("");
            setFranchise("");
            setAnimatronics("");
            setDescription("");
            setPizzerias(response.data.students);
            router.push("/page-pizzerias");
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
<div className={styles.containerPai}>
    <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader/>
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.title}>Cadastrar Pizzarias</h1>
                    </div>
                    <div className={styles.subDiv2}>
                    <div className={styles.subDivStudents}>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.containerInputs}>
                                <label className={styles.label1} htmlFor="name">
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
                                <label className={styles.label1} htmlFor="franchise">
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
                                <label className={styles.label1} htmlFor="animatronics">
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
                                <label className={styles.label1} htmlFor="description">
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
                                <label className={styles.label1} htmlFor="image">
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

                            <button
                                className={styles.btn}
                                type="submit"
                            >
                                Cadastrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
            </div>
    )
}