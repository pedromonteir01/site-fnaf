// Importação de bibliotecas e componentes necessários
'use client';
import { useState, useEffect } from 'react';
import styles from "./pizzerias.module.css";
import axios from 'axios';
import Link from 'next/link';
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
                                                        <div key={pizzeria.id} className={styles.card}>
                                                            <div className={styles.imgDiv}>
                                                                <img src={pizzeria.image} />
                                                            </div>
                                                            <div className={styles.infos}>
                                                                <p>{pizzeria.name}</p>
                                                                <p>{pizzeria.id}</p>
                                                                <p>{pizzeria.franchise}</p>
                                                                <p>{pizzeria.description}</p>
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
