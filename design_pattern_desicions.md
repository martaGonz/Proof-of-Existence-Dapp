# Design Pattern Decisions

***

## Restricting Access
We can never restrict any human or contracts from reading transactions or contract’s state variables.

That said, I restrict who can make modifications to the contract’s state or call critical contract’s functions.

By introducing "modifier" that allow only owner (creator of the contract) to use a function. In my case, I implement "onlyOwner" modifier to circuit breaker switch function that I will explain next.

`  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  `

***

<!-- ## Circuit Breaker (State Machine)
It is convenient to have certain stages or states in which contracts or functions behave differently. Again using "modifier" will do a great job. 

In my case, the "circuitBreaker" modifier controls on/off switch of a function. With this switch modifier I can turn off main function when something hazardous happens. 

`  modifier circuitBreaker() {
    require(!isEmergency);
    _;
  }`

 -->
