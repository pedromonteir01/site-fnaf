'use client'
import styles from './contact.module.css';
import HeaderMobile from '../components/headerMobile/HeaderMobile';
import SideHeader from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useState, useEffect } from 'react';

const pageContact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (isErrorVisible) {
            const timer = setTimeout(() => {
                setIsErrorVisible(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isErrorVisible]);

    const handleSubmit = event => {
        event.preventDefault();

        if (email.trim() === "" || name.trim() === "" || phone.trim() === "" || message.trim() === "") {
            setErrorMessage("! Complete todos os campos acima !");
            setIsErrorVisible(true);
        } else {
            setIsFormValid(true);
        }
    };


    return (
        <div id={styles.containerPaiID} className={styles.containerPai}>
            <div className={styles.headerMobile}>
                <HeaderMobile />
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    <div className={styles.subDiv1}>
                        <h1 className={styles.titlePage}>ENTRE EM CONTATO CONOSCO</h1>
                    </div>
                    <div className={styles.subDiv2}>
                        <div id={styles.formID} className={styles.form}>
                            <div className={styles.inputsLabels}>
                                <label className={styles.labels}>E-mail: </label>
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)} className={styles.inputs} />
                            </div>

                            <div className={styles.inputsLabels}>
                                <label className={styles.labels}>Nome: </label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className={styles.inputs} />
                            </div>

                            <div className={styles.inputsLabels}>
                                <label className={styles.labels}>Telefone: </label>
                                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className={styles.inputs} />
                            </div>

                            <div className={styles.inputsLabels}>
                                <label className={styles.labels}>Mensagem: </label>
                                <input type="text" value={message} onChange={e => setMessage(e.target.value)} className={styles.inputs} />
                            </div>

                            <div className={styles.divButton}>
                                {isFormValid ? (
                                    <a href="../page-sucess"><button>ENVIAR</button></a>
                                ) : (
                                    <button onClick={handleSubmit}>ENVIAR</button>
                                )}
                            </div>
                            {
                                isErrorVisible && <p className={styles.alert}>{errorMessage}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divFooter}>
                <Footer />
            </div>
        </div>
    )
}

export default pageContact;

