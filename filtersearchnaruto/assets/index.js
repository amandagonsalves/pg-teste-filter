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
/*function selectTd() {
    let i;
    for(i=0;i<td.length;i++) {
        td[i].style.display=''
    }*/
    /*if(filterAll===true) {
        td[i].style.display='none'
    } else if(filterAlive()===true) {
        td[i].style.display='none'
    } else if(filterDead()===true) {

    } else if(filterAllGender()===true) {

    } else if(filterFemale()===true) {

    } else if(filterMale()===true) {

    }
}
selectTd()*/
/* INDEX
0 naruto
1 neji
2 orochi
3



*/ 
document.querySelector('#btn-all').addEventListener('click', e=> {
    let i;
    for(i=0;i<td.length;i++) {
        td[i].style.display=''
    }
})
document.querySelector('#alive').addEventListener('click', e=> {
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
    filterAlive()
})
document.querySelector('#dead').addEventListener('click', e=> {
    let i;
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
    }
})
document.querySelector('#btn-allgender').addEventListener('click', e=> {
    let i;
    for(i=0;i<td.length;i++) {
        td[i].style.display=''
    }
})
document.querySelector('#female').addEventListener('click', e=> {
    let i;
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
    }
})
document.querySelector('#male').addEventListener('click', e=> {
    let i;
    for(i=0;i<td.length;i++) {
        td[0].style.display='' //naruto
        td[1].style.display='' //neji
        td[2].style.display='' //orochimaru
        td[3].style.display='' //pain
        td[4].style.display='' //sai
        td[5].style.display='' //sasori
        td[6].style.display='' //shikamaru
        td[7].style.display='' //shino
        td[8].style.display='' //shisui
        td[9].style.display='none' //shizune
        td[10].style.display='none' //tenten
        td[11].style.display='none' //tsunade
        td[12].style.display='' //danzou
        td[13].style.display='' //gaara
        td[14].style.display='' //hidan
        td[15].style.display='' //kabuto
        td[16].style.display='none' //kaguya
        td[17].style.display='' //kakashi
        td[18].style.display='' //lee
        td[19].style.display='' //madara
        td[20].style.display='' //minato
    }
})
function filterAll() {
    const newPersAll = personagens.filter(personagem => personagem);
}
filterAll();
function filterAlive() {
    let i;
    var newPersAlive = personagens.filter(personagem => personagem.status === 'Alive')
    var table = document.querySelector('#tabela')
    var persDeadTd = table.getElementsByClassName('dead')
    var persAliveTd = table.getElementsByClassName('alive')
    for(i=0;i<newPersAlive.length;i++){
        
        //var indices = newPersAlive.indexOf('Alive',[i])
        persAliveTd[i].style.display='';
        persDeadTd[i].style.display='none';
        console.log(persAliveTd[i]);
        
    }
}
filterAlive()
function filterDead() {
    personagens.filter(personagem => personagem.status === 'Dead')
}
function filterAllGender() {
    personagens.filter(personagem => personagem.gender)
}
function filterMale() {
    personagens.filter(personagem => personagem.gender === 'Male')
}
function filterFemale() {
    personagens.filter(personagem => personagem.gender === 'Female')
}