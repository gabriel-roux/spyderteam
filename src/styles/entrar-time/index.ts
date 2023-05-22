import { styled } from "../config/stitches.config";

export const Partners = styled('section', {

    width: '100%',
    maxWidth: '1320px',
    margin: '5rem auto',

})

export const PartnersContent = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyItems: 'flex-start',
    flexDirection: 'column',

    h1: {
        fontFamily: 'Libre Franklin',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '62px',
        textAlign: 'center',
        /* identical to box height */
    
        color: '#FFFFFF',
    },

    '.content': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        margin: '2rem 0',

        '.box': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '2rem',
            background: '#27002E',
            borderRadius: '12px',
            maxWidth: '480px',
            height: '220px',

            img: {
                height: '100px',
                objectFit: 'contain'
            },

            p: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '1rem',
                lineHeight: '150.5%',
                textAlign: 'center',
                /* identical to box height */

                color: '#FFFFFF',
            },

        },
        
        '.evenBox': {
            background: '#570165'
        }
    }


})