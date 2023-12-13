'use client'
import {
    useEffect,
    useState
} from 'react';
import styles from './editP.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SideHeader from '@/app/components/header/Header';
import HeaderMobile from '@/app/components/headerMobile/HeaderMobile';
import Footer from '@/app/components/footer/Footer';

const Register = ({ params }) => {

    //variaveis do cadastro
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [franchise, setFranchise] = useState('');
    const [animatronics, setAnimatronics] = useState('');
    const [description, setDescription] = useState('');

    const { id } = params;

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/pizzerias/${id}`, { name, img, franchise, animatronics, description });
            router.push('/page-pizzerias')
        } catch (e) {
            console.log('error', e);
        }
    }

    useEffect(() => {
        async function fetchPizzerias() {
            try {
                const response = await axios.get(`/api/pizzerias/${id}`);
                const pizzeria = response.data;
                setName(pizzeria.name);
                setImg(pizzeria.img)
                setFranchise(pizzeria.franchise)
                setAnimatronics(pizzeria.animatronics);
                setDescription(pizzeria.description);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        if (id) {
            fetchPizzerias();
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
                        <h1 className={styles.title}>Editar Pizzarias</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <div className={styles.subDivStudents}>

                            <form onSubmit={handleSubmit}>
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
                                    <label className={styles.label1} htmlFor="franchise">
                                        Franquia:
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        id="franchise"
                                        value={franchise}
                                        onChange={(e) => setFranchise(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.containerInputs}>
                                    <label className={styles.label1} htmlFor="animatronics">
                                        Animatronics:
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        id="animatronics"
                                        value={animatronics}
                                        onChange={(e) => setAnimatronics(e.target.value)}
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