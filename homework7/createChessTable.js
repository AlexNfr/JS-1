var COLOR = {
    WHITE: "white",
    BLACK: "black"
};
var LINES = {
    HEAD:  {
        TAG: "thead"
    },
    GAME: {
        TAG: "tr",
        NAMES: ["8", "7", "6", "5", "4", "3", "2", "1"]
    },
    FOOT:  {
        TAG: "tfoot"
    }
};
var COLUMN_NAMES = ["A", "B", "C", "D", "E", "F", "G", "H"];

/**
 * Вспомогательная функция определения цвета ячейки (четная/нечетная)
 * @param num
 * @return {string}
 */
function getFieldColorByNum(num) {
    return (!(num % 2) ? COLOR.WHITE : COLOR.BLACK);
}

/**
 * Формирование строки шахматной доски
 *
 * @param   row         элемент объекта LINES
 * @param   rowNum      индекс формируемой строки (0..7 - сверху-вниз)
 * @return  {Element}
 */
function createChessRow(row, rowNum) {
    var rowTag = row.TAG;
    var rowName, colName;
    var isGamingRow = (!!rowNum);                       // флаг игровой строки (true, если передан индекс строки)
    var fieldTag = (isGamingRow ? "td" : "th");
    var chessRow = document.createElement(rowTag);
    var chessRowNameL = document.createElement("th");
    var chessRowField;
    var chessRowNameR = document.createElement("th");

    if (!isGamingRow || ((rowNum >=0) && (rowNum <= 7))) {
        chessRow.appendChild(chessRowNameL);
        if (isGamingRow) {
            rowName = row.NAMES[rowNum];
            chessRowNameL.innerText = rowName;
        }

        for (var colNum in COLUMN_NAMES) {
            chessRowField = document.createElement(fieldTag);
            colName = COLUMN_NAMES[colNum];
            if (isGamingRow) {
                chessRowField.setAttribute("class", getFieldColorByNum(Number(rowNum) + Number(colNum)) );
                chessRowField.setAttribute("id", colName + rowName);
            } else {
                chessRowField.innerText = colName;
            }
            chessRow.appendChild(chessRowField);
        }

        chessRow.appendChild(chessRowNameR);
        if (isGamingRow) {
            chessRowNameR.innerText = rowName;
        }
    } else {
        chessRow = false;
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

    chessTable.appendChild( createChessRow(LINES.HEAD) );

    for (var rowNum in LINES.GAME.NAMES) {
        chessTable.appendChild( createChessRow(LINES.GAME, rowNum) );
    }

    chessTable.appendChild( createChessRow(LINES.FOOT) ) ;

    element.appendChild(chessTable);

}

