buttonInscribe = document.getElementsByClassName('consult-inscribe');
buttonRemove = document.getElementsByClassName('consult-rem-item');
availableQuotas = document.getElementsByClassName('consult-space');
semesterButton = document.getElementById('consult-list');
semesterSelect = document.getElementsByClassName('consult-item');
consultButton = document.getElementById('consult-button');
consultList = document.getElementById('consult-list');
statusButton = document.getElementById('status-button');
statusList = document.getElementById('status-list');

statusButton.addEventListener('click', verMisAsignaturas, false);
consultButton.addEventListener('click', consultarAsignaturas, false);

function consultarAsignaturas(){
    consultList.classList.add('visible');
    statusList.classList.remove('visible');
}

function verMisAsignaturas(){
    statusList.classList.add('visible');
    consultList.classList.remove('visible');
    listUpdate();
}

for (let i = 0; i < buttonInscribe.length; i++) {
    buttonInscribe[i].addEventListener('click', () => inscribeSignature(i));
}

for (let i = 0; i < buttonRemove.length; i++) {
    buttonRemove[i].addEventListener('click', () => removeSignature(i));
}


function inscribeSignature(num){
    alert('Has inscrito la materia');
    availableQuotas[num].innerHTML = "29";
}

function removeSignature(num){
    alert('Has removido la materia');
    availableQuotas[num].innerHTML = "30";
}

for (let i = 0; i < semesterSelect.length; i++){
    semesterSelect[i].addEventListener('click', ()=> semesterSelection(i));
}

semesters = document.getElementsByClassName('consult-description');

function semesterSelection(num){
    switch(num){
        case 0:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 1:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 2:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 3:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 4:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 5:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 6:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 7:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
        case 8:
            listUpdate();
            semesters[num].classList.add('visible');
            semesters[num].classList.remove('hidden');
            break;
    }

}

function listUpdate(){
    for(i=0; i < semesters.length; i++){
        semesters[i].classList.remove('visible');
        semesters[i].classList.add('hidden');
    }
}