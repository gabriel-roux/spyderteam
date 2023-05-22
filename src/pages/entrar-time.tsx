import { Banner, Button, NewCollection, NewCollectionContent } from "@/styles/home";
import { ArrowRight, CheckCircle } from 'phosphor-react'
import Image from "next/image";
import entrarTime from '../assets/bannerEntrarTime.png'
import BannerExampe from '@/assets/bannerExample.png'
import { Partners, PartnersContent } from "@/styles/entrar-time";

import BetLogo from '../assets/partners/bet.png'
import FtwLogo from '../assets/partners/ftw.png'
import AxLogo from '../assets/partners/ax.png'
import SlatLogo from '../assets/partners/2.png'

export default function EntrarTimePage() {

    return (

        <div>
            <Banner>
                <Image
                    src={entrarTime}
                    alt=''
                    style={{
                        objectFit: `cover`,
                        marginTop: '5rem'
                    }}
                    quality={100}
                />
                <div className="gradient" style={{ marginTop: '5rem' }}>

                    <h1>
                        SPYDER<span>TEAM</span>
                    </h1>

                    <p>
                        Você é um jogador ávido e está procurando uma oportunidade para entrar no mundo competitivo de e-sports? Ou talvez você seja um fã apaixonado que quer fazer parte da equipe Spyder Team? Não importa qual é o seu objetivo, estamos sempre à procura de jogadores talentosos e apaixonados para se juntar à nossa equipe.
                    </p>

                    <button>Saiba mais <ArrowRight size={20} /> </button>

                </div>
            </Banner>

            <NewCollection>
                <NewCollectionContent>

                    <div className="firstContent">
                        <h1>
                            Nossa missão
                        </h1>
                        <p>Nossa missão na Spyder Team é alcançar a excelência em todos os aspectos do e-sports. Acreditamos que a competição justa e o trabalho em equipe são essenciais para alcançar nossos objetivos.</p>

                        <ul>
                            <li><CheckCircle size={20} color='#DB00FF' /> Elevar o Nível E-Sports</li>
                            <li><CheckCircle size={20} color='#DB00FF' /> Proporcionar uma experiência</li>
                            <li><CheckCircle size={20} color='#DB00FF' /> Liderar pelo Exemplo</li>
                        </ul>
                    </div>

                    <div className="secondContent">
                        <div className="firstImage">
                            <Image
                                src={BannerExampe}
                                alt=''
                            />
                        </div>
                    </div>

                </NewCollectionContent>
            </NewCollection>

            <Partners>
                <PartnersContent>
                    <h1>
                        NOSSOS PATROCINADORES E PARCEIROS
                    </h1>

                    <div className="content">

                        <div className='box'>
                            <Image
                                src={BetLogo}
                                alt=''
                            />

                            <p>A Br4bet nasceu em 2021, e vem a cada dia conquistando seu espaço no mercado.Participando de Projetos Sociais voltados ao Esporte.</p>
                        </div>
                        <div className='box evenBox'>
                            <Image
                                src={SlatLogo}
                                alt=''
                            />

                            <p>A Br4bet nasceu em 2021, e vem a cada dia conquistando seu espaço no mercado.Participando de Projetos Sociais voltados ao Esporte.</p>
                        </div>
                        <div className='box evenBox'>
                            <Image
                                src={FtwLogo}
                                alt=''
                            />

                            <p>Localizada em Tarumã, interior do estado de São Paulo, a Fitoway é uma indústria no segmento de produtos naturais, nutracêuticos, suplementos alimentares e nutrição esportiva. A Sua missão é Oferecer produtos e serviços com responsabilidade, ética e qualidade proporcionando saúde e bem-estar.</p>
                        </div>
                        <div className='box'>
                            <Image
                                src={AxLogo}
                                alt=''
                            />

                            <p>
                                A AX Contabilidade foi fundada em 2012 com o objetivo de oferecer competência, agilidade, ética e segurança aos interesses de nossos clientes. Contamos com uma equipe exclusiva e dedica especializada em assessorar empresas por mais de 10 anos.
                            </p>
                        </div>

                    </div>

                    <Button>VER MAIS</Button>
                </PartnersContent>
            </Partners>

        </div>

    )

}