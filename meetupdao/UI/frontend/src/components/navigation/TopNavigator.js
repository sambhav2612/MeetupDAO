import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './TopNavigator.css';

export default class TopNavigator extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <div>
            <Menu size="huge" borderless className="App-header">
                <Menu.Item header 
                    className="App-title"
                    href="#home" 
                >Meetup DAO</Menu.Item>
                <Menu.Menu fluid widths={3} position='right'>
                    <Menu.Item 
                        className="Menu-item"
                        name='join' 
                        href="#join" 
                        active={activeItem === 'join'} 
                        onClick={this.handleItemClick} 
                    >Join</Menu.Item>
                    <Menu.Item 
                        className="Menu-item"
                        name='team' 
                        href="#team" 
                        active={activeItem === 'team'} 
                        onClick={this.handleItemClick} 
                    >Team</Menu.Item>
                    <Menu.Item 
                        className="Menu-item"
                        name='proposal' 
                        href="#proposal" 
                        active={activeItem === 'proposal'} 
                        onClick={this.handleItemClick} 
                    >Proposals</Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
  }
}