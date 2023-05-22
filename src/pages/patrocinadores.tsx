import { Banner } from "@/styles/home";
import { PatrocinadoresContainer, PatrocinadoresContent } from "@/styles/patrocinadores";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import BannerImg from '../assets/patrocinadores.png'
import Descricoes from '../assets/partnersDesc.png'

export default function Patrocinadores() {

    return (

        <div>

            <Banner>

                <Image
                    src={BannerImg}
                    alt=''
                    quality={100}
                    style={{
                        objectFit: 'cover'
                    }}
                />

                <div
                    className="gradient"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0'
                    }}
                >

                    <h1
                        style={{
                            maxWidth: `17ch`,
                            textAlign: 'center',
                            border: 0,
                        }}
                    >
                        NÃO CHEGAMOS ATÉ AQUI SOZINHO
                    </h1>

                    <p
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        Unidos pelos e-sports: saiba mais sobre os patrocinadores da SPYDERESPORTSTEAM
                    </p>

                    <button>Saiba mais <ArrowRight size={20} /> </button>

                </div>

            </Banner>

            <PatrocinadoresContainer>
                <PatrocinadoresContent>
                    <Image
                        src={Descricoes}
                        alt=''
                        quality={100}
                    />
                </PatrocinadoresContent>
            </PatrocinadoresContainer>
        </div>

    )

}