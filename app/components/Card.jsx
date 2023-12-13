import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import styles from "./card.module.css";

const Card = ({name, image, id, openDetails, exclude, edit, occupation}) => {
    return(
        <div className={styles.card} key={id}>
            <h1>{name}</h1>
            <img className={styles.icon} src={image} alt={name}/>
            <p className={styles.p}><strong className={styles.b}>OCUPAÇÃO </strong> {occupation}</p>
            <div className={styles.btns}>
                <Link className={styles.details} href={openDetails}>
            <button className={styles.details} type="button">
                <FaAddressBook />
                </button>
                </Link>
                <button type="button" onClick={exclude} className={styles.delete}>
                    <MdDelete/>
                </button>
                <button type="button" onClick={edit} className={styles.edit}>
                    <FaPen/>
                </button>
            </div>
        </div>
    )
}

export default Card;