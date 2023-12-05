'use client'
import { 
    useEffect, 
    useState 
} from 'react';
import styles from './edit.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
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
            await axios.put(`/api/animatronics/${id}`, {name, occupation, initialLocation, description, color, status, instrument, imageBody, imageIcon, jumpscare});
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
        <main className={styles.register}>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit} className={styles.tagForm}>
                <article className={styles.Form}>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="name">Name animatronic:</label>
                        <input
                            className={styles.Input}
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="occupation">Pizzeria:</label>
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
                        <label className={styles.title} htmlFor="location">Initial location:</label>
                        <input
                            className={styles.Input}
                            type="text"
                            name='location'
                            value={initialLocation}
                            onChange={(e) => setInitialLocation(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="color">Color animatronic:</label>
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
                        <label className={styles.title} htmlFor="instrument">Instrument animatronic:</label>
                        <input
                            className={styles.Input}
                            type="text"
                            name='instrument'
                            value={instrument}
                            onChange={(e) => setInstrument(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="description">Descritption animatronic:</label>
                        <textarea
                            className={styles.Input}
                            type="text"
                            name='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </section>
                </article>
                <h2>UPLOADS</h2>
                <article>
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
                <button type='submit'>REFRESH</button>
            </form>
        </main>
    )
}

export default Register;