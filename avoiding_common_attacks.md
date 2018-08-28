# Avoiding Common Attacks

***

## Summary

Measures that were taken to ensure that the contracts are not susceptible to common attacks. This contract is relatively safe because it is meant to only handle data uploads and not value transfer.

Common race condition attacks such as Reentrancy does not apply here, including:
  - Reentrancy
  - Cross-function Race Conditions
  - Pitfalls in Race Condition Solutions

* __OpenZeppelin library for smart contract imports:__ using OpenZeppelin smart contracts library I'm using verified and audited code that's already working on the main net without issues.

## Restrict Access

* __Ownable contract:__ to provide the contract owner these basic authorization functions

- Set a new contract owner
- Optionally require functions to be called by the current contract owner
- Renounce contract ownership


## Circuit Breaker

* __Pausable contract:__ for emergency stop functionality.

* __Destructible contract:__ in order to be able to kill the contract.

### Integer Overflow and Underflow

All mathematic operations in this contract use the zeppelin standard `SafeMath` library.
Secure from both overflow and underflow.


