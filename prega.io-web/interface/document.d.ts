import { Timestamp } from "firebase/firestore";

//The types that have question mark are not required
export interface IDocuments{
    doc_id : string,
    date : Timestamp, //This is firebase TimeStamp Type prebuilt in Firebase
    title : string,
    type : string,
    visibility : boolean
    doctor_clinic ? : string,
    description ? : string,
    doc_type ? : string,
    doc_format ? : string,
    doc_url ? : string,
}