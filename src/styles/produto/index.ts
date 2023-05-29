import { styled } from "@stitches/react"

export const ProductContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    maxWidth: 1120,
    margin: '10rem auto',
    
    '@media(max-width: 768px)': {
        gridTemplateColumns: 'unset',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '12rem auto',
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 'calc(656px - .5rem)',
    background: 'linear-gradient(180deg, #DB00FF, #9C37FD)',
    borderRadius: 8,
    padding: '.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@media(max-width: 768px)': {
        maxWidth: '100vw',
    },
    
    img: {
        objectFit: 'cover',
        
        '@media(max-width: 768px)': {
            maxWidth: '100vw',
        },
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '2rem',
        color: '#FFF',
        fontFamily: 'Libre Franklin',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '2rem',
        color: '#9C37FD',
        fontFamily: 'Libre Franklin',
    },

    p: {
        marginTop: '1.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '#FFF',
        fontFamily: 'Libre Franklin',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '#9C37FD',
        border: 0,
        padding: '1.25rem',
        borderRadius: 8,
        fontWeight: 'bold',
        fontSize: '$md',
        cursor: 'pointer',
        color: '#FFF',
        fontFamily: 'Libre Franklin',

        '&:disabled': {
            opacity: .6,
            cursor: 'not-allowed'
        },

        '&:not(:disabled):hover': {
            background: '#DB00FF'
        },
    }
})