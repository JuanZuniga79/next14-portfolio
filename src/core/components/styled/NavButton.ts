import styled from 'styled-components';

// Estilo principal para el botón
export const NavButton = styled.button`
  cursor: pointer;

  --hovered-color: #c84747;
  position: relative;
  align-items: center;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: 0;
    height: 3px;
    transition: 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }`;