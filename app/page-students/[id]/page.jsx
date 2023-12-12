'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./edit.module.css";
import SideHeader from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";

const Register = ({ params }) => {
    //variaveis do cadastro
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");

    //id
    const { id } = params;

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/students/${id}`, { name, img, age, gender, description });
            router.push('/page-students')
        } catch (e) {
            console.log('error', e);
        }
    }

    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get(`/api/students/${id}`);
                const student = response.data;
                console.log(student);
                setName(student.name);
                setImg(student.img);
                setAge(student.age);
                setGender(student.gender);
                setDescription(student.description);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        if (id) {
            fetchStudents();
        }

    }, []);

    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.title}>Editar Colaboradores</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivStudents}>

                            <form onSubmit={handleSubmit}>
                                {/* <form> */}
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
                                        type="text"
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
                                    Editar
                                </button>
                            </form>
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

export default Register;