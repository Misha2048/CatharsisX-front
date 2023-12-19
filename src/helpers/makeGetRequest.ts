import axios from 'axios';
import { setEmailStatusToTrue } from '../redux/slices/UserSlice';
async function makeGetRequest(){
    try{
        const response = await axios.get('/users/me'); // Change endpoint here!

        if (response.data.email_verified){ // Change field here
            setEmailStatusToTrue();
            return true;
        }
        return false;
    }
    catch (error) {
        console.log('Error ', error);
        return false;
    }
}
export default makeGetRequest;