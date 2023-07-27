let form = document.getElementById("form")


let message = document.getElementById("message")

form.addEventListener('submit',function(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    console.log(name)
    let email = document.getElementById("email").value
    console.log(email)
})