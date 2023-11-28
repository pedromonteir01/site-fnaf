'use client'
import axios from "axios";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import styles from "@/app/students/students.module.css"

export default function Page() {

    const [students, setStudents] = useState([]);
    const [dados, setDados] = useState([]);
    // const router = useRouter();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await axios.get("/api/students");
                setStudents(res.data.students);
                setDados(res.data.students)
            } catch (erro) {
                console.log("Deu erro")
            }
        }
        fetchStudents();
    }, []);

    return (
        <main className={styles.megaContainer}>
            <h1 className={styles.title}>Nossa Equipe</h1>
            <article>
                {
                    dados.length ?
                        students ? ( 
                            <section className={styles.sec}>
                                {
                                    dados.map((students) => (
                                        <div className={styles.card} key={students.id}>
                                            <div>
                                                <img className={styles.img} src={students.img} alt={students.name} />
                                            </div>
                                            <div className={styles.infos}>
                                            <p>Nome: {students.name}</p>
                                            <p>Idade: {students.age}</p>
                                            <p>Gênero: {students.gender}</p>
                                            <p>Descrição: {students.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </section>
                        ) : (
                            <p>Carregando</p>
                        )
                        : (
                            <p>Não tem colaboradores cadastrados</p>
                        )
                }
            </article>
        </main>
    )
}