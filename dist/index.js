//https://brasilapi.com.br/api/feriados/v1/${year}`
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getHoliday(year) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
            const holidays = yield response.json();
            console.log(holidays);
            return holidays;
        }
        catch (error) {
            console.log(error);
        }
    });
}
getHoliday(2021);
