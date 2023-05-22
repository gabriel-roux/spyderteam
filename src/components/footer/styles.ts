import { styled } from "@/styles/config/stitches.config";
import Image from "next/image";

export const FooterContainer = styled('footer', {
    maxWidth: '1320px',
    width: '100%',
    margin: '0 auto'
})

export const StyledFooter = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #30313F',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#4A4A4A',
  });
  
export const LeftSection = styled('div', {
  display: 'flex',
  alignItems: 'center',

  h2: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontSize: '2rem',
    lineHeight: '47px',

    color: '#FFFFFF',
   },

   a: {
    all: 'unset',
    cursor: 'pointer',
    color: '#5F627E'
   }

});

export const Logo = styled(Image, {
  height: '50px',
  marginRight: '1rem',
});

export const RightLinksSection = styled('div', {

    display: 'flex',
    alignItems: 'flex-start',
    gap: '4rem',

    h3: {
        fontFamily: 'Libre Franklin',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '1rem',
        /* identical to box height, or 0% */
            
        textTransform: 'uppercase',
            
        color: '#F5BBFF',
    },

    p: {
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',

        a: {
            all: 'unset',
            fontFamily: 'Libre Franklin',
            fontStyle: 'normal',
            fontSize: '.875rem',
            lineHeight: '0px',
            /* identical to box height, or 0% */
                
            textTransform: 'uppercase',
                
            color: '#FFFF',

            '&:hover': {
                textDecoration: 'underline'
            }
        }

    }

})

export const RightSection = styled('div', {

    position: 'relative',
    background: '#38233C',
    width: 300,
    height: 50,
    borderRadius: 90,
    display: 'flex',
    alignItems: 'center',


    '.sendButton': {
        all: 'unset',
        position: 'absolute',
        right: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FA0AFF',
        padding: '.4rem',  
        borderRadius: '100%',
        cursor: 'pointer',
        color: '#000'
    }

});

export const FooterLink = styled('input', {
    all: 'unset',
    width: '80%',
    paddingLeft: '1rem',
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '.875rem',
    lineHeight: '22px',
    /* identical to box height */

    color: 'rgba(255, 255, 255, 0.5)',
});

export const CopyrightDiv = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#5F627E',
    padding: '1rem 0'
  });