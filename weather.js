const getElementByIndex = (arr, index) => arr[index];
console.log(getElementByIndex(['a', 'b', 'c', 'd'], 3));

const getWeatherByCode = function (code, decode) {
    return decode(code);
};
const decode = function (code) {
    switch (code) {
        case "SQ":
            return "шквал";
            case "PO":
                return "вихрь";
                case "BR":
                    return "пыльная буря";
                    case "FC":
                        return "торнадо"; 
                        default:
                            return "нет такого кода";
    }
};
console.log(decode("SQQ"));
console.log("getWeatherByCode ==>", getWeatherByCode("PO", decode));
