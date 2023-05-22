import LogoSrc from '@/assets/logo.png'
import { PaperPlaneTilt, InstagramLogo, TwitchLogo, TwitterLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import { CopyrightDiv, FooterContainer, FooterLink, LeftSection, Logo, RightLinksSection, RightSection, StyledFooter } from './styles'


export function Footer() {

    return (
        <FooterContainer>
            <StyledFooter>
                <LeftSection>
                    <Logo src={LogoSrc} alt="Company Logo" />
                </LeftSection>
                <RightSection>
                    <FooterLink type='email' placeholder='Digite seu endereço de email' />
                    <button className='sendButton'>
                        <PaperPlaneTilt size={20} weight='fill' />
                    </button>
                </RightSection>
            </StyledFooter>

            <StyledFooter
                css={{
                    border: 0
                }}
            >
                <LeftSection
                    css={{
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <h2>
                        Receba atualizações<br /> sobre seus jogos favoritos
                    </h2>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginTop: '1rem'
                        }}
                    >
                        <Link
                            href='/'
                        >
                            <TwitchLogo size={24} />
                        </Link>
                        <Link
                            href='/'
                        >
                            <TwitterLogo size={24} />
                        </Link>
                        <Link
                            href='/'
                        >
                            <InstagramLogo size={24} />
                        </Link>
                    </div>
                </LeftSection>

                <RightLinksSection>
                    <div>
                        <h3>NAVEGUE:</h3>

                        <p>
                            <Link href='#'>LOJA</Link>
                            <Link href='#'>Inicio</Link>
                            <Link href='#'>Nosso time</Link>
                            <Link href='#'>Novidades</Link>
                        </p>
                    </div>

                    <div>
                        <h3>SOBRE:</h3>

                        <p>
                            <Link href='#'>Sobre nós</Link>
                            <Link href='#'>Seja um Membro</Link>
                            <Link href='#'>Patrocinadores</Link>
                        </p>
                    </div>
                </RightLinksSection>
            </StyledFooter>

            <CopyrightDiv>
                Copyright © 2023 - Flock Agency
            </CopyrightDiv>
        </FooterContainer>
    )

}