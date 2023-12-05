'use client'
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import styles from "@/app/page-students/students.module.css"
import SideHeader from "../components/header/Header";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


export default function Page() {

    const [students, setStudents] = useState([]);
    const [dados, setDados] = useState([]);
    // const router = useRouter();

    const deleteStudents = async (id) => {
        console.log("id do dlete", id)
        const url = `/api/students/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((student) => student.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

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
    }, [dados]);

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

                                            <div className={styles.buttons}>
                                                <div className={styles.buttonEdit}>
                                                    <button
                                                        className={styles.button}><MdEdit />
                                                    </button>
                                                </div>

                                                <div className={styles.buttonDelete}>
                                                    <button
                                                        onClick={() => deleteStudents(students.id)}
                                                        className={styles.button}><MdDelete />
                                                    </button>
                                                </div>
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
