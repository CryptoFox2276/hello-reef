pragma solidity ^0.8.4;

contract Flipper {
    bool private value;

    constructor(bool initvalue) public {
        value = initvalue;
    }

    function flip() public {
        value = !value;
    }

    function get() public view returns(bool) {
        return value;
    }
}