function setFigure(fieldId, figureName, figureColor, figureImage) {
    var field = document.getElementById(fieldId);

    figure = document.createElement("span");
    if (!figureImage) {
        figure.innerText = figureName;
        figure.setAttribute("class", figureColor);
    } else {
        ;
    }
    field.appendChild(figure);
}

function startFillChessTable(imageFlag) {
    var BLACK = "black", WHITE = "white";
    var startPosition = [
        ["A8", "Л", BLACK],
        ["B8", "К", BLACK],
        ["C8", "С", BLACK],
        ["D8", "Ф", BLACK],
        ["E8", "(К)", BLACK],
        ["F8", "С", BLACK],
        ["G8", "К", BLACK],
        ["H8", "Л", BLACK],
        ["A7", "П", BLACK],
        ["B7", "П", BLACK],
        ["C7", "П", BLACK],
        ["D7", "П", BLACK],
        ["E7", "П", BLACK],
        ["F7", "П", BLACK],
        ["G7", "П", BLACK],
        ["H7", "П", BLACK],
        ["A2", "П", WHITE],
        ["B2", "П", WHITE],
        ["C2", "П", WHITE],
        ["D2", "П", WHITE],
        ["E2", "П", WHITE],
        ["F2", "П", WHITE],
        ["G2", "П", WHITE],
        ["H2", "П", WHITE],
        ["A1", "Л", WHITE],
        ["B1", "К", WHITE],
        ["C1", "С", WHITE],
        ["D1", "Ф", WHITE],
        ["E1", "(К)", WHITE],
        ["F1", "С", WHITE],
        ["G1", "К", WHITE],
        ["H1", "Л", WHITE]
    ];

    startPosition.forEach(function (position) {
            setFigure(position[0], position[1], position[2], imageFlag);
        }
    );

}