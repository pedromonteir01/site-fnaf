"use client"
// Importação de bibliotecas e componentes necessários
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./registerP.module.css";
import SideHeader from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Link from "next/link";

// Definição do componente funcional chamado Home
const Home = () => {
    // Estados para gerenciar os dados do formulário e da aplicação
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [franchise, setFranchise] = useState("");
    const [description, setDescription] = useState("");
    const [animatronics, setAnimatronics] = useState("");
    const [pizzerias, setPizzerias] = useState([]);

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envia uma solicitação POST para armazenar dados da pizzaria no servidor
            const response = await axios.post("/api/pizzerias", { name, franchise, animatronics, description, img });
            // Limpa os campos do formulário e atualiza o estado com os dados recebidos
            setName("");
            setFranchise("");
            setDescription("");
            setAnimatronics("");
            setPizzerias(response.data.pizzerias);
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    };

    // Efeito colateral que busca dados das pizzarias ao carregar a página
    useEffect(() => {
        async function fetchPizzerias() {
            try {
                const response = await axios.get("/api/pizzerias");
                setPizzerias(response.data.pizzerias);
            } catch (error) {
                console.error("Erro ao obter dados:", error);
            }
        }

        fetchPizzerias();
    }, [pizzerias]);

    // Renderização do componente com a estrutura do formulário e outros elementos
    return (
        // Estrutura principal do componente
        <div className={styles.mainContainer}>
            {/* Cabeçalho */}
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                {/* Corpo do componente */}
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        {/* Título da página */}
                        <h1 className={styles.titlePage}>Registre sua pizzaria</h1>
                    </div>
                    {/* Formulário de registro de pizzaria */}
                    <div className={styles.subDiv2}>
                        <form onSubmit={handleSubmit}>
                            {/* Campos do formulário */}
                            {/* ... (cada campo tem um rótulo e uma caixa de entrada) */}

                            {/* Botão de envio e link para outra página */}
                            <Link href={"./../page-pizzerias"}>
                                <div className={styles.divButtons}>
                                    <button className={styles.buttons} type="submit">
                                        Cadastrar
                                    </button>
                                </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            {/* Rodapé */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

// Exporta o componente Home
export default Home;
