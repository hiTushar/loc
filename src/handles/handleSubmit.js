import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const handleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data")  // Firebase creates this automatically
 
    let data = testdata;
    
    console.log({ data });

    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit