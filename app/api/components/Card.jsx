import styles from "./card.module.css";

const Card = ({name, image, id}) => {
    console.log(id);
    return(
        <div className={styles.card} key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
        </div>
    )
}

export default Card;