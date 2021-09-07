export class holidayClass{
    constructor(
        readonly date:{
            day:number,
            month:number,
            year:number
        },
        readonly name:string,
        readonly type:string,
    ){}

    render(d: {
            day:number,
            month:number,
            year:number
        }, n:string, t: string){

        const date = `${d.day}/${d.month}/${d.year}`
        const cont = document.getElementById('cont')
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = date;

        li.append(h4)
        
        const p = document.createElement('p');
        p.innerText = n;
        li.append(p);
        li.classList.add('list-group-item')
        cont.append(li)
        
    }

}
