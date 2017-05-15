app.controller('translationController', function ($rootScope,$scope) {
    
    //data representing records returned from a database
    // Language, UUID, Text
    var translationData = {
        'EN':{'001':{'Text':'Text for EN 001'},
              '002':{'Text':'Text for EN 002'}},
        'ES':{'001':{'Text':'Text for ES 001'},
              '002':{'Text':'Text for ES 002'}},
        'ID':{'001':{'Text':'Text for ID 001'},
              '002':{'Text':'Text for ID 002'}}
    };
    $scope.test = function(lang,id){
        $scope.testData = translationData[lang][id]['Text'];
    };

    // TODO:
    // open XLIFF file
    // convert to json
    // for each xliff id in the file go to a json translation table and look for the id + the language code.
    // list the text associated with this record and the uuid on screen
    // store updates to the translation data
    // 
    
});