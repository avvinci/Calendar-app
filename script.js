/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */

let allTa = document.querySelectorAll(".ta") ; 

let head = document.querySelector('#title'); 
console.log(head) ; 
function getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    let date = new Date(year, month, 1);
    let days = [];
    console.log('month', month, 'date.getMonth()', date.getMonth())
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function saveText(e,id){
    console.log('saving'); 
    // console.log("saving ", e , id);
}
let id = 0 ;
function DayClicked(e, p = -1 ){  
    console.log(e ,id ) ; 
    // if(p == -1)
    id++ ; 
    var elem = document.getElementById("day" + e ); 
    elem.classList.add('selected') ; 
    var newelem = document.createElement("div");
    newelem.innerHTML = `<textarea class ="ta" placeholder="Enter note" onChange = "saveText()">  </textarea>  <button id = "button"> Add Note</button>`; 
    elem.insertAdjacentElement('afterend',newelem); 
    window.localStorage.setItem("day "+ e + " id " + id +"." , JSON.stringify(newelem.innerHTML)); 
    // let item = JSON.parse( window.localStorage.getItem("day " + e + " id " + id + ".")) ; 
    // console.log(item);
}


function getLocalStorage(){
    for(i = 0; i <= 31 ;i++){
        for(j = 0 ; j<= 20 ;j++){
            let itemId = "day " + i + " id " + j + "." ; 
            let item = ( window.localStorage.getItem(itemId)) ;             
            if(item ===  null){
                continue; 
            }
            // localStorage.removeItem(itemId) ; 
            id++ ; 
            var elem = document.getElementById("day" + i ); 
            elem.classList.add('selected') ; 
            var newelem = document.createElement("div");
            newelem.innerHTML = `<textarea class ="ta" placeholder="Enter note">  </textarea> <button id = "button"> Add Note </button>`; 
            elem.insertAdjacentElement('afterend',newelem); 
        }
    }
}
window.onload = function(){    
    // id = 0 ;
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
        dayContent.innerHTML = `<label class = "days" id = "day` + myday + `" onclick = "DayClicked(` + myday + `)">` + myday  + '</label> ' ; 
        par.appendChild(dayContent) ;  
        // console.log(days[i].getDate()); 
    } 
    getLocalStorage() ; 

}
   

console.log(allTa); 
// allTa.forEach(ta => ta.addEventListener('change' ,saveText()));
