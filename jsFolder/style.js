let text =`I'm a Front- <br/> End <br/> Developer`;

let profile_title = document.querySelector("#profile_title");
let index = 0;

setInterval(() => {
    profile_title.innerHTML= text.slice(0, index++);

    if(index > text.length) {
        index = 0;
    }
}, 500);