"use strict";
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
const mainText = document.querySelector('h2');
const sideText = document.querySelector('h3');
function getHoliday(year) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
            const holidays = yield response.json();
            return holidays;
        }
        catch (error) {
            console.log(error);
        }
    });
}
function renderHolidays() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const date = new Date();
            const year = date.getFullYear();
            let holidays = [];
            holidays = yield getHoliday(year);
            //Creating the node and adding it to the mainText element.
            const text = document.createTextNode(`2021 tem ${holidays.length} feriados!`);
            mainText.appendChild(text);
            holidays.forEach(holiday => console.log(holiday));
        }
        catch (error) {
            console.log(error);
        }
    });
}
renderHolidays();
