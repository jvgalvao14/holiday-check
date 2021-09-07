export class holidayClass {
    constructor(date, name, type) {
        this.date = date;
        this.name = name;
        this.type = type;
    }
    render(d, n, t) {
        const cont = document.getElementById('cont');
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = d;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = n;
        li.append(p);
        li.classList.add('list-group-item');
        cont.append(li);
    }
}
// <!-- <div class="d-flex gap-2 w-100 justify-content-between">
//     <div>
//         <h6 class="mb-0" id="date">
//             List group item heading
//         </h6>
//         <p class="mb-0 opacity-75" id="name">
//             Some placeholder content in a paragraph.
//         </p>
//     </div>
//     <small class="opacity-50 text-nowrap" id="type"
//         >now</small
//     >
// </div> -->
