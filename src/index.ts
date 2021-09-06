//https://brasilapi.com.br/api/feriados/v1/${year}`

const mainText = document.querySelector('h2')!;
const sideText = document.querySelector('h3')!;

async function getHoliday(year:number): Promise<any>{
        try {
            const response:Response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
            const holidays:object[] = await response.json();

            return holidays;
        } catch (error) {
            console.log(error);
        }
    }

    
async function renderHolidays(): Promise<void>{
    try{
        const date = new Date()
        const year = date.getFullYear();
        let holidays:[] = [];
        holidays = await getHoliday(year)
        
        //Creating the node and adding it to the mainText element.
        const text = document.createTextNode(`2021 tem ${holidays.length} feriados!`)
        mainText.appendChild(text)

        holidays.forEach(holiday => console.log(holiday))
    }catch(error){
        console.log(error);
        
    }
}

renderHolidays()