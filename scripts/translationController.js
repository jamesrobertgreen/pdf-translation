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
    
    
    $scope.openXLIFF = function(xliffFileName){
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else { // IE 5/6
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.overrideMimeType('text/xml');
        xhttp.open("GET", xliffFileName, false);
        xhttp.send(null);
        xmlDoc = xhttp.responseXML;
        console.log(xmlDoc);
        var json = xmlToJson(xmlDoc);
        console.log(JSON.stringify(json));
        console.log(json.xliff.file.body.group);
        $scope.xliff = json.xliff.file.body.group;
    };
    
// Changes XML to JSON
var xmlToJson = function (xml) {
    // Create the return object
    var obj = {};
    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    }
    else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }
    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (nodeName === '#text'){
                nodeName = 'text';
            }
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            }
            else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};

    // TODO:
    // open XLIFF file
    // convert to json
    // for each xliff id in the file go to a json translation table and look for the id + the language code.
    // list the text associated with this record and the uuid on screen
    // store updates to the translation data
    // convert the updated XLIFF data back to an XML file
    // use the XLIFF file to create a new XDP file
    //
    
});