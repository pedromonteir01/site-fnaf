'use client'
import axios from "axios";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function Page() {

    const [students, setStudents] = useState([]);
    const [dados, setDados] = useState([]);
    // const router = useRouter();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await axios.get("/api/students");
                setStudents(res.dados.students);
                setData(res.dados.students)
            } catch (erro) {
                console.log("Deu erro")
            }
        }

        fetchStudents();
    }, []);

    return (
        <main>
            <h1>Nossa Equipe</h1>
            <article>
                
                    dados.length ?
                        students ? (
                            <section>
                                {
                                    dados.map((students) => (
                                        <div key={students.id}>
                                            <div>
                                                <img src={student.img} alt={student.name} />
                                            </div>
                                            <p>{student.name}</p>
                                            <p>{student.age}</p>
                                            <p>{student.gender}</p>
                                            <p>{student.description}</p>
                                        </div>
                                    ))
                                }
                            </section>
                        ) : (
                            <p>Carregando</p>
                        )
                    ) : (
                        <p>Não tem colaboradores cadastrados</p>
                    )
                
            </article>
        </main>
    )
}
