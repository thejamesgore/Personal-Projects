let HelloBlockchain = artifacts.require("HelloBlockchain");
let Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
};