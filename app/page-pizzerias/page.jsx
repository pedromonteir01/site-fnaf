// Importação de bibliotecas e componentes necessários
'use client';
import { useState, useEffect } from 'react';
import styles from "./pizzerias.module.css";
import axios from 'axios';
import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import SideHeader from '../components/header/Header';
import Footer from '../components/footer/Footer';

// Definição do componente funcional chamado RegisterPizzeiras
const RegisterPizzeiras = () => {
    // Estados para armazenar dados das pizzarias e dados gerais
    const [pizzerias, setPizzerias] = useState([]);
    const [data, setData] = useState([]);

    // Efeito colateral que busca dados das pizzarias ao carregar a página
    useEffect(() => {
        const fetchPizzerias = async () => {
            try {
                // Solicita dados das pizzarias ao servidor
                const response = await axios.get("/api/pizzerias");
                // Atualiza os estados com os dados recebidos
                setPizzerias(response.data.pizzerias);
                setData(response.data.pizzerias);
            } catch (e) {
                console.log('Erro ao obter dados:', e);
            }
        }

        // Executa a função de busca ao montar o componente
        fetchPizzerias();
    }, []);


    // Edita uma pizzaria
    const edit = (id) => {
        router.push(`/page-pizzerias/${id}`)
    }

    //delete animatronic

    const exclude = async (id) => {
        const url = `/api/pizzerias/${id}`;
        try {
            await axios.delete(url);
            setPizzerias(pizzerias.filter((pizzeria) => pizzeria.id !== id));
        } catch (e) {
            console.log("Error feetching data:", e);
        }
    }

    // Renderização do componente com a estrutura da página
    return (
        <div className={styles.containerPai}>
            {/* Estrutura principal do componente */}
            <div className={styles.container}>
                <div className={styles.header}>
                    {/* Cabeçalho */}
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        {/* Título da página */}
                        <h1 className={styles.titlePage}>PIZZARIAS</h1>
                    </div>
                    {/* Link para a página de registro de pizzarias */}
                    <Link href={"/page-pizzerias/registerP"}>
                        <div className={styles.divButtons}>
                            <button className={styles.buttons}>
                                Registrar pizzaria
                            </button>
                        </div>
                    </Link>
                    {/* Seção que exibe as pizzarias */}
                    <div className={styles.subDiv2}>
                        <div>
                            <article>
                                {
                                    // Verifica se há pizzarias cadastradas
                                    data.length ? (
                                        pizzerias ? (
                                            // Exibe as informações de cada pizzaria
                                            <section className={styles.secPizzerias}>
                                                {
                                                    data.map((pizzeria) => (
                                                        <div className={styles.card} key={pizzeria.id}>
                                                            <div className={styles.pizzerias}>
                                                                <h1>{pizzeria.name}</h1>
                                                                <img className={styles.icon} src={pizzeria.img} alt={pizzeria.name} />
                                                                <p><strong>DESCRIÇÃO:</strong> {pizzeria.description}</p>
                                                                <div className={styles.btns}>
                                                                    <button type="button" onClick={exclude} className={styles.delete}>
                                                                        <MdDelete />
                                                                    </button>
                                                                    <button type="button" onClick={edit} className={styles.edit}>
                                                                        <FaPen />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </section>
                                        ) : (
                                            // Exibe uma mensagem de carregamento
                                            <p>Loading...</p>
                                        )
                                    ) : (
                                        // Exibe uma mensagem se não houver pizzarias cadastradas
                                        <div className={styles.divText}>
                                            <p className={styles.texts}>Nenhuma pizzaria foi cadastrada.</p>
                                        </div>
                                    )
                                }
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rodapé */}
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

// Exporta o componente RegisterPizzeiras
export default RegisterPizzeiras;
