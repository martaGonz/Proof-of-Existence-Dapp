var ProofOfExistence = artifacts.require("./ProofOfExistence.sol");


contract('ProofOfExistence', function(accounts) {

 // this test ensures that the file has been uploaded and the contract gives the tag from a hash
  it("...should store the file with dragon tag, hashXXX, 27-08-2018", function() {
     return ProofOfExistence.deployed().then(function(instance) {
     ProofOfExistenceInstance = instance;
     return ProofOfExistenceInstance.AddFile("dragon", "hashXXX", "27-08-2018", {from: accounts[0]});
     }).then(function() {
     return ProofOfExistenceInstance.getTagFromHash("hashXXX");
     }).then(function(storedData) {
     assert.equal(storedData, "dragon", "The dragon tag was not stored.");
     });
  });


// this test ensures that the contract finds the sender's address by the ipfs hash
  it("...should give sender's adresss from hashXXX", function() {
      return ProofOfExistence.deployed().then(function(instance) {
      ProofOfExistenceInstance = instance;
      return ProofOfExistenceInstance.getAddressFromHash("hashXXX");
      }).then(function(storedData) {
      assert.equal(storedData, accounts[0] , "The sender's adresss was not stored.");
     });
  });


// this test ensures that the contract finds the tag by the ipfs hash
  it("...should give the tag from hashXXX", function() {
      return ProofOfExistence.deployed().then(function(instance) {
      ProofOfExistenceInstance = instance;
      return ProofOfExistenceInstance.getTagFromHash("hashXXX");
     }).then(function(storedData) {
      assert.equal(storedData, "dragon" , "The tag was not stored.");
     });
  });


// this test ensures that the contract finds the timestamp by the ipfs hash
  it("...should give the timestamp from hashXXX", function() {
      return ProofOfExistence.deployed().then(function(instance) {
      ProofOfExistenceInstance = instance;
      return ProofOfExistenceInstance.getTimestampFromHash("hashXXX");
      }).then(function(storedData) {
      assert.equal(storedData, "27-08-2018" , "The timestamp was not stored.");
      });
  });


// this is a second test to ensure that the file has been uploaded and the contract gives the tag from a hash
  it("...should store the file with fish tag, hashXXX, 27-08-2018", function() {
    return ProofOfExistence.deployed().then(function(instance) {
      ProofOfExistenceInstance = instance;
      return ProofOfExistenceInstance.AddFile("fish", "hashXXX", "27-08-2018", {from: accounts[0]});
    }).then(function() {
      return ProofOfExistenceInstance.getTagFromHash("hashXXX");
    }).then(function(storedData) {
      assert.equal(storedData, "fish", "The fish tag was not stored.");
    });
  });


});
