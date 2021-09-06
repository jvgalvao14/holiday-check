//https://brasilapi.com.br/api/feriados/v1/${year}`

async function getHoliday(year:number): Promise<object[]>{
        try {
            const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
            const holidays:object[] = await response.json();

            console.log(holidays);
            
            return holidays;
        } catch (error) {
            console.log(error);
            
        }
    }

getHoliday(2021);


