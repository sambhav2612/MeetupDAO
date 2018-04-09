import React from 'react';

const becomeMember = () => {
    var memberName=document.getElementById("memberName").value;
    var myTokenContract = web3.eth.contract(abi).at(address);
    return myTokenContract.becomeMember(memberName, function (error, result) {})
}

export default class Members extends React.Component {
    render() {
        return(
            
        );
    }
}