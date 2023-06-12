import { styled } from "@/styles/config/stitches.config";

export const HeaderComponent = styled('header', {

    width: '100vw',
    background: '#270D27',
    padding: '1.5rem 0',
    position: 'fixed',
    top: 0,
    zIndex: 10

})

export const HeaderContainer = styled('div', {

    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto',
})

export const HeaderContent = styled('div', {

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',

    '@media(max-width: 768px)': {
        flexDirection: 'column',
        gap: '1rem'
    },

    '.firstContent': {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',

        img: {
            objectFit: 'contain',

            '@media(max-width: 768px)': {
              width: 270,
              height: 50,
            }
        },

        a: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontWeight: 100,
            fontSize: '1.25rem',
            lineHeight: '140.19%',
            color: '#C5B0C8',
            textDecoration: 'none',
            transition: 'all 300ms ease',

            '&:hover': {
                color: '#fff'
            }
        }
    },

    '.secondContent': {
        display: 'flex',
        alignItems: 'center',
        '@media(max-width: 768px)': {
            flexDirection: 'column',
            gap: '1rem'
        },
        gap: '1rem',

        '.linksContent': {
            display: 'flex',
            alignItem: 'center',
            gap: '1rem', 

            a: {
                '@media(max-width: 768px)': {
                    display: 'none'
                },
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '1rem',
                lineHeight: '141.69%',
                color: '#CDA7D3',
                textDecoration: 'none',
                transition: 'all 300ms ease',

                '&:hover': {
                    color: '#fff'
                }
            }
        },

        '.otherOptions': {
            display: 'flex',
            alignItem: 'center',
            gap: '1rem',

            button: {
                all: 'unset',
                cursor: 'pointer',
                color: '#CDA7D3',
                transition: 'all 300ms ease',

                '&:hover': {
                    color: '#fff'
                }
            },

            '.desactive': {
                '@media(min-width: 768px)': {
                    display: 'none'
                },
              }
        }
    }

})

export const StyledButton = styled('button', {
    backgroundColor: '$purple-base',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Libre Franklin',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '$purple-light',
    },
  });
  
export const StyledPopup = styled('div', {
    position: 'absolute',
    top: 50,
    left: '-175px',
    backgroundColor: 'rgb(44, 19, 49)',
    borderRadius: '5px',
    padding: '$l',
    width: 350,
    maxWidth: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
    color: 'white',

    '@media(max-width: 768px)': {
      width: 290,
      left: '-145px',
    },

    h2: {
      marginBottom: '1rem',
      fontFamily: 'Libre Franklin',
    }
  });
  
export const StyledCartItem = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid $purple-dark',
    paddingBottom: '$s',
    marginBottom: '$s',
    gap: '$s',
  });
  
export const StyledProductImage = styled('img', {
    width: 90,
    height: 90,
    objectFit: 'cover',
    borderRadius: '5px',
  });
  
export const StyledProductInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    'p, h3': {
      fontFamily: 'Libre Franklin',
    }
  });
  
export const StyledQuantity = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
  
    '& button': {
      backgroundColor: 'transparent',
      border: '1px solid $purple-dark',
      borderRadius: '50%',
      color: '$purple-dark',
      fontSize: '$m',
      padding: '2px 8px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      '&:hover': {
        backgroundColor: '#2D0C2E',
        borderColor: 'transparent',
      },
    },
  });
  
export const StyledTotal = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '$xl',
    fontWeight: 'bold',
    fontFamily: 'Libre Franklin',
  });
  
export const StyledCheckoutButton = styled('button', {
    backgroundColor: '$purple-base',
    color: 'white',
    padding: '$s $m',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '$m',
    fontWeight: 'bold',
    fontFamily: 'Libre Franklin',
    width: '100%',
    marginTop: '$m',
    '&:hover': {
      backgroundColor: '$purple-light',
    },
  });

  export const StyledCouponInputWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '$m',
  });
  
  export const StyledCouponInput = styled('input', {
    backgroundColor: 'transparent',
  borderRadius: '5px',
  padding: '$s',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: 'white',
  width: '100%',
  fontFamily: 'Libre Franklin',
  fontSize: '$m',
  outline: 0,
    transition: 'all 300ms ease',

  '&::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  '&:focus': {
    outline: 0,
    borderColor: '$purple-base',
  },
  });


  export const HeaderMenu = styled('div', {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '$black-purple',
    zIndex: 100,

    '.menuContent': {
      padding: '1rem',

      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',

        p: {
          fontFamily: 'Libre Franklin',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '1.25rem',
          lineHeight: '141.69%',
          color: '#CDA7D3',
        },

        button: {
          all: 'unset',
          cursor: 'pointer',
          color: '#FFF',
        }
      },

      ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        li: {
          a: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: '141.69%',
            color: '#FFF',
            textDecoration: 'none',
            transition: 'all 300ms ease',

            '&:hover': {
              color: '#fff'
            }
          }
        }
      }
    }
  })