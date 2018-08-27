pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "openzeppelin-solidity/contracts/lifecycle/Destructible.sol";

contract ProofOfExistence is Ownable, Pausable, Destructible {

struct File {
	address addr;
	string tag;
	string ipfsHash;
}

File[] public listOfFiles;


 // List of state variables
mapping (address => uint) public count;
mapping (address => bytes32) addressToHash;
mapping (bytes32 => string) hashToTags;
mapping (bytes32 => bytes32[]) public tagToHash;

 // Initialize Ownable contract
constructor() public {
	Ownable(msg.sender);
}


function AddFile(address _addr, string _tag, string _ipfsHash) {

uint id = listOfFiles.push(File({addr: _addr, tag: _tag, ipfsHash: _ipfsHash})) - 1;

addressToHash[msg.sender] = keccak256(_ipfsHash);

hashToTags[keccak256(_ipfsHash)] = _tag;

count[msg.sender] = count[msg.sender]++;
}

  ///  getter function to get an array of keccakIPFS of hashs by tag
 function getHashArrayByTag(bytes32 _tag) constant public returns(bytes32[]){
    return tagToHash[_tag];
  }


}