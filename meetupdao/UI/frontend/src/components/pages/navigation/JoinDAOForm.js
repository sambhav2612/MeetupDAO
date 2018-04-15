import React, { Component } from 'react';
import {
    Button,
    Checkbox,
    Form
} from 'semantic-ui-react';
import { address, abi } from './../ABI.js';
import Web3 from 'web3';

let web3 = new Web3();

if (typeof web3 !== undefined) {
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));	
}

const becomeMember = () => {
    var memberName=document.getElementById("memberName").value;
    var myTokenContract = web3.eth.contract(abi).at(address);
    return myTokenContract.becomeMember(memberName, function (error, result) {})
}

export default class JoinDAOForm extends Component {
    render() {
        return (
            <Form>
                <Form.Field inline required>
                    <input placeholder="Enter your name" id='memberName' />
                </Form.Field>
                <Form.Field required>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit' onClick='becomeMember()'>Join DAO</Button>
            </Form>
        )
    }

}