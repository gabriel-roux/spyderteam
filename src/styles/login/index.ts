import Image from "next/image";
import { styled } from "../config/stitches.config";

export const PageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#4A4A4A',
  });
  
export const LoginCard = styled('div', {
  marginTop: '6rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2rem',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '100%',
  background: '#270D27',
  maxWidth: '800px',
});

export const Logo = styled(Image, {
  height: '500px',
  width: '400px',
  objectFit: 'cover',
  borderRadius: '12px'
});

export const LoginForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',

  h2: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#FFFFFF',
  },

  p: {
    margin: '1rem 0',
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#aaa',
  }
});

export const Input = styled('input', {
  padding: '0.5rem',
  background: 'transparent',
  border: 0,
  borderBottom: '3px solid #595959',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#FFF',
  transition: 'all 300ms ease',
  
  '&:focus': {
      outline: 0,
      borderColor: '$purple-light'
  }
  
});

export const CenteredDiv = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#888',
  });
  
export const LoginLink = styled('a', {
  color: '#DB00FF',
  marginLeft: '4px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});
  

export const Button = styled('button', {
    all: 'unset',
    marginTop: '12.5rem',
    padding: '0.75rem',
    borderRadius: '4px',
    backgroundColor: '$purple-base',
    color: '#FFF',
    fontSize: '16px',
    lineHeight: '24px',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 300ms ease',

    '&:hover': {
        backgroundColor: '$purple-dark',
    },
});