const form = document.getElementById("form")
const name = document.getElementById("name")
const cpf = document.getElementById("cpf")
// const gender = document.getElementById("gender")
const birthDate = document.getElementById("birth-date")
const cep = document.getElementById("cep")
const address = document.getElementById("address")
const district = document.getElementById("district")
const numberAddress = document.getElementById("number-address")
const state = document.getElementById("state")
const complement = document.getElementById("complement")
const city = document.getElementById("city")
const cell = document.getElementById("cell")
const email = document.getElementById("email")
const emailConfirmation = document.getElementById("email-confirmation")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {

    checkInputs();

    const formControls = form.querySelectorAll(".form-control")

    const formIsValid = [... formControls].every((formControl) => {
        return (formControl.className === "form-control success");
    });

    // Validação do submit
    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    } else {
        console.log("ERRO!");
        e.preventDefault();
    }

});

function checkInputs() {
    const nameValue = name.value;
    const cpfValue = cpf.value;
    // const genderContent = gender.content;
    const birthDateValue = birthDate.value;
    const cepValue = cep.value;
    const addressValue = address.value;
    const districtValue = district.value;
    const numberAddressValue = numberAddress.value;
    const complementValue = complement.value;
    const stateValue = state.value;
    const cityValue = city.value;
    const cellValue = cell.value;
    const emailValue = email.value;
    const emailConfirmationValue = emailConfirmation.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(nameValue === ""){
        setErrorFor(name, "O nome é obrigatório.");
    } else {
        setSuccessFor(name)
    }

    if(cpfValue === ""){
        setErrorFor(cpf, "O CPF é obrigatório.");
    } else {
        setSuccessFor(cpf)
    }

    // if(genderContent === ""){
    //     setErrorFor(gender, "O gênero é obrigatório.");
    // } else {
    //     setSuccessFor(gender)
    // }

    if(birthDateValue === ""){
        setErrorFor(birthDate, "A data de nscimento é obrigatória.");
    } else {
        setSuccessFor(birthDate)
    }

    if(cepValue === ""){
        setErrorFor(cep, "O CEP é obrigatório.");
    } else if (cepValue.length !== 9) {
        setErrorFor(cep, "Por favor, insira um CEP válido.");
    } else {
        setSuccessFor(cep)
    }

    if(addressValue === ""){
        setErrorFor(address, "Por favor, verifique o CEP.");
    } else {
        setSuccessFor(address)
    }

    if(districtValue === ""){
        setErrorFor(district, "Por favor, verifique o CEP.");
    } else {
        setSuccessFor(district)
    }

    if(numberAddressValue === ""){
        setErrorFor(numberAddress, "O número da residência é obrigatório.");
    } else {
        setSuccessFor(numberAddress)
    }
    
    if(complementValue === ""){
        setSuccessFor(complement);
    } else {
        setSuccessFor(complement)
    }

    if(stateValue === ""){
        setErrorFor(state, "Por favor, verifique o CEP.");
    } else {
        setSuccessFor(state)
    }

    if(cityValue === ""){
        setErrorFor(city, "Por favor, verifique o CEP.");
    } else {
        setSuccessFor(city)
    }

    if(cellValue === ""){
        setErrorFor(cell, "O celular é obrigatório.");
    } else {
        setSuccessFor(cell)
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (emailConfirmationValue === "") {
        setErrorFor(emailConfirmation, "A confirmação de e-mail é obrigatória.");
    } else if(!checkEmail(emailConfirmationValue)){
        setErrorFor(email, "Por favor, insira um email válido.");
    }else if (emailConfirmationValue !== emailValue) {
        setErrorFor(emailConfirmation, "Os e-mails não conferem.");
    } else {
        setSuccessFor(emailConfirmation);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }
    
    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    
    // Adicionar a mensagem de erro
    small.innerText = message;

    // Adicionar a classe de sucesso
    formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

// Checar validação do e-mail
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}