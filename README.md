# "Proof of Existence dApp" 

![techStack](/public/techStack.png?raw=true "techStack")

<!--  -->

## Description  

This is a proof of existence DApp. This DApp provides a UI that allows users to interact with IPFS as well as smart contracts on the Ethereum blockchain. 

All image and video data are stored in **IPFS (Inter Planetary File System)** in order to become decentralized. 

Users can retrieve necessary reference data about their uploaded items to allow other people to verify the data authenticity.

***

## How to set up
<!--  -->

Clone the project repository.

```
git clone https://github.com/martagonz/proof-of-existence-dapp.git
```

Go to the project directory

```
cd proof-of-existence-dapp
```

Install node modules

```
$ npm install
```

Compile Smart Contracts

```
$ truffle compile
```

Start a development blockchain network

```
$ ganache-cli
```

Migrate smart contracts

```
$  truffle migrate --reset
```

Start Dapp

```
$ npm run start
```

Run tests

```sh
$ truffle test 
```
