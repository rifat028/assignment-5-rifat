function getValue(id){
    return parseInt(document.getElementById(id).innerText) 
}
function setValue(id,currentValue,change){
    document.getElementById(id).innerText=currentValue+change
}


const addHearts = document.getElementsByClassName('add-heart')
for(const addHeart of addHearts){
    addHeart.addEventListener('click', function (){
        const heartCount=getValue('heart-count')
        const addValue=1
        setValue('heart-count',heartCount,addValue)
    })
}

const calls = document.getElementsByClassName('call-btn')
for(const call of calls){
    call.addEventListener('click', function (event){
        const serviceName=call.parentElement.parentElement.getElementsByTagName('div')[3].getElementsByTagName('p')[0].innerText
        const serviceNo=call.parentElement.parentElement.getElementsByTagName('div')[3].getElementsByTagName('h1')[0].innerText
        const callAlert='📞you are calling '+serviceName+' at '+serviceNo
        alert(callAlert)
    })
}


