const { ethers } = require("hardhat");

async function main() {
    const Flipper = await ethers.getContractFactory('Flipper')

    const flipper = await Flipper.deploy(true);

    console.log("Deploy done!");

    console.log({
        flipper_contract_address: flipper.address,
        deploy_hash: flipper.deployTransaction,
    })
}

main().then(()=>process.exit(0)).catch((error)=>{
    console.log(error);
    process.exit(1);
})