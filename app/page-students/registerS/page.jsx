"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/app/page-students/registerS/registerS.module.css"
import SideHeader from "@/app/components/header/Header";


export default function RegisterSudents() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");
    const [students, setStudents] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/students", { name, age, gender, description, img });
            setName("");
            setAge("");
            setGender("");
            setDescription("");
            setStudents(response.data.students)
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get("/api/students");
                setStudents(response.data.students);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchStudents();
    }, [students]);

    return (
        <main className={styles.back}>
            <div className={styles.containerPai}>
                <div className={styles.container}>
                    <div className={styles.divContainer}>
                        <h1 className={styles.titulo}>Cadastrar Colaboradores</h1>

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
                                <label className={styles.label} htmlFor="age">
                                    Idade:
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.containerInputs}>
                                <label className={styles.label} htmlFor="gender">
                                    Gênero
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
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
                </div>
            </div>
        </main>
    )
}