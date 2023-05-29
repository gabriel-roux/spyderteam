import { styled } from "../config/stitches.config";

export const ContaContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '1120px',
    margin: '10rem auto',

    '@media(max-width: 768px)': {
      flexDirection: 'column',
      gap: '2rem',
      margin: '12rem auto',
    }
  });
  
  export const ContaSidebar = styled('div', {
    width: '25rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  
    '.image': {
      width: '64px',
      height: '64px',
      borderRadius: '100%',
      backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
      'h1': {
        fontFamily: 'Libre Franklin',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#fff',
      },
    },
  
    'button': {
      width: '100%',
      padding: '0.5rem 1.5rem',
      backgroundColor: 'transparent',
      border: '0',
      fontFamily: 'Libre Franklin',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontWeight: 'bold',
      color: '#FFF',
      cursor: 'pointer',
      borderLeft: '4px solid transparent',
      transition: 'all 300ms ease',
    },
  
    '.active': {
      borderLeft: '4px solid #FA0AFF',
    },
  });
  
  export const ContaInformacoes = styled('form', {
    width: '100%',
    flex: 1,
    borderRadius: '8px',
    border: '2px dashed $gray400',
  
    '.column': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '1rem 0',
      gap: '2rem',
    },
  
    'label': {
      width: '100%',
      color: '#FFF', 
      fontFamily: 'Libre Franklin',

      'a': {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        color: '#0f3e99',
        justifyContent: 'flex-start',
      },
    },
  
    'input': {
      width: '96%',
      height: '2.5rem',
      backgroundColor: '#1A1A1A40',
      border: '1px solid #8A8A8A40',
      borderRadius: '6px',
      color: '#FFF',
      outline: '0',
      paddingLeft: '.7rem',
      fontSize: '1rem',
      transition: 'all 300ms ease',
      marginTop: '.5rem',
  
      '&:focus': {
        boxShadow: '0px 0px 0px 2px #FA0AFF',
      },
    },
  
    'button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '3rem',
      backgroundColor: '#FA0AFF',
      borderRadius: 8,
      cursor: 'pointer',
      border: '0',
      color: '#fff',
      marginTop: '2rem',
      fontFamily: 'Libre Franklin',
      fontWeight: 'bold',
      fontSize: '1rem',
      transition: 'all 300ms ease',
  
      '&:hover': {
        backgroundColor: '#0f3e99',
      },
    },
  });
  
  export const ContaTopColumn = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  
    'button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32.5%',
      height: '2.3rem',
      backgroundColor: '$yellow900',
      border: '0',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '.875rem',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 300ms ease',
  
      '&:hover': {
        opacity: '0.7',
      },
    },
  });


  export const OrderContainer = styled('div', {
    backgroundColor: '#451046',
    borderRadius: '10px',
    margin: '$s',
    padding: '$s',

    '@media(max-width: 768px)': {
      padding: '$s',
      maxWidth: '100vw',
      margin: '1rem 0',
    }
  });
  
  export const OrderTitle = styled('h2', {
    color: 'white',
    fontSize: '$xl',
    fontFamily: 'Libre Franklin',
    margin: '$s 0',
  });
  
  export const ProductList = styled('ul', {
    listStyleType: 'none',
    padding: 0,
  });
  
  export const ProductItem = styled('li', {
    backgroundColor: '$black-purple',
    borderRadius: '5px',
    display: 'flex',
    fontFamily: 'Libre Franklin',
    color: 'white',
    alignItems: 'center',
    margin: '$s 0',
    padding: '$s',
  });
  
  export const ProductImage = styled('img', {
    borderRadius: '5px',
    marginRight: '$s',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  });
  
  export const StatusTag = styled('span', {
    backgroundColor: '$black-purple',
    borderRadius: '5px',
    color: 'white',
    display: 'inline-block',
    fontSize: '$s',
    fontFamily: 'Libre Franklin',
    fontWeight: 'bold',
    padding: '6px 6px',
    textTransform: 'uppercase',

    variants: {
      status: {
        pending: {
          backgroundColor: '#F57F17',
          color: 'black',
        },
        succeded: {
          backgroundColor: '#33691E',
          color: 'white',
        },
        paid: {
          backgroundColor: '#33691E',
          color: 'white',
        },
        'in-delivery': {
          //blue hex
          backgroundColor: '#42A5F5',
          color: 'white',
        },
        delivered: {
          backgroundColor: '#1B5E20',
          color: 'white',
        },
        canceled: {
          backgroundColor: '#B71C1C',
          color: 'white',
        },
      },
    },
  });

  export const Info = styled('p', {
    fontFamily: 'Libre Franklin',
    color: '#ccc',

    b: {
      color: 'white',
    }
  });