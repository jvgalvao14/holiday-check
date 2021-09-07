export class holidayClass{
    constructor(
        readonly date:string,
        readonly name:string,
        readonly type:string,
    ){}

    render(d: string, n:string, t: string){
        const cont = document.getElementById('cont')

        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = d;

        li.append(h4)
        
        const p = document.createElement('p');
        p.innerText = n;
        li.append(p);
        li.classList.add('list-group-item')
        cont.append(li)
        
    }

}
