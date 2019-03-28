import React, { Component } from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import DetalheProduto from './DetalheProduto';
import Login from './Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Loja extends Component {
  render() {
    return (
         <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={ListaDeProdutos} />
            <Route path="/detalhe/:id" component={DetalheProduto} />
          </Switch>
        </BrowserRouter>
    );  
  }
}

export default Loja;