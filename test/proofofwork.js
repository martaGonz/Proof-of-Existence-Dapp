var ProofOfWork = artifacts.require("./ProofOfWork.sol");

contract('ProofOfWork', function(accounts) {

  it("...should store the value 89.", function() {
    return ProofOfWork.deployed().then(function(instance) {
      ProofOfWorkInstance = instance;

      return ProofOfWorkInstance.AddFile(89, {from: accounts[0]});
    }).then(function() {
      return ProofOfWorkInstance.getTagFromHash.call();
    }).then(function(storedData) {
      assert.equal(storedData, 89, "The value 89 was not stored.");
    });
  });

});
