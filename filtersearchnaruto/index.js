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
})
//==============================================================
document.querySelector('#dead').addEventListener('click', e=> {
    filterDead()
})
//==============================================================
document.querySelector('#female').addEventListener('click', e=> {
    filterFemale()
})
//==============================================================
document.querySelector('#male').addEventListener('click', e=> {
    filterMale()
})
document.querySelector('#btn-alltemp').addEventListener('click', e=> {
    filterAllTemp()
})
document.querySelector('#shippuden').addEventListener('click', e=> {
    filterShippuden()
})
//==============================================================
function filterAll() {
    let newPersAll = personagens.filter(personagem => personagem);
    let i;
    for(i=0;i<newPersAll.length;i++) {
        td[i].style.display='';
    }
}
//==============================================================
function filterAllTemp() {
    //let persAllTemp = personagens.filter(personagem => personagem.temp === 'All');
    isAllTemp()
}
function filterShippuden() {
    //let persShippuden = personagens.filter(personagem => personagem.temp === 'Shippuden');
    isShippuden()
}
//==============================================================
var table = document.querySelector('#tabela');
var persDeadTd = table.getElementsByClassName('dead');
var persAliveTd = table.getElementsByClassName('alive');
var persFemaleTd = table.getElementsByClassName('female');
var persMaleTd = table.getElementsByClassName('male');
var persAllTempTd = table.getElementsByClassName('all');
var persShippuden = table.getElementsByClassName('shippuden');
//==============================================================
function isAllTemp() {
    let i;
    for(i=0;i<persAllTempTd.length;i++) {
        persAllTempTd[i].style.display = '';
    }
    for(i=0;i<persShippuden.length;i++) {
        persShippuden[i].style.display = 'none';
    }
}
//==============================================================
function isShippuden() {
    let i;
    for(i=0;i<persAllTempTd.length;i++) {
        persAllTempTd[i].style.display = 'none';
    }
    for(i=0;i<persShippuden.length;i++) {
        persShippuden[i].style.display = '';
    }
}
//==============================================================
function isAlive() {
    let i;
    for(i=0;i<persAliveTd.length;i++){
        persAliveTd[i].style.display='';
    }
    for(i=0;i<persDeadTd.length;i++){
        persDeadTd[i].style.display='none';
    }
}
//==============================================================
function isDead() {
    let i;
    for(i=0;i<persAliveTd.length;i++){
        persAliveTd[i].style.display='none';
    }
    for(i=0;i<persDeadTd.length;i++){
        persDeadTd[i].style.display='';
    }
}
//==============================================================
function isFemale() {
    let i;
    for(i=0;i<persMaleTd.length;i++){
        persMaleTd[i].style.display='none';
    }
    for(i=0;i<persFemaleTd.length;i++){
        persFemaleTd[i].style.display='';
    }
}
//==============================================================
function isMale() {
    let i;
    for(i=0;i<persMaleTd.length;i++){
        persMaleTd[i].style.display='';
    }
    for(i=0;i<persFemaleTd.length;i++){
        persFemaleTd[i].style.display='none';
    }
}
//==============================================================
function filterAlive() {
    //let newPersAlive = personagens.filter(personagem => personagem.status === 'Alive')
    isAlive()
    //console.log(persAliveTd[i])
}
//==============================================================
function filterDead() {
    //let newPersDead = personagens.filter(personagem => personagem.status === 'Dead')
    isDead()
    //console.log(persDeadTd[i]);
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
    //let persMale = personagens.filter(personagem => personagem.gender === 'Male')
    isMale()
}
//==============================================================
function filterFemale() {
    //let persFemale = personagens.filter(personagem => personagem.gender === 'Female')
    isFemale()
}
//==============================================================