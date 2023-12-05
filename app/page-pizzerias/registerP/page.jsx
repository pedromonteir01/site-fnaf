"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/app/page-pizzerias/registerP/registerP.module.css"
import SideHeader from "@/app/components/header/Header";


export default function RegisterPizzeirass() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [franchise, setFranchise] = useState("");
    const [description, setDescription] = useState("");
    const [pizzerias, setPizzerias] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/pizzerias", { name, franchise, description, img });
            setName("");
            setFranchise("");
            setDescription("");
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
        <main className={styles.back}>
            <div>
                <SideHeader />
            </div>
            <div className={styles.containerPai}>
        <div className={styles.container}>
            <div className={styles.divContainer}>
                <h1 className={styles.titulo}>Cadastrar pizzarias</h1>

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
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.containerInputs}>
                        <label className={styles.label} htmlFor="description">
                            Descrição
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
                    className={styles.btn}
                        type="submit"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>

            {/* Renderizar conteúdo dos Inputs */}
            <div className={styles.studentsContainer}>
                <h1 className={styles.title2}>Pizzerias cadastradas</h1>

                <div className={styles.studentCard}>
                    {pizzerias.map((pizzeria) => (
                        <div key={pizzeria.id}>
                            <img src={pizzeria.img} />
                            <p>Nome: {pizzeria.name}</p>
                            <p>Franquia: {pizzeria.age}</p>
                            <p>Descrição: {pizzeria.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </main>
    )
}