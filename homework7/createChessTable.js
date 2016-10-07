function fieldColor(num) {
    return (!(num % 2) ? "white" : "black");
}

function createChessRow(rowNum, tag) {
    var chessRow = document.createElement(tag);
    var chessRowName = document.createElement("th");
    var chessRowName2 = document.createElement("th");
    var chessRowField;
    var isGamingRow = (tag == "tr");
    var tag2 = (isGamingRow ? "td" : "th");
    var colNames = "ABCDEFGH";

    chessRow.appendChild(chessRowName);
    if (isGamingRow) {
        chessRowName.innerText = rowNum;
    }

    for (var colNum = 0; colNum < 8; colNum++) {
        chessRowField = document.createElement(tag2);
        colName = colNames.charAt(colNum);
        if (isGamingRow) {
            chessRowField.setAttribute("class", fieldColor(rowNum + colNum));
            chessRowField.setAttribute("id", colName + rowNum);
        } else {
            chessRowField.innerText = colName;
        }
        chessRow.appendChild(chessRowField);
    }

    chessRow.appendChild(chessRowName2);
    if (isGamingRow) {
        chessRowName2.innerText = rowNum;
    }

    return chessRow;
}

function createChessTable(element) {
    var chessTableWrapper = document.createElement("div");
    var chessTable = document.createElement("table");
    var chessTableCaption = document.createElement("caption");

    chessTableWrapper.setAttribute("class", "chessTable");
    chessTableWrapper.appendChild(chessTable);

    chessTable.setAttribute("class", "chessTable");
    chessTable.appendChild(chessTableCaption);
    chessTableCaption.innerText = "Шахматная доска";

    chessTable.appendChild(createChessRow("", "thead"));

    for (var rowNum = 8; rowNum >= 1; rowNum--) {
        chessTable.appendChild(createChessRow(rowNum, "tr"));
    }

    chessTable.appendChild(createChessRow("", "tfoot"));

    element.appendChild(chessTable);

}

