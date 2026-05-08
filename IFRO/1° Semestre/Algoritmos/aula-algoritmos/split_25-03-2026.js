let email = "aoba@gmail.com"

let emailquebrado = email.split("@")

let tamanhoemail = emailquebrado.length 
console.log(emailquebrado)

if(tamanhoemail != 2 || tamanhoemail == 0 || tamanhoemail == 1){
    console.error("Email Inválido")
    process.exit(1)
}else{
    console.log("Email Valido")
}