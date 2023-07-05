
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">copy right @School Programming</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Instagram School Programming : <a href="https://instagram.com/adi.spiansyh" className="text-decoration-none">adi.spiansyh</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;