const game =document.getElementById('game')
const scoreDisplay=document.getElementById('score')

const jeopardyCategories=[
    {
        genre:'WHO',
        questions:[
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'easy',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'medium',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'hard',
            },
        ],
    },
    {
        genre:'WHERE',
        questions:[
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'easy',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'medium',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'hard',
            },
        ],
    },
    {
        genre:'WHAT',
        questions:[
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'easy',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'medium',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'hard',
            },
        ],
    },
    {
        genre:'WHEN',
        questions:[
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'easy',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'medium',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'hard',
            },
        ],
    },
    {
        genre:'HOW MANY',
        questions:[
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'easy',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'medium',
            },
            {
                question:'Who wrote Harry Potter?',
                answers :['JK Rowling', 'JRR Tolkien'],
                correct:'JK Rowling',
                level:'hard',
            },
        ],
    },
]

let score=0

function addCategory(category)
{
    const column=document.createElement('div')
    column.classList.add('column')

    const genreTitle=document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML=category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question=>{        //har questions ke variable ko question naam diya hai
        const card=document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if(question.level==='easy')
        {
            card.innerHTML=100
        }
        if(question.level==='medium')
        {
            card.innerHTML=200
        }
        
        if(question.level==='hard')
        {
            card.innerHTML=300
        }
        card.setAttribute('data-question',question.question)
        card.setAttribute('data-answer-1',question.answers[0])
        card.setAttribute('data-answer-2',question.answers[1])
        card.setAttribute('data-correct',question.correct)
        card.setAttribute('data-value',card.getInnerHTML())

        card.addEventListener('click',flipcard)

    })
}


jeopardyCategories.forEach(category=>addCategory(category))


function flipcard(){
    this.innerHTML=""
    this.style.fontSize="15px"
    this.style.lineHeight="30px"
    const textDisplay=document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML=this.getAttribute('data-question')
    const firstButton=document.createElement('button')
    const secondButton=document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')

    firstButton.innerHTML=this.getAttribute('data-answer-1')
    secondButton.innerHTML=this.getAttribute('data-answer-2')

    firstButton.addEventListener('click',getResult)
    secondButton.addEventListener('click',getResult)
    this.append(textDisplay,firstButton,secondButton)

    const allCards=Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card=>card.removeEventListener('click',flipcard))

}

function getResult(){
    const allCards=Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card=>card.addEventListener('click',flipcard))

    const cardOfButton=this.parentElement
    if(cardOfButton.getAttribute('data-correct')==this.innerHTML)
    {
        score= score + parseInt(cardOfButton.getAttribute('data-value')) 
        scoreDisplay.innerHTML=score
        cardOfButton.removeEventListener('click',flipcard)
        cardOfButton.classList.add('correct-answer')
        setTimeout(()=>{
            while(cardOfButton.firstChild)
            {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML=cardOfButton.getAttribute('data-value')
        },100)   
    } else{
        cardOfButton.classList.add('wrong-answer')
        setTimeout(()=>{
            while(cardOfButton.firstChild)
            {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML=0
        },100) 
    }
    cardOfButton.removeEventListener('click',flipcard)
}
const hButton=document.getElementById("buttonh" )
hButton.addEventListener("click", myScript);

function myScript()
{
    window.open('index1.html')
    // window.location = 'index1.html';
}