import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#6A0572', // roxo
    color: '#000000', // preto
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>Seu conteúdo do footer aqui</p>
    </footer>
  );
};

export default Footer;  