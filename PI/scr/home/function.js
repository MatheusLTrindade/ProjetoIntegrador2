// TODO:Mudar URL
// history.pushState({}, null, '../../DevelopersBank');

function back_to_top(){
    window.location.href = href="#"
}

function RedirecionamentoComHistorico() {
    window.location.href = href="https://google.com"
}

function RedirectionWhats() {
    window.location.href = href="https://wa.me/+5511957905010"
}

function RedirectionInsta() {
    window.location.href = href="https://www.instagram.com/theteu_lt"
}

function RedirectionFace() {
    window.location.href = href="https://www.facebook.com/"
}

function transf(){
    window.location.href= href="#1"
}

function RedirectionCadastro(){
window.location.href = "cadastro.html"
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }