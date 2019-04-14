/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */


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

function DayClicked(e){  
    console.log(e) ; 
}

window.onload = function(){    
    let days = getDaysInMonth(3, 2019) ; 
    let content = document.createElement('div');
    content.innerHTML = `<label id  = "month"> Month: April</label>`;
    head.appendChild(content) ;  
    for(i = 0; i < days.length;i++){
        let dayContent = document.createElement('div') ; 
        let par = document.querySelector('#month'); 
        dayContent.innerHTML = `<label class = "days" onclick = "DayClicked(` + days[i].getDate() + `)">` + days[i].getDate()  + '</label>' ; 
        par.appendChild(dayContent) ;  
        // console.log(days[i].getDate()); 
    } 
}
   