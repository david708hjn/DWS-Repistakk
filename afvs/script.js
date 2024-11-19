let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("Vitej na této stránce, Lukáš")   
})

//2
let second = document.getElementById('second')

second.addEventListener('click', function(){
    this.textContent = "Nová stránka"
})

function showText() {
    const button = document.getElementById('third');   
    button.textContent = 'Ahoj, teď mě vidíš!';   
}

//3
document.getElementById('third').textContent = '';   

//4
document.getElementById('fourth').onclick = function() {
    document.getElementById('ukolTitle').style.display = 'block'; 
    document.getElementById('text').style.display = 'block'; 
};

//5
function greetUser() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('greetingMessage').textContent = name 
        ? `Ahoj, ${name}! Těší mě, že tě vidím.` 
        : 'Prosím, zadej své jméno.';
}

//7
    const hoverButton = document.getElementById('hoverButton');
        
    hoverButton.addEventListener('mouseenter', () => {
            hoverButton.textContent = 'Text se změnil!';
    });

    hoverButton.addEventListener('mouseleave', () => {
         hoverButton.textContent = 'Najed na mě!';
    });

    //8
function updateTime() {
    const now = new Date();  
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}  
    const timeString = now.toLocaleTimeString('cs-Cz', options); 
    document.getElementById('currentTime').textContent = timeString; 
}
    

document.getElementById('updateButton').addEventListener('click', updateTime);


updateTime();

//9
function zobrazDatum() {
    const dnes = new Date();  
    const formatovaneDatum = dnes.toLocaleDateString('cs-CZ');  
    document.getElementById('datum').innerText = `Aktuální datum: ${formatovaneDatum}`; 
}
//10
function pridatTri() {  
    let vstup = document.getElementById("cislo").value  
    let vysledek = parseFloat(vstup) + 3; document.getElementById("vysledek").innerText = "výsledek = " + vysledek ; 
}

//11
function sectiCisla() {
    let cislo1 = document.getElementById("cislo1").value; 
    let cislo2 = document.getElementById("cislo2").value;  
    let vysledek = parseFloat(cislo1) + parseFloat(cislo2);  
    document.getElementById("vysledek2").innerText = "Výsledek: " + vysledek; 
}

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const novyTask = document.createElement('li');
    novyTask.textContent = taskInput.value;

    novyTask.addEventListener('click', () => {
        taskList.removeChild(novyTask);
    });

    taskList.appendChild(novyTask);
    taskInput.value = '';
});
