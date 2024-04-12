// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1')
const paper2 = document.querySelector('#p2')
const paper3 = document.querySelector('#p3')
const paper4 = document.querySelector('#p4')
const paper5 = document.querySelector('#p5')
const paper6 = document.querySelector('#p6')
const paper7 = document.querySelector('#p7')
const paper8 = document.querySelector('#p8')
const paper9 = document.querySelector('#p9')
const paper10 = document.querySelector('#p10')
const paper11 = document.querySelector('#p11')
const paper12 = document.querySelector('#p12')
const paper13 = document.querySelector('#p13')
const paper14 = document.querySelector('#p14')
const paper15 = document.querySelector('#p15')

// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let numOfPapers = 15;
let maxState = numOfPapers + 1;


function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-500px)";
    nextBtn.style.transform = "translateX(500px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

prevBtn.style.display = "none";

function goNext() {
    if(currentState < maxState) { 
        switch(currentState) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                prevBtn.style.display = "block";
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                break;
            case 12:
                paper12.classList.add("flipped");
                paper12.style.zIndex = 12;
                break;
            case 13:
                paper13.classList.add("flipped");
                paper13.style.zIndex = 13;
                break;
            case 14:
                paper14.classList.add("flipped");
                paper14.style.zIndex = 14;
                break;
            case 15:
                closeBook(false);
                paper15.classList.add("flipped");
                paper15.style.zIndex = 15;
                nextBtn.style.display = "none";
                break;
            default: 
                throw new Error("unkown state");    
        }

        currentState++;
    }
}



function goPrevious() {
    if(currentState > 1) {
        switch(currentState) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 15;
                prevBtn.style.display = "none";
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 14;
                break;
            case 4: 
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 13;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 12;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 11;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 10;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 9;
                break;
            case 9:
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 8;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 7;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 6;
                break;
            case 12:
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 5;
                break;
            case 13:
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 4;
                break;
            case 14:
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 3;
                break;
            case 15:
                paper14.classList.remove("flipped");
                paper14.style.zIndex = 2;
                break;
            case 16:
                openBook()
                paper15.classList.remove("flipped");
                paper15.style.zIndex = 1;
                nextBtn.style.display = "block";
                break;

            
        }

        currentState--;
    }
}

document.querySelectorAll('.detail-toggle').forEach(function(toggleButton) {
    toggleButton.addEventListener('click', function() {
        document.querySelectorAll('.detail-row').forEach(function(detail) {
            if (detail !== this.closest('tr').nextElementSibling && detail.style.display !== 'none') {
                detail.style.display = 'none'; // Close the detail view
                detail.previousElementSibling.querySelector('.detail-toggle').textContent = '🔽'; // Reset the toggle icon
            }
        }.bind(this));

        var detailContent = this.closest('tr').nextElementSibling;
        if (detailContent.style.display === 'none' || !detailContent.style.display) {
            detailContent.style.display = 'table-row'; // Show the detail view
            this.textContent = '🔼'; // Change the toggle icon
        } else {
            detailContent.style.display = 'none'; // Hide the detail view
            this.textContent = '🔽'; // Reset the toggle icon
        }
    });
});


