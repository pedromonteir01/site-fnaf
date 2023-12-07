"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/app/page-students/registerS/registerS.module.css"
import { useRouter } from "next/navigation";
import SideHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";


export default function RegisterSudents() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");
    const [students, setStudents] = useState([])
const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/students", { name, age, gender, description, img });
            setName("");
            setAge("");
            setGender("");
            setDescription("");
            setStudents(response.data.students);
            router.push("/page-students");
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
<div className={styles.containerPai}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader/>
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.title}>Cadastrar Colaboradores</h1>
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
                                <label className={styles.label1} htmlFor="age">
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
                                <label className={styles.label1} htmlFor="gender">
                                    Gênero:
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