import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import styles from "./card.module.css";

const Card = ({name, image, id, openDetails, exclude, edit, occupation}) => {
    return(
        <div className={styles.card} key={id} onClick={openDetails}>
            <h1>{name}</h1>
            <img className={styles.icon} src={image} alt={name}/>
            <p><strong>OCUPAÇÃO:</strong> {occupation}</p>
            <div className={styles.btns}>
            <button type="button" className={styles.details}>
            <FaAddressBook />
                </button>
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