pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "openzeppelin-solidity/contracts/lifecycle/Destructible.sol";

contract ProofOfExistence is Ownable, Pausable, Destructible {
    
 	// Initialize Ownable contract
	constructor() public {	
		Ownable(msg.sender);
	}

    mapping (address => bytes32[]) public addressToHashes;
    
    // List of state variables
    mapping (bytes32 => address) public hashToAddress;
    mapping(bytes32 => string) public hashToTag;
    mapping(bytes32 => string) public hashToTimestamp;
    
     /** function that writes the infomation including msg.sender hash

   *   @param _ipfsHash The hash returned from IPFS
   *   @param _tag The tag array attached from the user to the file
   *   @param _timestamp Information about then the file has been uploaded
  
   */
    function AddFile(string _tag, string _ipfsHash, string _timestamp) public {
        
        bytes32 convertedHash = keccak256(abi.encodePacked(_ipfsHash));
        
        addressToHashes[msg.sender].push(convertedHash);
        
        hashToAddress[convertedHash] = msg.sender;
        hashToTag[convertedHash] = _tag;
        hashToTimestamp[convertedHash] = _timestamp;

    }
    
	/// getter function to get address from hash
    function getAddressFromHash(string _ipfsHash) public view returns (address) {
        bytes32 convertedHash = keccak256(abi.encodePacked(_ipfsHash));
        
        return (hashToAddress[convertedHash]);
    }
    
   ///  getter function to get tag from hash
    function getTagFromHash(string _ipfsHash) public view returns (string) {
        bytes32 convertedHash = keccak256(abi.encodePacked(_ipfsHash));
        
        return (hashToTag[convertedHash]);
    }

  ///  getter function to get timestamp from hash
    function getTimestampFromHash(string _ipfsHash) public view returns (string) {
        bytes32 convertedHash = keccak256(abi.encodePacked(_ipfsHash));
        
        return (hashToTimestamp[convertedHash]);
    }
}