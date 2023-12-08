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
    const [franchise, setFranchise] = useState('');

    // Efeito colateral que busca dados das pizzarias ao carregar a página
    useEffect(() => {
        const fetchPizzerias = async () => {
            try {
                let queryParams = '';
            if(franchise) {
                queryParams += `franchise=${franchise}&`
            }

            const url = `/api/pizzerias?${queryParams}`
            console.log(url)
            const response = await axios.get(url);
            setData(response.data.pizzerias)
            }catch (error) {
                console.error(error);
            }
        }

        // Executa a função de busca ao montar o componente
        fetchPizzerias();
    }, [franchise]);


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

    console.log(franchise);
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
                    <div className={styles.filter}>
                    <select className={styles.selectedFranchise} value={franchise} onChange={(e) => setFranchise(e.target.value)} >
                        <option value=''>Selecione</option>
                        <option value={'FNAF'}>FNAF</option>
                        <option value={'FNAF2'}>FNAF 2</option>
                        <option value={'FNAF3'}>FNAF 3</option>
                        <option value={'FNAF4'}>FNAF 4</option>
                        <option value={'FNAFSL'}>FNAF SL</option>
                        <option value={'FFPS'}>FFPS</option>
                        <option value={'UNC'}>UNC</option>
                    </select>
                    </div>
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
                                                        <div className={styles.containerCard}>
                                                        <div className={styles.card} key={pizzeria.id}>
                                                            <div className={styles.pizzerias}>
                                                                <h1 className={styles.titlePizzerias}>{pizzeria.name}</h1>
                                                                <div className={styles.imgPizzerias}>
                                                                <img className={styles.icon} src={pizzeria.img} alt={pizzeria.name} />
                                                                </div>
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
