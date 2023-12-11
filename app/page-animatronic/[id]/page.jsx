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
const Register = ({ params }) => {

    const [animatronicsRegistered, setAnimatronicsRegisteres] = useState([]);

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
            const animatronic = response.data.animatronic;
            console.log(animatronic);
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

    return (
        <div className={styles.containerPai}>
        {/* Estrutura principal do componente */}
        <div className={styles.container}>
            <div className={styles.header}>
                {/* Cabeçalho */}
                <SideHeader/>
            </div>
            <div className={styles.body}>
                <div className={styles.subDiv1}>
                    {/* Título da página */}
                    <h1 className={styles.titlePage}>AFTON ROBOTICS</h1>
                </div>

                <main className={styles.register}>
                    {/*<article className={styles.gif}>
                        <img src="/assets/foxy-run.gif" alt="test" style={{ width: 500, height: 200 }} />
</article> */}
                    <form onSubmit={handleSubmit} className={styles.tagForm}>
                        <article className={styles.Form}>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="name">Nome animatronic:</label>
                                <input
                                    className={styles.Input}
                                    type="text"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </section>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="occupation">Pizzaria:</label>
                                <select
                                    value={occupation}
                                    onChange={(e) => setOccupation(e.target.value)}
                                    name="occupation"
                                    className={styles.Input}
                                >
                                    <option value=''>Selecione</option>
                                    <option value='test'>test</option>


                                </select>
                            </section>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="location">Localização inicial:</label>
                                <input
                                    className={styles.Input}
                                    type="text"
                                    name='location'
                                    value={initialLocation}
                                    onChange={(e) => setInitialLocation(e.target.value)}
                                />
                            </section>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="color">Cor animatronic:</label>
                                <input
                                    className={styles.Input}
                                    type="text"
                                    name='color'
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </section>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="status">Status animatronic:</label>
                                <input
                                    className={styles.Input}
                                    type="text"
                                    name='status'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                            </section>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="instrument">Instrumento animatronic:</label>
                                <input
                                    className={styles.Input}
                                    type="text"
                                    name='instrument'
                                    value={instrument}
                                    onChange={(e) => setInstrument(e.target.value)}
                                />
                            </section>
                            <section className={styles.inputField}>
                                <label className={styles.title} htmlFor="description">Descrição animatronic:</label>
                                <textarea
                                    className={styles.Input}
                                    type="text"
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </section>

                            <section className={styles.uploads}>
                                <input
                                    type="text"
                                    value={imageBody}
                                    onChange={(e) => setImageBody(e.target.value)}
                                />
                            </section>
                            <section className={styles.uploads}>
                                <input
                                    type="text"
                                    value={imageIcon}
                                    onChange={(e) => setImageIcon(e.target.value)}
                                />
                            </section>
                            <section className={styles.uploads}>
                                <input
                                    type="text"
                                    value={jumpscare}
                                    onChange={(e) => setJumpscare(e.target.value)}
                                />
                            </section>
                        </article>
                        <button type='submit'>REGISTER</button>
                    </form>
                </main>
            </div>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
    </div>
    )
}

export default Register;