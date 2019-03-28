import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function ItemProduto(props) {
  let { comprar } = useContext(LojaContext);

  return (
    <Col xs={3}>
    <Link to={'/detalhe/' + props.produto.nome}>
      <Card className="text-left">
        <Card.Header as="h3">{props.produto.nome}</Card.Header>
        <Card.Img variant="top" src={props.produto.foto} />
        <Card.Body>
          <Card.Title><FormataMoeda valor={props.produto.preco}/></Card.Title>
          <Button variant="outline-info" block onClick={() => comprar(props.produto)}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
}

export default ItemProduto;