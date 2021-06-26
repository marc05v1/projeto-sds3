const Footer = () => { //expressão lâmbida, (um outro jeito de referenciar uma função) uma função que não tem nome, que estou atribuindo ao NavBar
  return (
    <footer className="footer mt-auto py-3 bg-dark">
  <div className="container">
    <p className="text-light">App desenvolvido por <a href="https://github.com/marc05v1" target="_blank" rel="noreferrer">Marcos Vinícius</a></p>
    <p className="text-light"><small><strong>Semana Spring React</strong><br/>
      Me siga na Instagram: <a href="https://instagram.com/marcos_vinial" target="_blank" rel="noreferrer">@marcos_vinial</a></small></p>
  </div>
</footer>
  );
}

export default Footer;