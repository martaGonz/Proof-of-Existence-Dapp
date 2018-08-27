var ProofOfExistence = artifacts.require("./ProofOfExistence.sol");


contract('ProofOfExistence', function(accounts) {

  it("...should store the file with dragon tag, hashXXX, tuesday", function() {

    return ProofOfExistence.deployed().then(function(instance) {

      ProofOfExistenceInstance = instance;

      return ProofOfExistenceInstance.AddFile("dragon", "hashXXX", "tuesday", {from: accounts[0]});

    }).then(function() {

      return ProofOfExistenceInstance.getTagFromHash("hashXXX");

    }).then(function(storedData) {

      assert.equal(storedData, "dragon", "The dragon tag was not stored.");
    });

  });



    it("...should give sender's adresss from hashXXX", function() {

      return ProofOfExistence.deployed().then(function(instance) {

      ProofOfExistenceInstance = instance;

      return ProofOfExistenceInstance.getAddressFromHash("hashXXX");

    }).then(function(storedData) {

      assert.equal(storedData, accounts[0] , "The sender's adresss was not stored.");
    });

  });


      it("...should give the tag from hashXXX", function() {

      return ProofOfExistence.deployed().then(function(instance) {

      ProofOfExistenceInstance = instance;

      return ProofOfExistenceInstance.getTagFromHash("hashXXX");

    }).then(function(storedData) {

      assert.equal(storedData, "dragon" , "The tag was not stored.");
    });

  });


      it("...should give the timestamp from hashXXX", function() {

      return ProofOfExistence.deployed().then(function(instance) {

      ProofOfExistenceInstance = instance;

      return ProofOfExistenceInstance.getTimestampFromHash("hashXXX");

    }).then(function(storedData) {

      assert.equal(storedData, "tuesday" , "The timestamp was not stored.");
    });

  });


  it("...should store the file with fish tag, hashXXX, friday", function() {

    return ProofOfExistence.deployed().then(function(instance) {

      ProofOfExistenceInstance = instance;

      return ProofOfExistenceInstance.AddFile("fish", "hashXXX", "friday", {from: accounts[0]});

    }).then(function() {

      return ProofOfExistenceInstance.getTagFromHash("hashXXX");

    }).then(function(storedData) {

      assert.equal(storedData, "fish", "The fish tag was not stored.");
    });

  });

});
