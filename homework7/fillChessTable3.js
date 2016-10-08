var FIGURES = {
    king: ["Король", "king"],
    queen: ["Ферзь", "queen"],
    bishop: ["Слон", "bishop"],
    knight: ["Конь", "knight"],
    rook: ["Ладья", "rook"],
    pawn: ["Пешка", "pawn"]
};
var BLACK = "black", WHITE = "white";
var startPosition = [
    ["A8", FIGURES.rook, BLACK],
    ["B8", FIGURES.knight, BLACK],
    ["C8", FIGURES.bishop, BLACK],
    ["D8", FIGURES.queen, BLACK],
    ["E8", FIGURES.king, BLACK],
    ["F8", FIGURES.bishop, BLACK],
    ["G8", FIGURES.knight, BLACK],
    ["H8", FIGURES.rook, BLACK],
    ["A7", FIGURES.pawn, BLACK],
    ["B7", FIGURES.pawn, BLACK],
    ["C7", FIGURES.pawn, BLACK],
    ["D7", FIGURES.pawn, BLACK],
    ["E7", FIGURES.pawn, BLACK],
    ["F7", FIGURES.pawn, BLACK],
    ["G7", FIGURES.pawn, BLACK],
    ["H7", FIGURES.pawn, BLACK],
    ["A2", FIGURES.pawn, WHITE],
    ["B2", FIGURES.pawn, WHITE],
    ["C2", FIGURES.pawn, WHITE],
    ["D2", FIGURES.pawn, WHITE],
    ["E2", FIGURES.pawn, WHITE],
    ["F2", FIGURES.pawn, WHITE],
    ["G2", FIGURES.pawn, WHITE],
    ["H2", FIGURES.pawn, WHITE],
    ["A1", FIGURES.rook, WHITE],
    ["B1", FIGURES.knight, WHITE],
    ["C1", FIGURES.bishop, WHITE],
    ["D1", FIGURES.queen, WHITE],
    ["E1", FIGURES.king, WHITE],
    ["F1", FIGURES.bishop, WHITE],
    ["G1", FIGURES.knight, WHITE],
    ["H1", FIGURES.rook, WHITE]
];

function setFigure(fieldId, figureObj, figureColor, figureImageViewFlag) {
    var field = document.getElementById(fieldId);
    var figureName = figureObj[0];
    var figureFile = figureObj[1];
    var figure = document.createElement("span");

    if (!figureImageViewFlag) {
        figure.innerText = figureName;
        figure.setAttribute("class", figureColor);
    } else {
        image = document.createElement("img");
        image.setAttribute("src", "images/" + figureColor + figureFile + ".png");
        image.setAttribute("alt", figureName);
        figure.appendChild(image);
    }
    field.appendChild(figure);
}

function fillChessTable(positions, imageViewFlag) {

    positions.forEach(function (position) {
            setFigure(position[0], position[1], position[2], imageViewFlag);
        }
    );

}