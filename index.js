const split = () =>{
    let total = parseInt(document.getElementById('total').value)
    let person = parseInt(document.getElementById('person').value)
    let taxes = document.getElementById('taxs')

    if(taxes.value === ""){
        const result = total/person
        document.getElementById('costPerson').innerHTML = result.toFixed()
    } else {
        let tax = parseInt(taxes.value)
        const result = (total + ((tax * total)/100))/person
        document.getElementById('costPerson').innerHTML = result.toFixed()
    }
}

const sptBtn = document.getElementById('splitbtn')
sptBtn.addEventListener('click', (ev) =>{
    ev.preventDefault()
    split()
})

const rstBtn = document.getElementById('resetbtn')
rstBtn.addEventListener('click', (ev) =>{
    ev.preventDefault()
    document.querySelector('form').reset()
    document.getElementById('costPerson').innerHTML = '0'
})
