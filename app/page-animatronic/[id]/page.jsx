'use client'
import { 
    useEffect, 
    useState 
} from 'react';
import styles from './edit.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SideHeader from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import HeaderMobile from '@/app/components/headerMobile/HeaderMobile';
const Register = ({ params }) => {

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

    //pizzeria 
    const [pizzerias, setPizzerias] = useState([]);

    //id
    const { id } = params;

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        try {
            await axios.put(`/api/animatronics/${id}`, {name, imageBody, imageIcon, occupation, initialLocation, description, color, status, instrument, jumpscare});
            router.push('/page-animatronic')
        } catch(e) {
            console.log('error', e);
        }
    }

    useEffect(() => {
        async function fetchAnimatronics() {
          try {
            const response = await axios.get(`/api/animatronics/${id}`);
            const animatronic = response.data;
            setName(animatronic.name);
            setInitialLocation(animatronic.initialLocation);
            setDescription(animatronic.description);
            setColor(animatronic.color);
            setStatus(animatronic.status);
            setInstrument(animatronic.instrument);
            setImageBody(animatronic.imageBody);
            setImageIcon(animatronic.imageIcon);
            setJumpscare(animatronic.jumpscare);
            setOccupation(animatronic.occupation);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        if(id) {
            fetchAnimatronics();
        }

      }, [id]);

    useEffect(() => {
        const fetchPizzerias = async() => {
            try {
                const response = await axios.get(`/api/pizzerias`);
                setPizzerias(response.data.pizzerias);
            } catch(e) {
                console.log(e);
            }
        }
        fetchPizzerias();
    }, [])

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
                                    <label  className={styles.labels}>Pizzaria:</label>
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
                                    <p style={{color:'white'}}>ATENÇÃO! UTILIZAR LINKS PARA UPLOADS DOS ARQUIVOS</p>
                                </div>
                            </article>
                            <div className={styles.regis}>
                                <button className={styles.btnRegister} type='submit'>EDITAR</button>
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