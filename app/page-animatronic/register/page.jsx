'use client'
import { useRef, useState } from 'react';
import styles from './resgister.module.css';
import axios from 'axios';

const Register = () => {
    //variaveis do cadastro
    const [name, setName] = useState('');
    const [initialLocation, setInitialLocation] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [status, setStatus] = useState('');
    const [instrument, setInstrument] = useState('');
    //Uploads
    const [imageBody, setImageBody] = useState('');
    const [imageIcon, setImageIcon] = useState('');
    const [jumpscare, setJumpscare] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {

        } catch(e) {
            await axios.post('/api/animatronics', {name, initialLocation, description, color, status, instrument});
        }
    }

    return (
        <main className={styles.register}>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <article className={styles.form}>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="name">Name animatronic:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="occupation">Pizzeria:</label>
                        <select name="occupation" className={styles.input}>
                            <option value="test">test</option>
                        </select>
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="location">Initial location:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name='location'
                            value={initialLocation}
                            onChange={(e) => setInitialLocation(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="color">Color animatronic:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name='color'
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="status">Status animatronic:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name='status'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="instrument">Instrument animatronic:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name='instrument'
                            value={instrument}
                            onChange={(e) => setInstrument(e.target.value)}
                        />
                    </section>
                    <section className={styles.inputField}>
                        <label className={styles.title} htmlFor="description">Descritption animatronic:</label>
                        <textarea
                            className={styles.input}
                            type="text"
                            name='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            maxLength={1}
                        />
                    </section>
                </article>
                <h2>UPLOADS</h2>
                <article>
                    <section className={styles.uploads}>
                        <input type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}

                            accept="image/*"
                            style={{ display: 'none' }} />


                        <button onClick={handleClick}>test</button>
                    </section>
                </article>
                <button type='submit'>REGISTER</button>
            </form>
        </main>
    )
}

export default Register;