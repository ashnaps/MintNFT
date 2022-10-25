const { ethers} =require("hardhat");
async function main()
{
    //Things to be done
    //1. Tell the script that we wanna deploy the NFTee.sol contract
    const contract = await ethers.getContractFactory("NFTee");

    //2. Deploy it
const deployedContract = await contract.deploy();
//2.1 wait for deployement to finish
await deployedContract.deployed();


    //3. Print the address of deployed contract
console.log("NFT Contract deployed to: ",deployedContract.address);
}




main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);


});