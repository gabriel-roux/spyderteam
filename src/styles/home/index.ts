import { styled } from '@/styles/config/stitches.config'

export const Banner = styled('div', {
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    position: 'relative',

    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
    },

    '.gradient': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(20, 1, 23, 0.3) 0%, #140117 100%)',


    
        padding: '0rem 8rem',
    
        '@media screen and (max-width: 768px)': {
            display: 'none',
            padding: '0rem 1rem',
        },
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',

        h1: {
            fontFamily: 'Libre Franklin',
            fontWeight: 900,
            fontSize: '5rem',
            lineHeight: '97px',
            maxWidth: '8ch',

            '@media screen and (max-width: 768px)': {
                fontSize: '3rem',
                lineHeight: '3.5rem',
            },
            /* identical to box height */

            color: '#FFF',

            span: {
                color: '#DB00FF'
            },

            borderBottom: '2px solid #FFF',

            marginBottom: '1rem',
            paddingBottom: '1rem'
        },

        p: {
            fontFamily: 'Libre Franklin',
            fontWeight: 400,
            fontSize: '1rem',
            maxWidth: '75ch',
            /* identical to box height */

            '@media screen and (max-width: 768px)': {
                fontSize: '.875rem',
                maxWidth: '40ch',
            },
            color: '#FFF',

        },

        button: {
            all: 'unset',
            padding: '.65rem 1.5rem',
            borderRadius: '8px',
            background: '$purple-light',
            fontFamily: 'Libre Franklin',
            fontWeight: 400,
            fontSize: '1rem',
            color: '#FFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
            cursor: 'pointer',
            marginTop: '2rem',
            transition: 'all 300ms ease',

            '&:hover': {
                background: '$purple-dark'
            }
        }
    }
})

export const NewCollection = styled('section', {

    width: '100%',
    maxWidth: '1120px',
    margin: '2rem auto',

})

export const NewCollectionContent = styled('div', {

    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media screen and (max-width: 768px)': {
        flexDirection: 'column',
        gap: '2rem'
    },

    '.firstContent': {
        maxWidth: '48%',
        '@media screen and (max-width: 768px)': {
            maxWidth: '100%',
        },

        h1: {
            fontFamily: 'Libre Franklin',
            fontWeight: 400,
            fontSize: '4rem',
            lineHeight: '97px',
            '@media screen and (max-width: 768px)': {
                fontSize: '3rem',
                lineHeight: '3.5rem',
            },
            /* identical to box height */

            color: '#ECECEC',

            span: {
                fontWeight: 900,
                fontSize: '6rem',
                '@media screen and (max-width: 768px)': {
                    fontSize: '4rem',
                },
            }
        },

        p: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: '22px',
            width: '40ch',

            color: '#747474',
            marginBottom: '1rem',  

            '@media screen and (max-width: 768px)': {
                width: '100%',
            },
        },

        ul: {
            listStyle: 'none',

            li: {
                margin: '.5rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',

                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '1rem',
                
                color: '#fff',
            }
        },

        button: {
            all: 'unset',
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: '22px',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            cursor: 'pointer',
            color: '#FFF'
        }
    },

    '.secondContent': {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',

        '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            gap: '2rem'
        },

        '.firstImage': {
            display: 'flex',
            alignItems: 'flex-end',
            height: 500,
        },
        
        '.secondImage': {
            display: 'flex',
            alignItems: 'flex-start',
            height: 500,
        },

        img: {
            '@media screen and (max-width: 768px)': {
                width: 325,
            },
        },
    },
})

export const BuyNow = styled('section', {

    width: '100%',
    maxWidth: '1120px',
    margin: '5rem auto',

})

