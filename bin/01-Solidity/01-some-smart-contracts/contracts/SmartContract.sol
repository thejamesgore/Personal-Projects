pragma solidity ^0.4.18;

contract TestContract {
    bytes32 message;
    function TestContract(bytes32 myMessage){
        message = myMessage;
    }

    function getMessage() returns(bytes32) {
        return message;
    }
}