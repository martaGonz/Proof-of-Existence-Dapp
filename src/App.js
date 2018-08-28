import React, { Component } from 'react'
import ProofOfExistenceContract from '../build/contracts/ProofOfExistence.json'
import getWeb3 from './utils/getWeb3'
import ipfs from './ipfs'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipfsHash: '',
      web3: null,
      buffer: null,
      buffer2: null,
      account: null,
      tag: '',
      timeStamp: '',
      checkIpfsHash: '',
      checkAddress: '',
      checkTag: '',
      checkTimeStamp: '',
    }
    this.captureFile = this.captureFile.bind(this);
    this.captureFile2 = this.captureFile2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {

    const contract = require('truffle-contract')
    const proofOfExistence = contract(ProofOfExistenceContract)
    proofOfExistence.setProvider(this.state.web3.currentProvider)

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      proofOfExistence.deployed().then((instance) => {
        this.proofOfExistenceInstance = instance
        this.setState({ account: accounts[0] })
      }).then((ipfsHash) => {
        // Update state with the result.
        this.setState({ ipfsHash })
      })
    })
  }

  captureFile(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)

      ipfs.files.add(this.state.buffer, (error, result) => {
        if(error) {
          console.error(error)
          return
        }
        this.setState({ ipfsHash: result[0].hash })
        })
      }
    }

    captureFile2(event) {
      event.preventDefault()
      const file = event.target.files[0]
      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => {
        this.setState({ buffer2: Buffer(reader.result) })
        console.log('buffer', this.state.buffer2)
  
        ipfs.files.add(this.state.buffer2, (error, result) => {
          if(error) {
            console.error(error)
            return
          }
          this.setState({ checkIpfsHash: result[0].hash })
          })
        }
      }
    
  
  onSubmit(event) {
    event.preventDefault()
    this.proofOfExistenceInstance.AddFile(this.state.tag, this.state.ipfsHash, this.state.timeStamp, { from: this.state.account })
  }

  async onCheck(event) {
    event.preventDefault()
    this.setState({
      checkAddress: await this.proofOfExistenceInstance.getAddressFromHash(this.state.checkIpfsHash),
      checkTag: await this.proofOfExistenceInstance.getTagFromHash(this.state.checkIpfsHash),
      checkTimeStamp: await this.proofOfExistenceInstance.getTimestampFromHash(this.state.checkIpfsHash),
    })

  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <img src={`https://raw.githubusercontent.com/martaGonz/Proof-of-Existence-DApp/master/public/dragon.png`} alt=""/>
          <a href="#" className="pure-menu-heading pure-menu-link">Dragon Box Proof of Existence DApp</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <br/>
              <br/>
              <h1>Dragon Box </h1>
              <p>Proof of Existence Decentralized App that save your images on the Ethereum Blockchain and on the and the IPFS or Inter Planetary File System</p>
              <p>Each file and all of the blocks within it are given a unique fingerprint called a cryptographic hash.</p>
              <hr />
              <h2>Upload Image</h2>
              <form onSubmit={this.onSubmit} >
                <input type='file' onChange={this.captureFile} />
                <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/>
                <p>Tag</p>
                <input type='text' value={this.state.tag} onChange={event => this.setState({tag: event.target.value})} />
                <p>Timestamp</p>
                <input type='text' value={this.state.timeStamp} onChange={event => this.setState({timeStamp: event.target.value})} />
                <input type='submit' />
                <br/>
              <br/>
              </form>
              <hr />
              <h2>Check Image</h2>
              <form onSubmit={this.onCheck}>
              <input type='file' onChange={this.captureFile2} />
              <img src={`https://ipfs.io/ipfs/${this.state.checkIpfsHash}`} alt=""/>

              <input type='submit' />
              </form>
              <p>Address: {this.state.checkAddress}</p>
              <p>Tag: {this.state.checkTag}</p>

              <p>Timestamp: {this.state.checkTimeStamp}</p>

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
