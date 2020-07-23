const root = document.querySelector('#root')
const textTitle = 'Dificuldade'

// Tagged Template String
const title = Title`
    color: #82589F;
    font-size: 3.0rem;
    letter-spacing: 1.2px;
    margin-bottom: 4rem;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)