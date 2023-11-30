"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import styles from "./registerP.module.css";
import SideHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export default function RegisterPizzeria() {
    const [name, setName] = useState("");
    const [franchise, setFranchise] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [pizzerias, setPizzerias] = useState([]);

    const [data, setData] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/pizzerias", { name, franchise, description, img });
            setName("");
            setFranchise("");
            setDescription("");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    // const deletePizzeria = async (id) => {
    //     const url = `/api/pizzerias/${id}`;
    //     try {
    //         await axios.delete(url);
    //         setData(data.filter((pizzeria) => pizzeria.id !== id));
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // const editPizzeria = async (id) => {
    //     router.push(`/pizzerias/${id}`);
    // };

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
        <main className={styles.mainContainer}>
        <div className={styles.container}>
            <div>
                <SideHeader />
            </div>

            <div>
                <div className={styles.pizzeriasContainer}>
                    <h1 className={styles.mainText}>Cadastrar Pizzarias</h1>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">
                                Nome:
                            </label>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Freddy Fazbear's Pizza"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="franchise">
                                Franquia:
                            </label>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="FNAF 5"
                                id="franchise"
                                value={franchise}
                                onChange={(e) => setFranchise(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="description">
                                Descrição:
                            </label>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Primeira pizzaria do jogo"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
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

                        <button
                            type="submit"
                            className={`${styles.button} ${styles.submitButton}`}
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>

                {/* Renderizar conteúdo dos Inputs */}
                <div className={styles.pizzeriasContainer}>
                    <h1 className={styles.mainText}>Pizzarias Cadastradas</h1>

                    <div className={styles.pizzerias}>
                        {pizzerias.map((pizzeria) => (
                            <div key={pizzeria.id} className={styles.pizzeria}>
                                <div>
                                    <img src={pizzeria.img} />
                                    <p>{pizzeria.name}</p>
                                    <p>{pizzeria.franchise}</p>
                                    <p>{pizzeria.description}</p>
                                </div>

                                <div className={styles.buttons}>
                                    <div className={styles.buttonEdit}>
                                        <button className={styles.button}><MdEdit /></button>
                                    </div>

                                    <div className={styles.buttonDelete}>
                                        <button className={styles.button}><MdDelete /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

        <div>
            <Footer />
        </div>
        </main>
    );
}