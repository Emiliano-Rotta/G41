const btn = document.querySelector("button")
var valor = document.querySelector('#input')
var par = document.querySelector('#secret-result')


btn.addEventListener("click", function() {
    if (valor.value === 'password-secreto'){
        par.innerHTML = 'lo lograste'
    } else {
        par.innerHTML = 'No lo lograste'
    }
})

