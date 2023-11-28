'use client'
import { useState } from 'react';
import styles from './resgister.module.css'

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

    return(
        <main className={styles.register}>
            <h1>REGISTER</h1>
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
                    <select name="occupation" className={styles.select}>
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
                    />
                </section>
            </article>
        </main>
    )
}

export default Register;