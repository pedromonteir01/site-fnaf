'use client'
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import styles from "@/app/page-students/students.module.css"


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

    console.log(dados);
    console.log(students);
    return (
        <main className={styles.containerGiga}>
            <h1 className={styles.title}>Nossa Equipe</h1>
            <button className={styles.btnRegister}>
                <Link href={"/page-students/registerS"}>
                    Cadastrar Aluno
                </Link>
            </button>
            <article className={styles.containerCard}>
                {
                    dados.length ?
                        students ? ( 
                            <section className={styles.sec}>
                                {
                                    dados.map((students) => (
                                        <div key={students.id} className={styles.card}>
                                            <div className={styles.imgDiv}>
                                                <img src={students.img} alt={students.name} />
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
