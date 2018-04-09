import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='#join'>
                        <Menu.Item 
                            className="Menu-item"
                            name='join' 
                            href="#join" 
                            active={activeItem === 'join'} 
                            onClick={this.handleItemClick} 
                        >Join</Menu.Item>
                    </Link>
                    <Link to='#team'>
                        <Menu.Item 
                            className="Menu-item"
                            name='team' 
                            href="#team" 
                            active={activeItem === 'team'} 
                            onClick={this.handleItemClick} 
                        >Team</Menu.Item>
                    </Link>
                    <Link to='/propsals'>
                        <Menu.Item 
                            className="Menu-item"
                            name='proposal' 
                            href="#proposal" 
                            active={activeItem === 'proposal'} 
                            onClick={this.handleItemClick} 
                        >Proposals</Menu.Item>
                    </Link>
                    <Link to='members'>
                        <Menu.Item 
                            className="Menu-item"
                            name='member' 
                            href="#members" 
                            active={activeItem === 'member'} 
                            onClick={this.handleItemClick} 
                        >Members</Menu.Item>
                    </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )
  }
}