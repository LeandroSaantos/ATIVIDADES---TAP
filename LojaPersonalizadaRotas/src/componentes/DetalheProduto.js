import React, { useContext } from 'react';
import {Button, Card} from "react-bootstrap";
import BancoDeDados from "../bd/BancoDeDados";
import FormataMoeda from "./FormataMoeda";

function DetalheProduto(props) {

    let {id} = props.match.params;
    let produto = BancoDeDados.getProduto(id);
    return (
        <Card className="text-left">
            <Card.Header as="h3">
                {produto.nome}
            </Card.Header>
            <Card.Img style={{width: '30%', margin: 'auto'}} variant="top" src={produto.imagem}/>
            <Card.Body style={{width: '70%', margin: 'auto'}}>
                <Card.Title><FormataMoeda valor={produto.preco}/></Card.Title>
                <Button variant="outline-success" block
                        onClick={() => this.context.comprar(produto)}>
                    Comprar
                </Button>
                <Button variant="outline-danger" block
                        onClick={() => this.voltar()}>
                    Voltar
                </Button>
            </Card.Body>
        </Card>
    );

}

export default DetalheProduto;