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
function selectTd() {
    let i;
    for(i=0;i<td.length;i++) {
        td[i].style.display=''
    }
    /*if(filterAll===true) {
        td[i].style.display='none'
    } else if(filterAlive()===true) {
        td[i].style.display='none'
    } else if(filterDead()===true) {

    } else if(filterAllGender()===true) {

    } else if(filterFemale()===true) {

    } else if(filterMale()===true) {

    }*/
}
selectTd()

function filterAll() {
    const newPersAll = personagens.filter(personagem => personagem)
    console.log(newPersAll)
}
filterAll()
function filterAlive() {
    var newPersAlive = personagens.filter(personagem => personagem.status === 'Alive')
    console.log(newPersAlive)
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