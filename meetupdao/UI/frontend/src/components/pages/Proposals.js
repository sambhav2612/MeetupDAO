import React from 'react';
import Web3 from 'web3';
import { address, abi } from './ABI.js';

let web3 = new Web3();

if (typeof web3 !== undefined) {
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));	
}

const previewHash = (hash) => {
    var dialog = document.getElementById('window');
    dialog.show();
    document.getElementById('exit').onclick = function () {
        dialog.close();
    };

    var preview = document.querySelector('img');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            preview.src = xhttp.responseText;
        }
    };
    xhttp.open("GET", "http://swarm-gateways.net/bzz:/" + hash, true);
    xhttp.send();

}

const uploadToSwarm = () => {
    var fileHash;
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    if (file === undefined) {
        fileHash = "";
        console.log(fileHash);
        newProposalInEther(fileHash);
    } else {
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            //preview.src = reader.result;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://swarm-gateways.net/bzz:/", true);
            xhr.setRequestHeader('Content-Type', 'text/plain');
            xhr.send(reader.result);
            xhr.onload = function () {
                web3.hash = this.responseText;
                console.log(web3.hash);
                fileHash = String(web3.hash);
                newProposalInEther(fileHash);
            }

        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
}

const newProposalInEther = (newFileHash) => {

    var beneficiary = document.getElementById("beneficiary").value;
    var etherAmount = document.getElementById("etherAmount").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var transactionBytecode = document.getElementById("transactionBytecode").value;

    var myTokenContract = web3.eth.contract(abi).at(address);
    return myTokenContract.newProposalInEther(beneficiary, etherAmount, jobDescription, newFileHash, transactionBytecode, function (error, result) {})

}

const executeProposal = (proposalNumberValue) => {

    var proposalNumber = proposalNumberValue;
    var transactionBytecode = document.getElementById("transactionBytecode").value;

    var myTokenContract = web3.eth.contract(abi).at(address);
    return myTokenContract.executeProposal(proposalNumber, transactionBytecode, function (error, result) {})

}

const vote = (proposalNumberValue) => {

    var proposalNumber = proposalNumberValue;
    var idYes = "supportsProposal_" + proposalNumber + "_yes";
    var idNo = "supportsProposal_" + proposalNumber + "_no";
    var idJustificationText = "justificationText_" + proposalNumber;
    var yes = document.getElementById(idYes).checked;
    var no = document.getElementById(idNo).checked;
    var supportsProposal;
    if (yes === true)
        supportsProposal = 1;
    else if (no === true)
        supportsProposal = -1;

    var justificationText = document.getElementById(idJustificationText).value;

    var myTokenContract = web3.eth.contract(abi).at(address);
    return myTokenContract.vote(proposalNumber, supportsProposal, justificationText, function (error, result) {})
}

const getProposals = () => {
    var myTokenContract = web3.eth.contract(abi).at(address);

    myTokenContract.totalProposals(function (error, result) {
        var totalProposals = result.c[0];
        for (var i = 0; i < totalProposals; i++) {
            const proposalNumber = i;
            myTokenContract.proposals(i, function (error, result) {

                var a1 = '<div class="proposalCard";><font face="Arial"><b><u>Benificiary Address</u> : </b>';
                var recipient = result[0];
                var a2 = '</p>';
                var a21 = '<h3>';
                var message = result[2];
                
                var voteButton1 = '</h3><form><div><font size="5"><b>Vote</b></font><br> Support Proposal &emsp;&emsp;&emsp; Justification for Your Response<br><input type="radio" name="supportsProposal" id="supportsProposal_';
                var voteButton2 = '_yes">Yes<input type="radio" name="supportsProposal" id="supportsProposal_';
                var voteButton3 = '_no">No&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="text" name="justificationText" id="justificationText_';
                var voteButton4 = '" placeholder="MyString">&emsp;&emsp;&emsp;&emsp;<button onclick="vote(';
                var voteButton5 = ')">VOTE</button></div></form>';

                var a3 = '<p><b>Proposal No.:</b> ';

                var a4 = '<span style="float:right;"><b>Votes</b>&nbsp&nbsp: Total Votes: ';
                var totalVotes = result[7].c[0];
                var a5 = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCurrent Status: ';
                //var currentStatus = result[8].c[0] * result[8].s;
                var hash = result[3];
                var preview_but = ''
                if (result[3]) {;
                    preview_but = '<button id="myBtn" style="float: right;" onclick=previewHash("' + hash + '")>View uploaded file</button>';
                }

                var currentStatus = result[8].c[0];
                var a6 = '</span></p></font></div><BR>';

                if (result[8].s < 0) {
                    currentStatus = -currentStatus;
                }

                var input = a1 + recipient + a2 + preview_but + a21 + message + voteButton1 + proposalNumber + voteButton2 + proposalNumber + voteButton3 + proposalNumber + voteButton4 + proposalNumber + voteButton5 + a3 + proposalNumber + a4 + totalVotes + a5 + currentStatus + a6;
                var mydiv = document.getElementById("parent");
                var newDiv = document.createElement('div');
                newDiv.innerHTML = input;
                while (newDiv.firstChild) {
                    mydiv.appendChild(newDiv.firstChild);
                }
            })
        }
    })
}

export default class Proposals extends React.Component {
    render() {
        return (
            <getProposals />
        );
    }
};