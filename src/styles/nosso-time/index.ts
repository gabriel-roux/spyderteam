import { styled } from "../config/stitches.config";

export const Games  = styled('section', {

    maxWidth: '1120px',
    width: '100%',
    margin: '4rem auto'

})

export const GamesContainer = styled('div', {

    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',

    '@media(max-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
    },

    '.box': {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        
        '.gradient': {
            borderRadius: '12px',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: 'linear-gradient(#00000000, #000)'
        },

        '.informations': {
            position: 'absolute',
            bottom: 0,
            padding: '1rem',
            zIndes: 100,

            h1: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: '21px',
                color: '#fff',
            },

            p: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '.875rem',
                fontWeight: 400,
                lineHeight: '21px',
                color: '#fff',
            }
        }
    }

})

export const OurTeam = styled('section', {

    width: '100%',
    maxWidth: '1120px',
    margin: '4rem auto'

})

export const OurTeamContent = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyItems: 'flex-start',
    flexDirection: 'column',

    h1: {
        fontFamily: 'Libre Franklin',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '72px',
        lineHeight: '108px',
        /* identical to box height */
    
        '@media(max-width: 768px)': {
            fontSize: '3rem',
            lineHeight: '3rem',
            textAlign: 'center'
        },

        color: '#FFFFFF',
    },

    '.content': {

        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        '@media(max-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            padding: '0 1rem',
            gap: '1rem'
        },
        gap: '1.5rem',

        '.box': {
            img: {
                width: '250px',
                height: '300px',
                borderRadius: '12px',
                '@media(max-width: 768px)': {
                    width: '180px',
                    height: '220px',
                }
            },

            h2: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '1.25rem',
                /* identical to box height */

                color: '#DB00FF',
            },

            p: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '1rem',
                /* identical to box height */

                color: '#FFF',
            }
        }

    }

})