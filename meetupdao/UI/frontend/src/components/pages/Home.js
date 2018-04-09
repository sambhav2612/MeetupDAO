import React, { Component } from 'react';
import TopNavigator from './navigation/TopNavigator.js';
import JoinDAOForm from './navigation/JoinDAOForm.js';
import landingImage from './images/landing.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigator />
        <div className="container">
          <div className="landing">
            <img src={landingImage} alt="logo"/>
            <div>
              <h1>Welcome to Meetup DAO</h1>
              <h2>A Decentralized Autonomous Organisation specifically build for Meetup Groups</h2>
            </div>
          </div>
          <hr/>
          <section id="joindao">
            <div className="inner">
              <h2>What is Meetup DAO</h2>
              <p>In the Ethereum ecosystem, there is no discrimination against robots or humans and 
                contracts can create arbitrary actions like any other account would. Contracts can own 
                tokens, participate in crowdsales, and even be voting members of other contracts. DAO is 
                a business or organization whose decisions are made electronically by a written computer 
                code or through the vote of its members. In essence it is a system of hard coded rules that 
                define which actions an organization will take</p>
              <p>DAOs aim to hardcode certain rules that a company would from the get-go. This could be 
                setting aside a certain percentage of earnings for a cause or determining a process by which 
                such a rule could be changed.</p>
              <br/>
              <h2>How it works</h2>
              <p>The way this particular democracy works is that it has an Owner which works like an administrator, 
                CEO or a President. The Owner can add (or remove) voting members to the organization. Any member 
                can make a proposal, which is in the form of an ethereum transaction to either send ether or execute 
                ome contract, and other members can vote in support or against the proposal. Once a predetermined 
                amount of time and a certain number of members has voted, the proposal can be executed: the contract 
                counts the votes and if there are enough votes it will execute the given transaction.</p>
              <p>If you would like to join the community, please fill the form below:</p>
              <JoinDAOForm name='join'/>
              <br/>
              <p>In case you're 
                <i><mark>short of ethers</mark></i>, you can get some from the 
                <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer"
                > Rinkeby Faucet Network.</a></p>
            </div>
            </section>
            <hr/>
            <section id="proposal">
              <div className="inner">
                <h2>How to create a Proposal</h2>
                <p>You can create a proposal as follows:
                  <ol>
                    <li>In order to vote proposals or create one, you have to be a member of the DAO.
                      Use the Join DAO form to join and proceed.
                    </li>
                    <li>Once you're a member of the DAO, you have the priviledges to vote and create 
                      proposals from the Proposal tab.</li>
                    <li>Enter the credentials on the Proposal tab to create a new proposal.</li>
                    <li>You're done! Catch your proposal in effect and up for voting.</li>
                  </ol>
                  Now, the cool part is this mechanism uses Metamask. And, due to that each proposal
                  requires a transaction to be processed in the account of this DAO.
                </p>
              </div>
            </section>
          </div>
      </div>
    );
  }
};