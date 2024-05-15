import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0x00671cEf067674aC326e187FD704d5FC3f4e52f0";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
});