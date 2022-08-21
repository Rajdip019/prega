import { Timestamp } from "firebase/firestore";
import { IDocuments } from "./document";

//The types that have question mark are not required
export interface IUser{
    uid : string,
    name : string,
    email : string,
    image : string,
    account_created : Timestamp, //This is firebase TimeStamp Type prebuilt in Firebase
    age : number,
    blood_group : string,
    starting_date ? : Timestamp,
    complications ? : string,
    current_medicines ? : string[],
    diseases ? : string[],
    allergies ? : string[],
    documents : IDocuments[]
}