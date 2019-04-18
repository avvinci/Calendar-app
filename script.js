/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */


// let allTa = document.querySelectorAll(".ta") ; 
let head = document.querySelector('#title'); 

///////////////////////////////////////////////////////////////////////////////////


function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    // console.log('month', month, 'date.getMonth()', date.getMonth())
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function saveText(elem , e , id){
    // console.log('saving');
    // console.log(elem) ; 
    // console.log(e.id);
    let textId = "dayText " + e + " id " + id+  "." ; 
    let text = window.localStorage.getItem(textId); 
    if(text !== null ){
        window.localStorage.removeItem(textId) ; 
    }
        window.localStorage.setItem(textId,elem.value);  
}


let id = 0 ;
function DayClicked(e){  
    // console.log(e ,id ); 
    id++ ; 
    var elem = document.getElementById("day" + e ); 
    elem.classList.add('selected') ; 
    var newelem = createTextArea(e,id) ; 
    elem.insertAdjacentElement('afterend',newelem);
    let itemId = "day " + e + " id " + id + "." ;  
    window.localStorage.setItem(itemId, JSON.stringify(newelem.innerHTML)); 
    // console.log(item);
}

function createTextArea(e,id){
    var newelem = document.createElement("div");
    newelem.innerHTML = `<textarea class ="ta" id = "TA ` + e + `" "` + id + `" placeholder="Enter note" onchange = "saveText(this ,` + e + `,` + id + `)">  </textarea> <button id = "button"> Add Note </button>`; 
    return newelem ;      
}

function getLocalStorage(){
    for(i = 0; i <= 31 ;i++){
        for(j = 0 ; j<= 20 ;j++){
            let itemId = "day " + i + " id " + j + "." ; 
            let item = window.localStorage.getItem(itemId);             
            if(item ===  null){
                continue; 
            }
            // increase id -> since all starting id's will be taken by local storage. 
            id++ ; 
            var elem = document.getElementById("day" + i ); 
            elem.classList.add('selected') ; 

            let textId = "dayText " + i + " id " + j + "." ; 
            let text = window.localStorage.getItem(textId);    

            var newelem = createTextArea(i,j) ; 
            newelem.firstChild.value = text; 
            // console.log(newelem.firstChild.value) ;
            elem.insertAdjacentElement('afterend',newelem); 
 

        }
    }

}

window.onload = function(){    
    let days = getDaysInMonth(3, 2019) ; 
    let content = document.createElement('div');
    content.className = "monthLabel" ; 
    content.innerHTML = `<label class = "month" id = "month" >April 2019</label>`;
    head.appendChild(content) ;

    for(i = 0; i < days.length;i++){
        let dayContent = document.createElement('div') ; 
        dayContent.className = "dayLabel" ; 
        let par = document.querySelector('#month'); 
        let myday = days[i].getDate() ; 
        dayContent.innerHTML = 
        `<label class = "days" id = "day` + myday + `" onclick = "DayClicked(` + myday + `)">` + myday  + '</label> ' ; 
        par.appendChild(dayContent) ;  
        // console.log(days[i].getDate()); 
    } 

    getLocalStorage() ; 

}

///////////////////////////////////////////////////////////////////////////////////////////



// console.log(allTa); 
// allTa.forEach(ta => ta.addEventListener('change' ,saveText()));
