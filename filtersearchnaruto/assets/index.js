const personagens =
[
    {
        name:"Naruto",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Tsunade",
        gender:"Female",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Danzou",
        gender:"Male",
        status:"Dead",
        temp:"All"
    },
    {
        name:"Gaara",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Hidan",
        gender:"Male",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Kabuto",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Kaguya",
        gender:"Female",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Kakashi",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Rock Lee",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Madara",
        gender:"Male",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Minato",
        gender:"Male",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Neji",
        gender:"Male",
        status:"Dead",
        temp:"All"
    },
    {
        name:"Orochimaru",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Pain",
        gender:"Male",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Sai",
        gender:"Male",
        status:"Alive",
        temp:"Shippuden"
    },
    {
        name:"Sasori",
        gender:"Male",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Shikamaru",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Shino",
        gender:"Male",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Shisui",
        gender:"Male",
        status:"Dead",
        temp:"Shippuden"
    },
    {
        name:"Shizune",
        gender:"Female",
        status:"Alive",
        temp:"All"
    },
    {
        name:"Tenten",
        gender:"Female",
        status:"Alive",
        temp:"All"
    }
]

function filterPers() {
    let input = document.querySelector('#txt1');
    let filterValue = input.value.toUpperCase();
    let ul = document.querySelector('#list');
    let li = ul.getElementsByTagName('li');
    let i;
    for(i=0;i<li.length;i++) {
        var a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

var table = document.querySelector('#tabela');
var td = table.getElementsByTagName('td');
console.log(td.length)
//==============================================================
document.querySelector('#btn-all').addEventListener('click', e=> {
    filterAll()
})
//==============================================================
document.querySelector('#btn-allgender').addEventListener('click', e=> {
    filterAllGender()
 })
 //==============================================================
document.querySelector('#alive').addEventListener('click', e=> {
    filterAlive()
    /*let i;
    for(i=0;i<td.length;i++) {
        td[0].style.display='' //naruto
        td[1].style.display='none' //neji
        td[2].style.display='' //orochimaru
        td[3].style.display='none' //pain
        td[4].style.display='' //sai
        td[5].style.display='none' //sasori
        td[6].style.display='' //shikamaru
        td[7].style.display='' //shino
        td[8].style.display='none' //shisui
        td[9].style.display='' //shizune
        td[10].style.display='' //tenten
        td[11].style.display='' //tsunade
        td[12].style.display='none' //danzou
        td[13].style.display='' //gaara
        td[14].style.display='none' //hidan
        td[15].style.display='' //kabuto
        td[16].style.display='none' //kaguya
        td[17].style.display='' //kakashi
        td[18].style.display='' //lee
        td[19].style.display='none' //madara
        td[20].style.display='none' //minato
    }*/
    
})
//==============================================================
document.querySelector('#dead').addEventListener('click', e=> {
    filterDead()
    /*let i;
    for(i=0;i<td.length;i++) {
        td[0].style.display='none' //naruto
        td[1].style.display='' //neji
        td[2].style.display='none' //orochimaru
        td[3].style.display='' //pain
        td[4].style.display='none' //sai
        td[5].style.display='' //sasori
        td[6].style.display='none' //shikamaru
        td[7].style.display='none' //shino
        td[8].style.display='' //shisui
        td[9].style.display='none' //shizune
        td[10].style.display='none' //tenten
        td[11].style.display='none' //tsunade
        td[12].style.display='' //danzou
        td[13].style.display='none' //gaara
        td[14].style.display='' //hidan
        td[15].style.display='none' //kabuto
        td[16].style.display='' //kaguya
        td[17].style.display='none' //kakashi
        td[18].style.display='none' //lee
        td[19].style.display='' //madara
        td[20].style.display='' //minato
    }*/
})
//==============================================================

//==============================================================
document.querySelector('#female').addEventListener('click', e=> {
    filterFemale()
    /*let i;
    for(i=0;i<td.length;i++) {
        td[0].style.display='none' //naruto
        td[1].style.display='none' //neji
        td[2].style.display='none' //orochimaru
        td[3].style.display='none' //pain
        td[4].style.display='none' //sai
        td[5].style.display='none' //sasori
        td[6].style.display='none' //shikamaru
        td[7].style.display='none' //shino
        td[8].style.display='none' //shisui
        td[9].style.display='' //shizune
        td[10].style.display='' //tenten
        td[11].style.display='' //tsunade
        td[12].style.display='none' //danzou
        td[13].style.display='none' //gaara
        td[14].style.display='none' //hidan
        td[15].style.display='none' //kabuto
        td[16].style.display='' //kaguya
        td[17].style.display='none' //kakashi
        td[18].style.display='none' //lee
        td[19].style.display='none' //madara
        td[20].style.display='none' //minato
    }*/
})
//==============================================================
document.querySelector('#male').addEventListener('click', e=> {
    filterMale()
})
//==============================================================
function filterAll() {
    const newPersAll = personagens.filter(personagem => personagem);
    let i;
    for(i=0;i<newPersAll.length;i++) {
        td[i].style.display='';
    }
}
//==============================================================
var table = document.querySelector('#tabela');
var persDeadTd = table.getElementsByClassName('dead');
var persAliveTd = table.getElementsByClassName('alive');
var persFemaleTd = table.getElementsByClassName('female');
var persMaleTd = table.getElementsByClassName('male');

//==============================================================
function filterAlive() {
    let i;
    let newPersAlive = personagens.filter(personagem => personagem.status === 'Alive')
    for(i=0;i<newPersAlive.length;i++){
        persAliveTd[i].style.display='';
        persDeadTd[i].style.display='none';
        console.log(persAliveTd[i]);
    }
}
//==============================================================
function filterDead() {
    let i;
    let newPersDead = personagens.filter(personagem => personagem.status === 'Dead')
    for(i=0;i<newPersDead.length;i++){
        persDeadTd[i].style.display='';
        persAliveTd[i].style.display='none';
        console.log(persDeadTd[i]);
    }
}
//==============================================================
function filterAllGender() {
    let persAllGender = personagens.filter(personagem => personagem.gender);
    let i;
    for(i=0;i<persAllGender.length;i++) {
        td[i].style.display=''
    }
}
//==============================================================
function filterMale() {
    let persMale = personagens.filter(personagem => personagem.gender === 'Male')
    let i;
    for(i=0;i<persMale.length;i++){
        persFemaleTd[i].style.display='none';
        persMaleTd[i].style.display='';
        console.log(persMaleTd[i]);
        console.log(persMale.length)
    }
}
//==============================================================
function filterFemale() {
    let persFemale = personagens.filter(personagem => personagem.gender === 'Female')
    let i;
    for(i=0;i<persFemale.length;i++){
        persFemaleTd[i].style.display='';
        persMaleTd[i].style.display='none';
        //console.log(persFemaleTd[i]);
        //console.log(persFemale.length)
    }
}
//==============================================================