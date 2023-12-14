'use client'
import styles from './contact.module.css'
import HeaderMobile from '../components/headerMobile/HeaderMobile'
import SideHeader from '../components/header/Header'
import Footer from '../components/footer/Footer'

const pageContact = () => {
    return (
    <div className={styles.containerPai}>
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
                    <div className={styles.form}>
                        <div className={styles.inputsLabels}>
                        <label className={styles.labels}>E-mail: </label>
                        <input type="text" className={styles.inputs} />
                        </div>

                        <div className={styles.inputsLabels}>
                        <label className={styles.labels}>Nome: </label>
                        <input type="text" className={styles.inputs}  />
                        </div>

                        <div className={styles.inputsLabels}>
                        <label className={styles.labels}>Telefone: </label>
                        <input type="text" className={styles.inputs}  />
                        </div>

                        <div className={styles.inputsLabels}>
                        <label className={styles.labels}>Mensagem: </label>
                        <input type="text" className={styles.inputs}  />
                        </div>

                        <div className={styles.divButton}>
                            <a href="../page-sucess"><button>ENVIAR</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.divFooter}>
        <Footer/>
        </div>
    </div>
    )
}

export default pageContact;

