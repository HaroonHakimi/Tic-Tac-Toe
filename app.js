const title = document.querySelector(".board__title")
const allSquares = document.querySelectorAll(".board__square")

let currentPlayer = 'X'
let board = new Array(9)
let gameOver = false

allSquares.forEach((square, i) =>
{
    square.addEventListener("click", () => 
    {
        if (square.innerHTML || gameOver)
        {
            return
        }

        square.innerHTML = currentPlayer
        board[i] = currentPlayer

        if (checkWin())
        {
            title.innerHTML = `${currentPlayer} Won`
            return gameOver = true
        }

        if (checkTie())
        {
            title.innerHTML = `Draw`
            return gameOver = true
        }

        playerRotation()
        title.innerHTML = `${currentPlayer}'s turn`
    })
})

function checkWin()
{
    const winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ]

    for (let i = 0; i < winningPatterns.length; i++)
    {
        const matchingPatterns = winningPatterns[i]
        const symbol01 = board[matchingPatterns[0]]
        const symbol02 = board[matchingPatterns[1]]
        const symbol03 = board[matchingPatterns[2]]

        if (!symbol01 || !symbol02 || !symbol03)
        {
            continue
        }

        if (symbol01 === symbol02 && symbol02 === symbol03)
        {
            return true
        }
    }
}

function checkTie()
{
    for (let i = 0; i <board.length; i++)
    {
        if (!board[i])
        {
            return false
        }
    }
    return true
}

function restartGame()
{
    currentPlayer = 'X'
    let board = new Array(9)
    let gameOver = false
    allSquares.forEach((square) => 
    {
        square.innerHTML = ''
        title.innerHTML = `${currentPlayer}'s turn`
    })
}

function playerRotation()
{
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}