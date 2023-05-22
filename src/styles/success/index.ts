import { styled } from "../config/stitches.config";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '7rem auto',
    height: 656,

    h1: {
        fontSize: '2.5rem',
        color: '#FFF',
        fontFamily: 'Libre Franklin',
        }, 

    p: {
        color: '#ddd',
        fontSize: '2rem',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
        fontFamily: 'Libre Franklin',
    },

    a: {
        marginTop: `5rem`,
        display: 'block',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: '$purple-light',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin',
        transition: 'color .2s',

        '&:hover': {
            color: '$purple-dark'
        }
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    background: 'linear-gradient(180deg, #DB00FF, #9C37FD)',

    height: 145,
    borderRadius: 8,
    padding: '.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: `4rem`,

    img: {
        objectFit: 'cover'
    }
})