'use client'
import {
    useEffect,
    useState
} from 'react';
import styles from './resgister.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SideHeader from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import { MdOutlineDirectionsTransitFilled } from 'react-icons/md';
<<<<<<< HEAD
import HeaderMobile from '@/app/components/headerMobile/HeaderMobile';
=======
import Popup from '@/app/components/popUp/PopUp';
>>>>>>> 9d2662f42a06c2c1b6720d742ff00fdcf5a69d14

const Register = () => {

    const [animatronicsRegistered, setAnimatronicsRegisteres] = useState([]);
    const [pizzerias, setPizzerias] = useState([]);

    //variaveis do cadastro
    const [name, setName] = useState('');
    const [initialLocation, setInitialLocation] = useState('');
    const [description, setDescription] = useState('');
    const [occupation, setOccupation] = useState('');
    const [color, setColor] = useState('');
    const [status, setStatus] = useState('');
    const [instrument, setInstrument] = useState('');
    //Uploads
    const [imageBody, setImageBody] = useState('');
    const [imageIcon, setImageIcon] = useState('');
    const [jumpscare, setJumpscare] = useState('');
    //PopUp
    const [showPopup, setShowPopup] = useState(false);
    const [popupIcon1, setPopupIcon1] = useState(null);
    const [popupIcon2, setPopupIcon2] = useState(null);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    const router = useRouter();

    //função do PopUp
    const handleShowPopup = (icon1, message, icon2, type, time) => {
        setPopupMessage(message)
        setPopupIcon1(icon1)
        setPopupIcon2(icon2)
        setPopupType(type)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, time)
    }

    // IMPORTANTE PARA PEDRO:
    // como colocar na verificação EXEMPLO: handleShowPopup(<AiFillWarning />, 'Preencha todos os campos', <AiFillWarning />, 'error', 3000);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/animatronics', { name, occupation, initialLocation, description, color, status, instrument, imageBody, imageIcon, jumpscare });
            setName('');
            setInitialLocation('');
            setDescription('');
            setColor('');
            setStatus('');
            setInstrument('');
            setImageBody('');
            setImageIcon('');
            setJumpscare('');
            setOccupation('test');
            router.push('/page-animatronic/')
        } catch (e) {
            console.log('error', e.response.data);
        }
    }

    useEffect(() => {
        async function fetchAnimatronics() {
            try {
                const response = await axios.get("/api/animatronics");
                setAnimatronicsRegisteres(response.data);
            } catch (error) {
                console.error("Error fetching data:", error.response.data.errors);
            }
        }

        fetchAnimatronics();
    }, []);

    useEffect(() => {
        async function fetchPizzerias() {
            try {
                const response = await axios.get("/api/pizzerias");
                setPizzerias(response.data.pizzerias);
            } catch (e) {
                console.log('Error fetching data pizzerias:', e);
            }
        }

        fetchPizzerias();
    }, []);

    return (
        <div className={styles.containerPai}>
            {/* Estrutura principal do componente */}
            <HeaderMobile/>
            <div className={styles.container}>
                <div className={styles.header}>
                    {/* Cabeçalho */}
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        {/* Título da página */}
                        <h1 className={styles.titlePage}>AFTON ROBOTICS</h1>
                        <main className={styles.register}>
                            {/*<article className={styles.gif}>
                            <img src="/assets/foxy-run.gif" alt="test" style={{ width: 500, height: 200 }} />
    </article> */}
                            <form onSubmit={handleSubmit} className={styles.tagForm}>
                                <article className={styles.Form}>
                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Nome animatronic:</label>
                                        <input
                                            className={styles.Input}
                                            type="text"
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </section>
                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Pizzaria:</label>
                                        <select
                                            value={occupation}
                                            onChange={(e) => setOccupation(e.target.value)}
                                            name="occupation"
                                            className={styles.Input}
                                        >
                                            <option value=''>Selecione...</option>
                                            {
                                                pizzerias.map((pizzeria) => (
                                                    <option key={pizzeria.id} value={pizzeria.name}>{pizzeria.name}</option>
                                                ))
                                            }
                                        </select>
                                    </section>
                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Localização inicial:</label>
                                        <input
                                            className={styles.Input}
                                            type="text"
                                            name='location'
                                            value={initialLocation}
                                            onChange={(e) => setInitialLocation(e.target.value)}
                                        />
                                    </section>
                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Cor animatronic:</label>
                                        <input
                                            className={styles.Input}
                                            type="text"
                                            name='color'
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                        />
                                    </section>

                                    <div id={styles.warnings} className={styles.hidden}>
                                        <div id={styles.errorMensage}>
                                            {showPopup ? scrollToTop()(
                                                <Popup
                                                    icon1={popupIcon1}
                                                    message={popupMessage}
                                                    icon2={popupIcon2}
                                                    type={popupType}
                                                />
                                            ) : (
                                                null
                                            )}
                                        </div>
                                    </div>

                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Status animatronic:</label>
                                        <input
                                            className={styles.Input}
                                            type="text"
                                            name='status'
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        />
                                    </section>
                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Instrumento animatronic:</label>
                                        <input
                                            className={styles.Input}
                                            type="text"
                                            name='instrument'
                                            value={instrument}
                                            onChange={(e) => setInstrument(e.target.value)}
                                        />
                                    </section>
                                    <section className={styles.inputField}>
                                        <label className={styles.labels}>Descrição animatronic:</label>
                                        <textarea
                                            className={styles.Input}
                                            type="text"
                                            name='description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </section>

                                    <section className={styles.uploads}>
                                        <label className={styles.labels}>Imagem do animatrônico:</label>
                                        <input
                                            type="text"
                                            value={imageBody}
                                            onChange={(e) => setImageBody(e.target.value)}
                                            className={styles.fieldUp}
                                        />
                                    </section>
                                    <section className={styles.uploads}>
                                        <label className={styles.labels}>Imagem do ícone:</label>
                                        <input
                                            type="text"
                                            value={imageIcon}
                                            onChange={(e) => setImageIcon(e.target.value)}
                                            className={styles.fieldUp}
                                        />
                                    </section>
                                    <section className={styles.uploads}>
                                        <label className={styles.labels}>Vídeo do jumpscare:</label>
                                        <input
                                            type="text"
                                            value={jumpscare}
                                            onChange={(e) => setJumpscare(e.target.value)}
                                            className={styles.fieldUp}
                                        />
                                    </section>
                                    <div className={styles.alert}>
                                        <p style={{ color: 'white' }}>ATENÇÃO! UTILIZAR LINKS PARA UPLOADS DOS ARQUIVOS</p>
                                    </div>
                                </article>
                                <div className={styles.regis}>
                                    <button className={styles.btnRegister} type='submit'>CRIAR</button>
                                </div>
                            </form>
                        </main>
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