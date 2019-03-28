import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';

function BarraDeBusca() {
  let { state, buscar, setCarrinhoVisivel } = useContext(LojaContext);

  return (
    <Navbar bg="light" fixed="top">
      <Navbar.Brand>Facisa Store</Navbar.Brand>
      <Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <React.Fragment>
            <Form inline>
              <FormControl type="text" placeholder="Procurar" className="mr-sm-2" 
                onChange={(event) => buscar(event.target.value)} />
            </Form>
            { (state.carrinho.length <= 0) ? '' : (
              <Button variant="secondary" onClick={() => setCarrinhoVisivel(true)}>
                🛒 <Badge variant="outline-info">{state.carrinho.length}</Badge>
              </Button>
            ) }
          </React.Fragment>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}

export default BarraDeBusca;