# "Proof of Existence Dragon DApp" 
![dragon](/public/dragon.png?raw=true "dragon")
<!--  -->

![techStack](/public/techStack.png?raw=true "techStack")


## Description  

This is a proof of existence DApp. This DApp provides a UI that allows users to interact with IPFS as well as smart contracts on the Ethereum blockchain. 

To make the storage system completely decentralized, the images are saved in **IPFS (Inter Planetary File System)** using **Infura**.

Users can retrieve necessary reference data about their uploaded items to allow other people to verify the data authenticity.

***

### Upload Image.

Choose an Image, input a tag and timestamp as strings.  When loaded, click Submit. Metamask will ask you to confirm transaction with ETH Fee

![uploadimage](/public/uploadimage.png?raw=true "uploadimage")

### Check Image.

Your image's address, tag and timestamp is recorded on the Ethereum Blockchain

![checkimage](/public/checkimage.png?raw=true "checkimage")

## How to set up
<!--  -->

Clone the project repository.

```
$ git clone https://github.com/martagonz/proof-of-existence-dapp.git
```

Go to the project directory

```
$ cd proof-of-existence-dapp
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


## Acknowledgments

My fellow students at ConsenSys Academy 
* William Goi
* Natacha de la Rosa