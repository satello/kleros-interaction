import React, { Component } from 'react'
import GithubCorner from 'react-github-corner'
import { Button, ButtonGroup, Navbar, NavbarBrand, Nav, NavItem, NavLink, Tooltip, TooltipContent, Container, Row, Col, Collapse, Card, CardBlock } from 'reactstrap'
import { keccak_256 } from 'js-sha3'
import Menu from './Menu'

import '../styles/App.scss'

class ExampleArbitrableContract extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})
      } else {
        alert("install Metamask or use Mist");
      }
      this.randomNumber()
      this.getDetails()
    }, 1000)
  }

  state = {
    randomNumber: null,
    randomNumberHash: null,
    request: false,
    collapse: false,
    details: {
      'lastAction' : null,
      'timeToReac' : 0,
      'state' : null,
      'disputeID' : null,
      'secondRandom' : null,
      'requestCreator' : null,
      'partyB' : null,
      'partyB' : null,
      'hashRandom' : null,
      'nextAppeals' : null
    },
  }

  action1 = () => {
    let examplearbitrableContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"executeA","type":"bool"}],"name":"executeDueToInactivity","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyA","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"requestCreator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyB","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"ruleA","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"ruleB","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"request","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hashRandom","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lastAction","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"appeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeToReac","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"secondRandom","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_court","type":"address"},{"name":"_partyB","type":"address"},{"name":"_timeToReac","type":"uint256"}],"payable":false,"type":"constructor"}]);
    let examplearbitrableContractInstance = examplearbitrableContract.at(this.props.params.contractAdress);
    examplearbitrableContractInstance.executeDueToInactivity(true, {from: web3.eth.accounts[0]}, (res,err) => {
      console.log(res)
      console.log(err)
	  });
  }

  action2 = () => {
    let examplearbitrableContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"executeA","type":"bool"}],"name":"executeDueToInactivity","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyA","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"requestCreator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyB","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"ruleA","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"ruleB","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"request","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hashRandom","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lastAction","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"appeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeToReac","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"secondRandom","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_court","type":"address"},{"name":"_partyB","type":"address"},{"name":"_timeToReac","type":"uint256"}],"payable":false,"type":"constructor"}]);
    let examplearbitrableContractInstance = examplearbitrableContract.at(this.props.params.contractAdress);
    examplearbitrableContractInstance.executeDueToInactivity(false, {from: web3.eth.accounts[0]}, (res,err) => {
      console.log(res)
      console.log(err)
    })
  }

  randomNumber = () => {
    // TODO random number in [[1,2^256-1]]
    let randomNumber = Number(Math.floor((Math.random() * (Math.pow(2, 256) - 1)) + 1))
    this.setState({randomNumber: randomNumber})
    if ('undefined' === typeof web3) {
      alert("install metamask");
    } else {
      let examplearbitrableContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyA","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"requestCreator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyB","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint8"}],"name":"setState","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"request","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hashRandom","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lastAction","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeRulingA","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"appeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeToReac","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createAppeal","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeRulingB","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"secondRandom","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_court","type":"address"},{"name":"_partyB","type":"address"},{"name":"_timeToReac","type":"uint256"}],"payable":false,"type":"constructor"}]);
      let examplearbitrableContractInstance = examplearbitrableContract.at(this.props.params.contractAdress);
      examplearbitrableContractInstance.hash(this.state.randomNumber, {from: web3.eth.accounts[0]}, (res,err) => {
        console.log(res)
        console.log(err)
        this.setState({randomNumberHash: err})
  	  })
    }
  }

  saveRandomNumber = () => {
    if ('undefined' === typeof web3) {
      alert("install metamask");
    } else {
      let examplearbitrableContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyA","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"requestCreator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyB","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint8"}],"name":"setState","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"request","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hashRandom","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lastAction","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeRulingA","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"appeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeToReac","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createAppeal","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeRulingB","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"secondRandom","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_court","type":"address"},{"name":"_partyB","type":"address"},{"name":"_timeToReac","type":"uint256"}],"payable":false,"type":"constructor"}]);
      let examplearbitrableContractInstance = examplearbitrableContract.at(this.props.params.contractAdress);
      examplearbitrableContractInstance.request(this.state.randomNumberHash, {from: web3.eth.accounts[0]}, (res,err) => {
        console.log(res)
        console.log(err)
        this.setState({request: true})
        console.log("Request random number hash done")
      })
    }
  }

  getDetails = (adressContract) => {
    let examplearbitrableContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterAppeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyA","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"requestCreator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"partyB","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_secondRandom","type":"uint256"}],"name":"counterRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createDispute","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint8"}],"name":"setState","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"request","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextAppeals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hashRandom","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lastAction","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"disputeID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeRulingA","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hashRandom","type":"bytes32"}],"name":"appeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"timeToReac","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"firstRandom","type":"uint256"}],"name":"createAppeal","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"disputeID","type":"uint256"}],"name":"executeRulingB","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"secondRandom","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_court","type":"address"},{"name":"_partyB","type":"address"},{"name":"_timeToReac","type":"uint256"}],"payable":false,"type":"constructor"}]);
    // param adress contract
    let examplearbitrableContractInstance = examplearbitrableContract.at(this.props.params.contractAdress);
    examplearbitrableContractInstance.lastAction({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.lastAction = err.c[0]
      this.setState({details: details})
    });
    examplearbitrableContractInstance.timeToReac({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.timeToReac = err.c[0]
      this.setState({details: details})
    });
    examplearbitrableContractInstance.state({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.state = err.c[0]
      this.setState({details: details})
      console.log(err)
    });
    examplearbitrableContractInstance.disputeID({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.disputeID = err.c[0]
      this.setState({details: details})
    });
    examplearbitrableContractInstance.secondRandom({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.secondRandom = err.c[0]
      this.setState({details: details})
    });
    examplearbitrableContractInstance.requestCreator({from: web3.eth.accounts[0]}, (res,err) => {
      console.log(res)
      console.log(err)
      let details = this.state.details
      details.requestCreator = err
      this.setState({details: details})
    });
    examplearbitrableContractInstance.partyA({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.partyA = err
      this.setState({details: details})
    });
    examplearbitrableContractInstance.partyB({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.partyB = err
      this.setState({details: details})
    });
    examplearbitrableContractInstance.hashRandom({from: web3.eth.accounts[0]}, (res,err) => {
      console.log(res)
      console.log(err)
      let details = this.state.details
      details.hashRandom = err
      this.setState({details: details})
      if ('0x0000000000000000000000000000000000000000000000000000000000000000' != err)
        this.setState({request: true})
    });
    examplearbitrableContractInstance.nextAppeals({from: web3.eth.accounts[0]}, (res,err) => {
      let details = this.state.details
      details.nextAppeals = err.c[0]
      this.setState({details: details})
    });
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
    if (!this.state.collapse)
      this.getDetails()
  }

  render() {

    return (
      <div>
        <div>
          <Menu />
          <Container>
            <Row>
              <Col>
                <h1 className="intro">Example Arbitrable</h1>
                { this.state.request ? (
                  <div className="text-xs-center">
                    <b>Execute Due To Inactvity </b>
                    <ButtonGroup>
                      <Button onClick={this.action1}>Action 1</Button>
                      <Button onClick={this.action2}>Action 2</Button>
                    </ButtonGroup>
                  </div>
                ) : (
                  <div>
                    <p>Random number (save the number) : { this.state.randomNumber }</p>
                    <div className="float-xs-right">
                      <Button color="secondary" onClick={this.randomNumber}>Change the random number</Button>
                    </div>
                    <p>Random number hash : { this.state.randomNumberHash }</p>
                    <div className="text-xs-center">
                      <Button color="primary" onClick={this.saveRandomNumber}>Save the random number</Button>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details of the smart contract</Button>
                <Collapse isOpen={this.state.collapse}>
                  <Card>
                    <CardBlock>
                      <p>Last action: {this.state.details.lastAction}</p>
                      <p>Time to reac: {this.state.details.timeToReac} seconds</p>
                      <p>State: {this.state.details.state}</p>
                      <p>Id dispute: {this.state.details.disputeID}</p>
                      <p>Second random number: {this.state.details.secondRandom}</p>
                      <p>Creator request: {this.state.details.requestCreator}</p>
                      <p>Party A: {this.state.details.partyA}</p>
                      <p>Party B: {this.state.details.partyB}</p>
                      <p>Random hash: {this.state.details.hashRandom}</p>
                      <p>Next appeals: {this.state.details.nextAppeals}</p>
                    </CardBlock>
                  </Card>
                </Collapse>
              </Col>
            </Row>
          </Container>
          <hr className="my-2" />
          <footer>EtherCourt.io</footer>
        </div>
        <GithubCorner href="https://github.com/ethercourt" />
      </div>
    )
  }
}

export default ExampleArbitrableContract
