// for documentation
// https://github.com/paularmstrong/normalizr

import { normalize, schema } from 'normalizr';

const blogPost = JSON.parse
("{ \"id\": \"123\", \"author\": { \"id\": \"1\", \"name\": \"Paul\" }, \"title\": \"My awesome blog post\", \"comments\": [ { \"id\": \"324\", \"commenter\": { \"id\": \"2\", \"name\": \"Nicole\" } } ] }");


const getAll = JSON.parse("[\r\n  {\r\n    \"id\": 1,\r\n    \"lastName\": \"Lau\",\r\n    \"firstName\": \"Alan\"\r\n  },\r\n  {\r\n    \"id\": 2,\r\n    \"lastName\": \"Ko\",\r\n    \"firstName\": \"Alex\"\r\n  },\r\n  {\r\n    \"id\": 3,\r\n    \"lastName\": \"Chan\",\r\n    \"firstName\": \"Alex \"\r\n  },\r\n  {\r\n    \"id\": 4,\r\n    \"lastName\": \"Hon\",\r\n    \"firstName\": \"Alfred \"\r\n  },\r\n  {\r\n    \"id\": 5,\r\n    \"lastName\": \"Kwok\",\r\n    \"firstName\": \"Andy\"\r\n  },\r\n  {\r\n    \"id\": 6,\r\n    \"lastName\": \"Leung\",\r\n    \"firstName\": \"Angel\"\r\n  },\r\n  {\r\n    \"id\": 7,\r\n    \"lastName\": \"Yeung\",\r\n    \"firstName\": \"Barry\"\r\n  },\r\n  {\r\n    \"id\": 8,\r\n    \"lastName\": \"Leung\",\r\n    \"firstName\": \"Benny\"\r\n  },\r\n  {\r\n    \"id\": 9,\r\n    \"lastName\": \"Chan\",\r\n    \"firstName\": \"Carey\"\r\n  },\r\n  {\r\n    \"id\": 10,\r\n    \"lastName\": \"Chan\",\r\n    \"firstName\": \"Chloe\"\r\n  },\r\n  {\r\n    \"id\": 11,\r\n    \"lastName\": \"Ng\",\r\n    \"firstName\": \"Cindy\"\r\n  },\r\n  {\r\n    \"id\": 12,\r\n    \"lastName\": \"Ma\",\r\n    \"firstName\": \"Clifford\"\r\n  },\r\n  {\r\n    \"id\": 13,\r\n    \"lastName\": \"Tsang\",\r\n    \"firstName\": \"David\"\r\n  },\r\n  {\r\n    \"id\": 14,\r\n    \"lastName\": \"Chiu\",\r\n    \"firstName\": \"Douglas\"\r\n  },\r\n  {\r\n    \"id\": 15,\r\n    \"lastName\": \"Lee\",\r\n    \"firstName\": \"Eddy\"\r\n  },\r\n  {\r\n    \"id\": 16,\r\n    \"lastName\": \"Law\",\r\n    \"firstName\": \"Esme\"\r\n  },\r\n  {\r\n    \"id\": 17,\r\n    \"lastName\": \"Ngan\",\r\n    \"firstName\": \"Eric\"\r\n  },\r\n  {\r\n    \"id\": 18,\r\n    \"lastName\": \"Kuan\",\r\n    \"firstName\": \"Fei\"\r\n  },\r\n  {\r\n    \"id\": 19,\r\n    \"lastName\": \"Wong\",\r\n    \"firstName\": \"Fred\"\r\n  },\r\n  {\r\n    \"id\": 20,\r\n    \"lastName\": \"yip\",\r\n    \"firstName\": \"Frankie\"\r\n  },\r\n  {\r\n    \"id\": 21,\r\n    \"lastName\": \"Leung\",\r\n    \"firstName\": \"Fung\"\r\n  },\r\n  {\r\n    \"id\": 22,\r\n    \"lastName\": \"Lam\",\r\n    \"firstName\": \"Genie\"\r\n  },\r\n  {\r\n    \"id\": 23,\r\n    \"lastName\": \"Yuen\",\r\n    \"firstName\": \"Ivan\"\r\n  },\r\n  {\r\n    \"id\": 24,\r\n    \"lastName\": \"Au\",\r\n    \"firstName\": \"Ivy\"\r\n  },\r\n  {\r\n    \"id\": 25,\r\n    \"lastName\": \"Yeung\",\r\n    \"firstName\": \"Jacky\"\r\n  },\r\n  {\r\n    \"id\": 26,\r\n    \"lastName\": \"Ho\",\r\n    \"firstName\": \"Jay\"\r\n  },\r\n  {\r\n    \"id\": 27,\r\n    \"lastName\": \"Lin\",\r\n    \"firstName\": \"Jay\"\r\n  },\r\n  {\r\n    \"id\": 28,\r\n    \"lastName\": \"Tse\",\r\n    \"firstName\": \"Joyce\"\r\n  },\r\n  {\r\n    \"id\": 30,\r\n    \"lastName\": \"Karry\",\r\n    \"firstName\": \"Karry\"\r\n  },\r\n  {\r\n    \"id\": 31,\r\n    \"lastName\": \"Wong\",\r\n    \"firstName\": \"Kelly\"\r\n  },\r\n  {\r\n    \"id\": 32,\r\n    \"lastName\": \"Chung\",\r\n    \"firstName\": \"Kelvin\"\r\n  },\r\n  {\r\n    \"id\": 33,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 34,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 35,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 36,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 37,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 38,\r\n    \"lastName\": \"ddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 39,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 40,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 41,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 42,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 43,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 44,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 45,\r\n    \"lastName\": \"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\r\n    \"firstName\": \"b\"\r\n  },\r\n  {\r\n    \"id\": 46,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"\"\r\n  },\r\n  {\r\n    \"id\": 47,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"\"\r\n  },\r\n  {\r\n    \"id\": 48,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"\"\r\n  },\r\n  {\r\n    \"id\": 49,\r\n    \"lastName\": \"\",\r\n    \"firstName\": \"\"\r\n  }\r\n]");
export default () => {
    /*
    // Define a users schema
    const user = new schema.Entity('users');

    // Define your comments schema
    const comment = new schema.Entity('comments', {
        commenter: user
    });

    // Define your article 
    const article = new schema.Entity('articles', { 
        author: user,
        comments: [ comment ]
    });

    const normalizedData = normalize(blogPost, article);

    console.log(JSON.stringify(normalizedData));
    console.log("-----------------------");
    console.log(JSON.stringify(normalizedData.entities.users));

    console.log(JSON.stringify(normalizedData.entities.comments));

    console.log(JSON.stringify(normalizedData.entities.articles));*/


    const user = new schema.Entity("student");
    
}




