// src/components/ScrollableContainer.js
import { keyframes, styled } from '@/styles/config/stitches.config';
import Image from 'next/image';

const scrollAnimation = keyframes({
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-100%)' },
  });
  
const ScrollableContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const AnimatedLogoContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  whiteSpace: 'nowrap',
  animation: `${scrollAnimation} 20s linear infinite`,
});

const LogoSet = styled('div', {
  display: 'flex',
  gap: '1rem',
  whiteSpace: 'nowrap',
});

const Logo = styled(Image, {
  height: '100px',
  objectFit: 'contain',
});

export { LogoSet, ScrollableContainer, AnimatedLogoContainer, Logo };