import {holidayClass} from "./classes/RenderHoliday.js"

const mainText = document.querySelector('h2')!;

interface iHoliday{
    date:string,
    name:string,
    type:string,
}

async function getHoliday(year:number): Promise<object>{
        try {
            const response:Response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
            const holidays:iHoliday[] = await response.json();

            return holidays;
        } catch (error) {
            console.log(error);
        }
    }

    
async function renderHolidays(): Promise<void>{
    try{
        const date = new Date()
        const year = date.getFullYear();
        let holidays;
        holidays = await getHoliday(year)
         
        //Creating the node and adding it to the mainText element.
        const text = document.createTextNode(`2021 tem ${holidays.length} feriados!`)
        mainText.appendChild(text)

        for(const hd of holidays){

            const formatedDate = new Date(hd.date)
            console.log(formatedDate.getDate());
            
            let date = {
                day: formatedDate.getDate(),
                month: formatedDate.getMonth(),
                year: formatedDate.getFullYear()
            }
            let name = hd.name;
            let type = hd.type;

            
            const holiday = new holidayClass(date, name, type);



            holiday.render(holiday.date,holiday.name,holiday.type)
        }
    }catch(error){
        console.log(error);
    }
}
renderHolidays()