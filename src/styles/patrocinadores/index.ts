import { styled } from "../config/stitches.config";


export const PatrocinadoresContainer = styled('section', {

    width: '100%',
    maxWidth: '1320px',
    margin: '5rem auto'

})

export const PatrocinadoresContent = styled('div', {

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',

    img: {
        objectFit: 'contain',
        maxWidth: '1320px',
    }

})