import partner1 from '@/assets/partners/1.png'
import partner2 from '@/assets/partners/2.png'
import partner3 from '@/assets/partners/3.png'
import partner4 from '@/assets/partners/4.png'
import partner5 from '@/assets/partners/5.png'

// src/components/PartnersLogos.js
import { ScrollableContainer, Logo, AnimatedLogoContainer, LogoSet } from './styles';
// Import other partner logos here

const Logos = () => (
    <>
        <Logo src={partner3} alt="Partner 1" />
        <Logo src={partner5} alt="Partner 2" />
        <Logo src={partner1} alt="Partner 3" />
        <Logo src={partner4} alt="Partner 4" />
        <Logo src={partner2} alt="Partner 5" />
    </>
);


const PartnersLogos = () => {
    return (
        <ScrollableContainer>
            <AnimatedLogoContainer>
                <LogoSet>
                    <Logos />
                </LogoSet>
                <LogoSet>
                    <Logos />
                </LogoSet>
                <LogoSet>
                    <Logos />
                </LogoSet>
            </AnimatedLogoContainer>
        </ScrollableContainer>
    );
};

export default PartnersLogos;