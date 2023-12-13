'use client'
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/page-students/students.module.css"
import SideHeader from "../components/header/Header";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import Footer from "../components/footer/Footer";
import HeaderMobile from "../components/headerMobile/HeaderMobile";


export default function Page() {

    const [students, setStudents] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    //put student

    const edit = (id) => {
        router.push(`/page-students/${id}`)
    }


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

    // console.log(dados);
    // console.log(students);
    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.title}>Equipe</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivAnimatronics}>
                            <button className={styles.btnRegister}>
                                <a className={styles.link} href={"/page-students/registerS"}><FaAddressBook /></a>
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
                                                                <p><strong>Nome </strong> {students.name}</p>
                                                                <p><strong>Idade </strong> {students.age}</p>
                                                                <p><strong>Gênero </strong> {students.gender}</p>
                                                                <p><strong>Descrição </strong> {students.description}</p>
                                                            </div>

                                                            <div className={styles.buttons}>
                                                                <div className={styles.buttonEdit}>
                                                                    <button
                                                                        onClick={() => edit(students.id)}
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
                                            <div className={styles.containerPaiImageLoading}>
                                            <div className={styles.containerImageLoading}>
                                            <img src="/ImageLoading.gif" alt="ImageLoading" />
                                            </div>
                                            </div>
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