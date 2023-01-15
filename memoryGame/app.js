document.addEventListener('DOMContentLoaded',()=>{

    const cardArray = [
        {
            name:'fries',
            img:'https://images.unsplash.com/photo-1666115883713-c5766e9d668e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjU0Ng&ixlib=rb-4.0.3&q=80&w=100'
        },
        {
            name:'fries',
            img:'https://images.unsplash.com/photo-1666115883713-c5766e9d668e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjU0Ng&ixlib=rb-4.0.3&q=80&w=100'
        },
        {
            name:'cheeseburger',
            img:'https://images.unsplash.com/photo-1665405139017-b0e8a1687f21?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjgwMA&ixlib=rb-1.2.1&q=80&w=100'
        },
        {
            name:'cheeseburger',
            img:'https://images.unsplash.com/photo-1665405139017-b0e8a1687f21?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjgwMA&ixlib=rb-1.2.1&q=80&w=100'
        },
        {
            name:'hotdog',
            img:'4.jpeg'
        },
        {
            name:'hotdog',
            img:'4.jpeg'
        },
        {
            name:'ice-cream',
            img:'1.jpeg'
        },
        {
            name:'ice-cream',
            img:'1.jpeg'
        },
        {
            name:'milkshake',
            img:'2.jpeg'
        },
        {
            name:'milkshake',
            img:'2.jpeg'
        },
        {
            name:'pizza',
            img:'3.jpeg'
        },
        {
            name:'pizza',
            img:'3.jpeg'
        },
        
    ]

    cardArray.sort(()=> 0.5-Math.random())
    const grid= document.querySelector('.grid') 
    const resultDisplay= document.querySelector('#result')
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[];

    function createBoard()
    {
        for(let i=0; i<cardArray.length; i++)
        {
            var card=document.createElement('img')
            card.setAttribute('src','https://images.unsplash.com/photo-1667327940053-ec9d7f8455c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjcxMQ&ixlib=rb-4.0.3&q=80&w=100')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch()
    {
        var cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optionTwoId=cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1])
        {
            alert("You found a match")
            cards[optionOneId].setAttribute('src','white1.png')
            cards[optionTwoId].setAttribute('src','white1.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            // var cards=document.querySelectorAll('')
            cardsWon.push(cardsChosen)
        }
        else
        {
            alert("Sorry , Try again!")
            cards[optionOneId].setAttribute('src','https://images.unsplash.com/photo-1667327940053-ec9d7f8455c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjcxMQ&ixlib=rb-4.0.3&q=80&w=100')
            cards[optionTwoId].setAttribute('src','https://images.unsplash.com/photo-1667327940053-ec9d7f8455c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Nzk0MjcxMQ&ixlib=rb-4.0.3&q=80&w=100')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.innerHTML=cardsWon.length
        if(cardsWon.length===cardArray.length/2)
        {
            resultDisplay.textContent  ="Conratulations! You found them all"
        }
    }

    function flipCard()
    {
        var cardId=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length===2)
        {
            setTimeout(checkForMatch,500)
        }
    }

    createBoard() 
})