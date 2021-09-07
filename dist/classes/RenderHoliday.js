export class holidayClass {
    constructor(date, name, type) {
        this.date = date;
        this.name = name;
        this.type = type;
    }
    render(d, n, t) {
        const date = `${d.day}/${d.month}/${d.year}`;
        const cont = document.getElementById('cont');
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = date;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = n;
        li.append(p);
        li.classList.add('list-group-item');
        cont.append(li);
    }
}
