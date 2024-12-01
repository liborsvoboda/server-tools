import tree_util from 'tree-util';

export default () => {
    // An array where the items has a parent child reference using id properties 


    const availableFunctions = JSON.parse("[\r\n    {\r\n      \"wParentFunctionCd\": \"MENU\",\r\n      \"wFunctionCd\": \"ENROLL\",\r\n      \"wDesc\": \"Enrollment\"\r\n    },\r\n    {\r\n      \"wParentFunctionCd\": \"MENU\",\r\n      \"wFunctionCd\": \"PROFILE\",\r\n      \"wDesc\": \"Profile\"\r\n    },\r\n    {\r\n      \"wParentFunctionCd\": \"ENROLL\",\r\n      \"wFunctionCd\": \"SUMMARY\",\r\n      \"wDesc\": \"Summary\"\r\n    },\r\n    {\r\n      \"wParentFunctionCd\": \"\",\r\n      \"wFunctionCd\": \"MENU\",\r\n      \"wDesc\": \"Menu\"\r\n    }\r\n  ]");

    // Config object to set the id properties for the parent child relation 
    var standardConfig =  { id : 'wFunctionCd', parentid : 'wParentFunctionCd'};

    // Creates an array of trees. For this example there will by only one tree 
    var trees = tree_util.buildTrees(availableFunctions, standardConfig);

    console.log(trees);
}


  
  