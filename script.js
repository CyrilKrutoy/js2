let symbol = prompt('Введите символ!');
symbol = (symbol === null) ?
    "Cancel" : (symbol === "" || symbol.length > 1) ?
        "" : (symbol.toLowerCase());

switch (symbol) {
    case "a":
    case "e":
    case "o":
        alert(symbol.toUpperCase());
        break;

    case "x":
    case "y":
        alert(symbol + symbol);
        break;

    case "s":
    case "b":
    case "q":
    case "m":
        let randomSymbol = 10 * Math.random();
        let numbersum = Math.trunc(randomSymbol + randomSymbol) || 1;
        alert(numbersum);
        break;

    case "":
        alert(Boolean(symbol));
        break;
    case "Cancel":
        alert("Ввод был отменен");
        break;
    default:
        let maximum = Math.max(10 * Math.random(), 10 * Math.random(), 10 * Math.random());
        alert(maximum);
}
