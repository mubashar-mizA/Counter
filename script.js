const resultBox  = document.querySelector('#resultBox')
let initialValue = 0
document.querySelector('#plus').addEventListener( 'click',  ()=>{
    initialValue += 1
    resultBox.innerHTML = `${initialValue}`
    console.log(initialValue);
}  )

document.querySelector('#minus').addEventListener( 'click',  ()=>{
    initialValue -= 1
    resultBox.innerHTML = `${initialValue}`
    if(initialValue < 0){
        initialValue = 0
        resultBox.innerHTML = `${initialValue}`
        alert(`cant count negative  values`);
        
    }
    console.log(initialValue);
    
}  )

document.querySelector('#reset').addEventListener( 'click',  ()=>{
    initialValue = 0
    resultBox.innerHTML = `${initialValue}`
}  )


document.querySelector('#refresh').addEventListener('click', ()=>{
    window.location.reload()
    alert('Page refreshed')
})