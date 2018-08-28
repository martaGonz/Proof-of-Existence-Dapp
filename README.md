# "Proof of Existence dApp" 

<!--  -->

## Description  

This is a proof of existence DApp. This DApp provides a UI that allows users to interact with IPFS as well as smart contracts on the Ethereum blockchain. 

All image and video data are stored in **IPFS (Inter Planetary File System)** in order to become decentralized. 

Users can retrieve necessary reference data about their uploaded items to allow other people to verify the data authenticity.

***

### Upload File "/".
Main page of the application

![uploadimage](/public/uploadimage.png?raw=true "uploadimage")

### Check File "/".
Main page of the application

![checkimage](/public/checkimage.png?raw=true "checkimage")

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

## Built with
<!--  -->

![techStack](/public/techStack.png?raw=true "techStack")

![truffle-react-box](/public/truffle-react-box.png?raw=true "truffle-react-box")

## Acknowledgments

My fellow ConsenSys Academy students
* William Goi
* Natacha de la Rosa