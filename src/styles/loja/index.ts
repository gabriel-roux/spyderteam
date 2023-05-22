import { styled } from "../config/stitches.config"

export const ProductsContainer = styled('section', {

    width: '100%',
    maxWidth: '1320px',
    margin: '5rem auto',

    h2: {
        fontFamily: 'Libre Franklin',
        fontWeight: 900,
        fontSize: '2rem',
        color: '#FFF',
        marginBottom: '2rem',
    }
})

export const ProductsContent = styled('div', {

    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',

})

export const Products = styled('div', {

    padding: '1rem',
    background: '#270D27',
    borderRadius: 12,

    
    div: {
        width: '100%',
        background: '#19031D',
        borderRadius: 8,
        marginBottom: '1rem',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        img: {
            objectFit: 'cover'
        },
    },

    footer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        strong: {
            fontFamily: 'Libre Franklin',
            fontSize: '1.25rem',
            color: '#FFF'
        },
    
        p: {
            fontFamily: 'Libre Franklin',
            background: 'linear-gradient(97.86deg, #DB00FF -38.38%, #8000FF 71.88%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontSize: '1.25rem',
            lineHeight: '32px',
        }
    },

    button: {
        all: 'unset',
        width: '100%',
        height: 50,
        marginTop: '1rem',
        background: 'linear-gradient(90deg, #DB00FF, #9C37FD)',
        borderRadius: 8,
        fontFamily: 'Libre Franklin',
        fontSize: '1.25rem',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }



})

export const LancamentosContainer = styled('section', {

    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1320px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
    marginTop: '12rem',
    marginBottom: '5rem',
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #DB00FF, #9C37FD)',
    borderRadius: 8,
    padding: '.25rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    img: {
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        bottom: '.25rem',
        right: '.25rem',
        left: '.25rem',
        padding: '2rem',
        opacity: 0,
        

        borderRadius: 8,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#00000035',

        transform: 'translateY(110%)',
        transition: 'all 200ms ease',

        strong: {
            fontFamily: 'Libre Franklin',
            fontSize: '1.25rem',
            color: '#FFF'
        },

        span: {
            fontFamily: 'Libre Franklin',
            fontWeight: 'bold',
            color: '#d3d3d3',
            fontSize: '1.5rem'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})