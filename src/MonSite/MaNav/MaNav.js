import React, { Component } from 'react';
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class MaNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem : ""
    }
  }
  

    handleItemClick = (e, {name}) => {     
      this.setState((prevState) => {
         prevState.activeItem = name 
        })
      }
    componentDidUpdate() {
      console.log(this.state.activeItem)
    }

  render() {    

    return (
      <Menu as="nav" vertical floated="left">
        <Menu.Item>
          <Menu.Header>Mes infos</Menu.Header>

          <Menu.Menu>
            <Menu.Item as={Link} to="/monCompte" name='profil' active={this.state.activeItem === 'profil'} onClick={this.handleItemClick}>
            Mon Compte
            </Menu.Item>            
            <Menu.Item name='reset' active={this.state.activeItem === 'reset'} onClick={this.handleItemClick}>
              Réinitialiser mon mot de passe
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Carnet de Bord</Menu.Header>

          <Menu.Menu>
            <Menu.Item as={Link} to="/consulterCarnet" name='consulterCarnet' active={this.state.activeItem === 'consulterCarnet'} onClick={this.handleItemClick}>
            Consulter les carnets de bord
            </Menu.Item>
            <Menu.Item name='remplir' active={this.state.activeItem === 'remplir'} onClick={this.handleItemClick} />            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Planning</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='consulter' active={this.state.activeItem === 'consulter'} onClick={this.handleItemClick} />     
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={this.state.activeItem === 'email'} onClick={this.handleItemClick}>
              Contacter le support
            </Menu.Item>            
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MaNav;