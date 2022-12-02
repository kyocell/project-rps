/////////////////////////////////////////////
///////// Written and Coded by Kyocell///////
/////////////////////////////////////////////

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset-btn');
const playBtn = document.querySelector('.play-btn');
const outcome = document.querySelector('.outcome-container');

document.querySelector('.main-game-container').style.display = 'none';
document.querySelector('.loading-screen-container').style.display = 'none';

var userCounter = 0
var aiCounter = 0
{
    {
        rock.addEventListener('click', () => {
        var Num = Math.floor(Math.random() * (3-0)+0);
        if(Num == 0) {
        } else if(Num == 1) {
            aiCounter++;
            let aiOutcomeLog = '<h1 style="color: #d9534f">AI WINS</h1>';
            outcome.innerHTML = aiOutcomeLog;

        } else if(Num == 2) {
            userCounter++;
            let userOutcomeLog = '<h1 style="color: #5cb85c">PLAYER WINS</h1>';
            outcome.innerHTML = userOutcomeLog;
    }
        document.querySelector('.aiscore-count').textContent = aiCounter;
        document.querySelector('.userscore-count').textContent = userCounter;
        });

        paper.addEventListener('click', () => {
            var Num = Math.floor(Math.random() * (3-0)+0);
            if(Num == 1) {
            } else if(Num == 2) {

                aiCounter++;
                let aiOutcomeLog = '<h1 style="color: #d9534f">AI WINS</h1>';
                outcome.innerHTML = aiOutcomeLog;
    
                } else if(Num == 0) {

                userCounter++;
                let userOutcomeLog = '<h1 style="color: #5cb85c">PLAYER WINS</h1>';
                outcome.innerHTML = userOutcomeLog;
        
                }
            document.querySelector('.aiscore-count').textContent = aiCounter;
            document.querySelector('.userscore-count').textContent = userCounter;
        });

        scissors.addEventListener('click', () => {
            var Num = Math.floor(Math.random() * (3-0)+0);
            if(Num == 2) {
            } else if(Num == 0) {

                aiCounter++;
                let aiOutcomeLog = '<h1 style="color: #d9534f">AI WINS</h1>';
                outcome.innerHTML = aiOutcomeLog;
        
                } else if(Num = 1) {

                userCounter++;
                let userOutcomeLog = '<h1 style="color: #5cb85c">PLAYER WINS</h1>';
                outcome.innerHTML = userOutcomeLog;
        
                }
            document.querySelector('.aiscore-count').textContent = aiCounter;
            document.querySelector('.userscore-count').textContent = userCounter;    
        });
    }
}

playBtn.addEventListener('click', () => {
    document.querySelector('.welcome-home-screen').style.display = 'none';
    document.querySelector('.loading-screen-container').style.display = '';
    setTimeout( () => {
        document.querySelector('.planet').style.display = 'none';
        document.querySelector('.main-game-container').style.display = '';
    }, 5000);
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})