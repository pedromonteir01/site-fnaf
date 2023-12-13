'use client'
import styles from './page.module.css';
import SideHeader from './components/header/Header';
import Footer from './components/footer/Footer';
import HeaderMobile from './components/headerMobile/HeaderMobile';

const Home = () => {

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
            <h1 className={styles.titlePage}>FIVE NIGHTS AT FREDDY'S</h1>
          </div>
          <div className={styles.subDiv2}>
            <div className={styles.subDivStorie}>
              <h2 className={styles.titleStorie}>SOBRE O JOGO</h2>
              <p className={styles.textStorie}>
                "Five Nights at Freddy's" (Fnaf) é uma série de jogos de terror criada por Scott Cawthon. O primeiro jogo foi lançado em 2014 e desde então a franquia cresceu com várias sequências e spin-offs. A história gira em torno de um guarda noturno que trabalha em uma pizzaria chamada Freddy Fazbear's Pizza, que possui animatrônicos animados durante o dia.

                A trama se desenrola com a descoberta de eventos perturbadores, onde os animatrônicos, liderados por personagens como Freddy Fazbear, Bonnie, Chica e Foxy, tornam-se hostis durante a noite, ameaçando a segurança do guarda noturno. Conforme a série avança, são reveladas narrativas mais complexas e sombrias, envolvendo eventos passados na pizzaria, assassinatos, experimentos com almas humanas e até mesmo viagens temporais.

                A jogabilidade se concentra em estratégia e sobrevivência, com o jogador monitorando câmeras de segurança e tentando evitar ser atacado pelos animatrônicos. Cada jogo adiciona camadas à história, explorando o passado da pizzaria, as origens dos animatrônicos e os mistérios por trás dos eventos sobrenaturais.

                Ao longo dos anos, Fnaf ganhou uma grande base de fãs e se tornou conhecido não apenas pelos elementos de horror, mas também por sua trama intrigante e cheia de reviravoltas. A série inclui vários jogos, livros e até mesmo teorias elaboradas pelos fãs para desvendar todos os segredos do universo Fnaf.</p>
            </div>
            <div className={styles.bannerStorie}>
              <div className={styles.banner}>
                <img className={styles.imgBanner} src="/banners/bannerHome.png" alt="banner FNAF" />
              </div>
            </div>

            <div className={styles.subDivStorie}>
              <h2 className={styles.titleStorie}>COMO SURGIU O PRIMEIRO RESTAURANTE</h2>
              <p className={styles.textStorie}>
                Os amigos William Afton e Henry tinham o mesmo objetivo: um restaurante temático para crianças.

                A partir disso, se juntaram para criar a famosa Fazbear Entertainment, tendo como seu primeiro

                restaurante o FredBear Family Diner.

                William, por ser um homem de negócios, tinha como objetivo principal o lucro,

                então ficou responsável pela parte financeira e burocrática da empresa.

                Henry, por sua vez, era um homem intelectual, que ficou com a parte

                mecânica e robótica.

                O restaurante foi um sucesso, mas os amigos queriam algo mais, algo que pudesse

                atrair mais crianças e servir como um diferencial para a empresa.

                Então, ele criou os primeiros animatrônicos: FredBear e SpringBonnie.

                Até então, os animatrônicos não eram nada além de robôs que se moviam e interagiam com as crianças,

                sendo controlados por pessoas dentro deles.
              </p>
            </div>

            <h1 className={styles.titleStorie}>A HISTÓRIA POR TRÁS</h1>

            <div className={styles.stories}>
              <div className={styles.storie}>
                <p className={styles.textStorie}>
                  Sammy e Michael eram filhos de William Afton. O filho mais novo, Sammy, apesar de gostar

                  muito dos animatrônicos, tinha medo dos robôs. Michael, o mais velho, sabendo disso,

                  decidiu fazer uma brincadeira com o irmão na sua festa de aniversário.

                  Ele agarrou Sammy e o levou até a boca de FredBear. O que ele não esperava,

                  era que o robô iria fechar a boca, prensando a cabeça do garoto e

                  resultando na sua morte imediata.

                  William, ao saber da morte do filho, ficou transtornado e decidiu se vingar de Henry,

                  o criador dos animatrônicos e o único capaz de desligá-los, o que poderia ter evitado

                  a morte de Sammy, mas não estava presente no momento do acidente. Ele sequestrou a filha de Henry,

                  Charlotte, e a matou, escondendo seu corpo dentro de um dos animatrônicos.
                </p>
              </div>

              <div className={styles.storie}>
                <p className={styles.textStorie}>
                  A partir disso, uma série de assassinatos passou a assombrar a cidade. Após a trágica morte de Sammy por um acidente com um animatrônico, seu pai, William Afton, consumido pela dor, decide vingar-se dos criadores dos robôs. Ele sequestra e mata a filha de Henry, Charlotte, escondendo seu corpo dentro de um animatrônico. William, agora conhecido como "Purple Guy", inicia uma série de assassinatos, culpando os envolvidos na criação dos animatrônicos. A cidade vive anos de pavor, enquanto o irmão mais velho, Michael, busca redenção. No entanto, uma força sobrenatural começa a se manifestar, e a batalha entre a luz e a escuridão se desenrola.
                </p>
              </div>
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