export class holidayClass{
    constructor(
        readonly date:string,
        readonly name:string,
        readonly type:string,
    ){}

    render(d: string, n:string, t: string){
        const bro = document.getElementById('bro')

        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = n;

        li.append(h4)
        
        const p = document.createElement('p');
        p.innerText = d;
        li.append(p);

        bro.append(li)
        
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