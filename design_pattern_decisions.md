# Design Pattern Decisions

***

## Summary
This document gives an overview of the design patterns used to implement the application. 

### Curcuit Breaker (Emergency Stop)
This contract inherits from standard zeppelin `Pausable` and `Ownable` contracts. Only the `owner` of the
contract can pause the contract and restrict any further state mutation.

### Immortal
With the emergency stop and upgradability, there is no particular reason why this contracts has to expire at
a certain moment in time. Therefore the mortality design pattern is not applied.

Since the scope of this application is limited to adding and verifying an image tag, timestamp and hash, the use of several design patterns was not necessary:

- Mortal: The immutability of the picture storage would be compromised if users knew their pictures could vanish when the contract is destroyed.
- Pull over Push Payments: This isn't relevant since this contract doesn't provide a payment functionality.
- State Machine: Since the overall state of this application doesn't progress to different stages, the State Machine pattern is not necessary.
- Speed Bump: This isn't necessary during testing and soft-launch, but could be useful to implement to prevent users from flooding the picture upload functionality with requests.

***