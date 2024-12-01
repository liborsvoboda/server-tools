import axios from 'axios';

const GET_TOKEN = `http://localhost:60473/token`;

export default () => {
    // axios.get(url).then(response => console.log(response))

    var postObj = {
        username:"acs",
        password:"1234" 
    };

    const {response, error} = getToken(postObj);
    console.log(response);

}

function* getToken (postObj) {
    yield axios.post(GET_TOKEN, postObj)
    .then(response => { response })
    .catch(error => { error });
}