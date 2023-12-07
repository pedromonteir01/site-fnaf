'use client'
import styles from './page.module.css';
import SideHeader from './components/header/Header';
import Footer from './components/footer/Footer';

const Home = () => {

  return (
    <div className={styles.containerPai}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SideHeader />
        </div>
        <div className={styles.body}>
          <div className={styles.subDiv1}>
            <h1 className={styles.titlePage}>FIVE NIGHTS AT FREDDY'S</h1>
          </div>
          <div className={styles.subDiv2}>
            <div className={styles.subDivStorie}>
              <h2 className={styles.titleStorie}>História do jogo</h2>
              <p className={styles.textStorie}>
                "Five Nights at Freddy's" (Fnaf) é uma série de jogos de terror criada por Scott Cawthon. O primeiro jogo foi lançado em 2014 e desde então a franquia cresceu com várias sequências e spin-offs. A história gira em torno de um guarda noturno que trabalha em uma pizzaria chamada Freddy Fazbear's Pizza, que possui animatrônicos animados durante o dia.

                A trama se desenrola com a descoberta de eventos perturbadores, onde os animatrônicos, liderados por personagens como Freddy Fazbear, Bonnie, Chica e Foxy, tornam-se hostis durante a noite, ameaçando a segurança do guarda noturno. Conforme a série avança, são reveladas narrativas mais complexas e sombrias, envolvendo eventos passados na pizzaria, assassinatos, experimentos com almas humanas e até mesmo viagens temporais.

                A jogabilidade se concentra em estratégia e sobrevivência, com o jogador monitorando câmeras de segurança e tentando evitar ser atacado pelos animatrônicos. Cada jogo adiciona camadas à história, explorando o passado da pizzaria, as origens dos animatrônicos e os mistérios por trás dos eventos sobrenaturais.

                Ao longo dos anos, Fnaf ganhou uma grande base de fãs e se tornou conhecido não apenas pelos elementos de horror, mas também por sua trama intrigante e cheia de reviravoltas. A série inclui vários jogos, livros e até mesmo teorias elaboradas pelos fãs para desvendar todos os segredos do universo Fnaf.</p>
            </div>
            <div className={styles.bannerStorie}>
              <img src="/banners/bannerHome.png" alt="banner FNAF" width={1000} height={500}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Home;