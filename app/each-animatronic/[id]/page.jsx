'use client'
import axios from "axios";
import styles from "./nameA.module.css"
import { useEffect, useState } from "react";
import NameAnimatronic from "../../components/nameEachanimatronic/nameEachAnimatronics";
import HeaderMobile from "@/app/components/headerMobile/HeaderMobile";
import SideHeader from "@/app/components/header/Header";


export default function Home({ params }) {

    const [animatronic, setAnimatronic] = useState(null);
    const { id } = params;

    useEffect(() => {
        const fetchAnimatronic = async () => {
            try {
                const res = await axios.get(`/api/animatronics/${id}`);
                setAnimatronic(res.data);
                setData(res.data);
            } catch (erro) {
                console.log("Deu erro")
            }
        }
        fetchAnimatronic();
    }, []);

    return (
        <div className={styles.containerPai}>
            <HeaderMobile />
            <div className={styles.container}>
                <div className={styles.header}>
                    <SideHeader />
                </div>
                <div className={styles.body}>
                    {
                        animatronic ? (
                            <div className={styles.subDiv2}>
                                <div className={styles.cardAnimatronic}>
                                    <NameAnimatronic 
                                    id={animatronic.id}
                                    name={animatronic.name}
                                    imageBody={animatronic.imageBody}
                                    occupation={animatronic.occupation}
                                    initialLocation={animatronic.initialLocation}
                                    description={animatronic.description}
                                    color={animatronic.color}
                                    status={animatronic.status}
                                    instrument={animatronic.instrument}
                                    jumpscare={animatronic.jumpscare}
                                    />
                                </div>
                            </div>
                        ) : (
                            <p>ERRO!</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

