import { styled } from "../config/stitches.config";


export const NovidadesContainer = styled('section', {

    width: '100%',
    maxWidth: '1120px',
    margin: '8rem auto',

    '@media(max-width: 768px)': {
        margin: '12rem auto',
    }
})

export const NovidadesContent = styled('div', {

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '@media(max-width: 768px)': {
        flexDirection: 'column',
        gap: '1rem'
    },

})

export const NovidadesPosts = styled('div', {

    width: '65%',
    paddingRight: '2rem',
    borderRight: '1px solid #333',  

    '@media(max-width: 768px)': {
        width: '100%',
        borderRight: 0,
    }

})

export const Post = styled('div', {

    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',

    '.avatarImg': {
        borderRadius: '100%',
        transform: 'scale(0.8)'
    },

    '.box': {

        width: '100%',

        header: {
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',

            h2: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '1.25rem',
                fontWeight: 700,
                lineHeight: '21px',
                color: '#fff',
            },

            p: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '.875rem',
                lineHeight: '21px',
                color: '#888',
            }
        },

        img: {
            width: '100%',
            borderRadius: 8,
            height: 450,
            objectFit: 'cover', 

            '@media(max-width: 768px)': {
                height: 300,
            }
        },

        p: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#FFFFFF',
            margin: '1rem 0',
        },

        footer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            div: {
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',

                p: {
                    color: '#6E767D'
                },
                
            },

            button: {
                all: 'unset',
                cursor: 'pointer'
            }
        }


    }

})

export const UltimosPosts = styled('div', {

    width: '30%',
    borderRadius: 12,
    background: 'rgba(1, 0, 1, 0.4)',

    '@media(max-width: 768px)': {
        width: '100%',
        marginTop: '2rem'
    },

    header: {

        padding: '1.5rem 1rem',
        borderBottom: '1px solid #333',
        
        h2: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontSize: '1.25rem',
            fontWeight: 900,
            lineHeight: '21px',
            color: '#fff',
        },
    },
    
    '.box': {
        
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '1rem',
        borderBottom: '1px solid #333',

        h2: {
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
            lineHeight: '21px',
            color: '#888',
        },

        span: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontSize: '.875rem',
            lineHeight: '21px',
            color: '#ddd',
        },
        
        img: {
            width: 100,
            height: 90,
            borderRadius: 8
        },
        
        '&:last-child': {
            borderBottom: 0
        }
    }
    
})