const listToTree = require('list-to-tree2');

export default () => {

    var json = "[\r\n {\r\n \"wParentFunctionCd\": \"MENU\",\r\n \"wFunctionCd\": \"ENROLL\",\r\n \"wDesc\": \"Enrollment\"\r\n },\r\n {\r\n \"wParentFunctionCd\": \"MENU\",\r\n \"wFunctionCd\": \"PROFILE\",\r\n \"wDesc\": \"Profile\"\r\n },\r\n {\r\n \"wParentFunctionCd\": \"ENROLL\",\r\n \"wFunctionCd\": \"SUMMARY\",\r\n \"wDesc\": \"Summary\"\r\n },\r\n {\r\n \"wParentFunctionCd\": \"\",\r\n \"wFunctionCd\": \"MENU\",\r\n \"wDesc\": \"Menu\"\r\n }\r\n ]";


    var funcs = JSON.parse(json);
    const tree = listToTree(funcs, 'wFunctionCd', 'wParentFunctionCd');

    
    console.log( JSON.stringify(tree) );
}