export const BuyNowContent = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyItems: 'flex-start',
    flexDirection: 'column',

    '@media screen and (max-width: 768px)': {
        padding: '0rem 2rem',
    },

    h1: {
        fontFamily: 'Libre Franklin',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '72px',
        lineHeight: '108px',
        /* identical to box height */
    
        color: '#FFFFFF',
        textAlign: 'center',
    },

    '.offer': {

        margin: '2rem',
        width: '70%',
        height: 630,
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media screen and (max-width: 768px)': {
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
        },
        borderRadius: '24px',
        overflow: 'hidden',

        '.imageContainer': {
            width: '50%',
            height: '100%',
            '@media screen and (max-width: 768px)': {
                width: '100%',
                height: 400,
            },
            background: 'linear-gradient(180deg, #DB00FF, #9C37FD)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        img: {
            height: '100%',
            objectFit: 'contain'
        },

        '.informations': {
            padding: '2rem',
            width: '50%',
            height: '100%',

            '@media screen and (max-width: 768px)': {
                width: '90%',
                height: 'auto',
            },

            h2: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '2rem',
                lineHeight: '108px',

                '@media screen and (max-width: 768px)': {
                    lineHeight: 1,
                }
            },

            p: {
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '1rem',

                '@media screen and (max-width: 768px)': {
                    fontSize: '1.25rem',
                    lineHeight: '2.5rem',
                }
            },

            '.colors': {
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                margin: '2rem 0',

                span: {
                    width: '1.7rem',
                    height: '1.7rem',
                    borderRadius: '100%',
                    cursor: 'pointer'
                }
            },

            '.sizeButtons': {
                margin: '4rem 0',

                h3: {
                    fontFamily: 'Libre Franklin',
                    fontStyle: 'normal',
                    fontSize: '1.25rem',
                },

                div: {
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',

                    '.active': {
                        borderColor: '$purple-light',
                    },

                    button: {
                        all: 'unset',
                        padding: '1rem 1.5rem',
                        borderBottom: '3px solid #aaa',
                        fontFamily: 'Libre Franklin',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }
                }
            },

            '.buyButtons': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
                margin: '4rem 0',

                button: {
                    all: 'unset',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    fontFamily: 'Libre Franklin',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                }
            }
        }

    }

})

export const Button = styled('button', {

    all: 'unset',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0rem 2rem',
    background: 'linear-gradient(98deg, rgba(59, 14, 66, 0.5) 0%, rgba(219, 0, 255, 0.5) 100%)',
    backdropFilter: 'blur(50px)',

    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '1.5rem',
    lineHeight: '69px',
    /* identical to box height, or 196% */
    
    textAlign: 'center',
    textTransform: 'capitalize',
    
    color: '#EA6BFF',
    cursor: 'pointer'

})

export const Newsletters = styled('section', {

    width: '100vw',
    position: 'relative',
    margin: '2rem 0',

    img: {
        width: '100vw'
    },

    div: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
        position: 'absolute',

        h2: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontWeight: '900',
            fontSize: '2.25rem',
            lineHeight: '69px',
            color: '#fff',
            textAlign: 'center',
            '@media screen and (max-width: 768px)': {
                lineHeight: '2rem',
            }
        },

        p: {
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontSize: '1.25rem',
            textAlign: 'center',
            color: '#fff'
        },

        form: {
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '@media screen and (max-width: 768px)': {
                width: '80%',
                flexDirection: 'column',
            },
            gap: '1rem',

            input: {
                all: 'unset',
                width: '100%',
                padding: '1rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '90px',
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '1.15rem',
                color: '#fff'
            },

            button: {
                all: 'unset',
                width: '165px',
                padding: '1rem 1.5rem',
                background: 'linear-gradient(97.86deg, #DB00FF -38.38%, #53175C 71.88%)',
                fontFamily: 'Libre Franklin',
                fontStyle: 'normal',
                fontSize: '1.15rem',
                color: '#fff',
                borderRadius: '90px',
                cursor: 'pointer',

                '@media screen and (max-width: 768px)': {
                    width: '100%',
                },
            }
        }

    }

})

export const News = styled('section', {
    width: '100%',
    maxWidth: '1120px',
    margin: '5rem auto',

    '.latestPublications': {
        display: 'grid',
        width: '100%',
        maxWidth: '1120px',
        gap: '2rem',
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@media screen and (max-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
            margin: '2rem 0',
        },

        '.publication': {
            header: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',

                h2: {
                    fontFamily: 'Libre Franklin',
                    fontStyle: 'normal',
                    fontSize: '.875rem',
                    fontWeight: 600,
                    lineHeight: '21px',
                    color: '#FFFFFF',
                },

                small: {
                    fontFamily: 'Libre Franklin',
                    fontStyle: 'normal',
                    lineHeight: '21px',
                    color: '#6E767D',
                }
            },

            img: {
                width: '100%',
                height: 400,
                objectFit: 'cover',
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
    }
})

export const NewsContent = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'flex-start',
    flexDirection: 'column',
    margin: '2rem 0',

    h1: {
        fontFamily: 'Libre Franklin',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '72px',
        lineHeight: '108px',
        /* identical to box height */
    
        '@media screen and (max-width: 768px)': {
            fontSize: '3.5rem',
            lineHeight: '3.5rem',
        },

        color: '#FFFFFF',
    },
})