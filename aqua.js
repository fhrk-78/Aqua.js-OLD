/**
 * Copyright (c) 2023 FhRuby All right reserved.
 * Aqua.js / License: Apache-2.0
 */
var allAquaScript = document.getElementsByTagName('aqua');
var sourceCodeAll = [];
for (var i = 0; i < allAquaScript.length; ++i) {
    sourceCodeAll.push(allAquaScript[i].innerHTML);
    allAquaScript[i].innerHTML = "";
}
function firstSpaceAndSectionManage(sectionNumber) {
    var nowSection = sourceCodeAll[sectionNumber].split('\n');
    var j = 1;
    for (var i = 0; i < nowSection.length; ++i) {
        while (nowSection[i].charAt(j) == ' ') {
            ++j;
        }
        if (runLine(nowSection[i].substring(j), i) != 0) {
            console.warn('An empty statement was included, although it does not affect the result.');
        }
    }
}
function runLine(codeLine, lineNumber) {
    if (codeLine != "") {
        var codeLineAfter = codeLine.split(' ');
        switch (codeLineAfter[0]) {
            case "outf":
                allAquaScript[lineNumber].innerHTML += codeLineAfter[1];
                break;
            default:
                console.error(codeLineAfter[0] + ' does not exist.');
                break;
        }
        return 0;
    }
    else {
        return -1;
    }
}
