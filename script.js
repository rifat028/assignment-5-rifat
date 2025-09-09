function getValue(id){
    return parseInt(document.getElementById(id).innerText) 
}
function setValue(id,currentValue,change){
    document.getElementById(id).innerText=currentValue+change
}

function addHistory(serviceName,serviceNo){
    const historyContainer=document.getElementById('history-container')
    const timeNow = new Date().toLocaleTimeString()
    const historyChield=`
        <div class=" p-4 rounded-lg bg-[#FAFAFA] mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
                <h2 class="text-xs md:text-[18px] font-bold">${serviceName}</h2>
                <h3 class="text-xs md:text-[18px] text-gray-700">${serviceNo}</h3>
            </div>
            <div class="text-xs md:text-[18px] mt-2 md:mt-0">${timeNow}</div>
        </div>
    `
    historyContainer.innerHTML=historyChield+historyContainer.innerHTML
}


const addHearts = document.getElementsByClassName('add-heart')
for(const addHeart of addHearts){
    addHeart.addEventListener('click', function (){
        const heartCount=getValue('heart-count')
        const addValue=1
        setValue('heart-count',heartCount,addValue)
    })
}

const copyBtns = document.getElementsByClassName('copy-btn')
for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click', async () => {
        const serviceNo=copyBtn.parentElement.parentElement.getElementsByClassName('service-no')[0].innerText
        copyAlert='Number copied '+serviceNo
        alert(copyAlert)
        await navigator.clipboard.writeText(serviceNo);
        const copyCount=getValue('copy-count')
        const addValue=1
        setValue('copy-count',copyCount,addValue)
    })
}

const calls = document.getElementsByClassName('call-btn')
for(const call of calls){
    call.addEventListener('click', function (event){
        const serviceName=call.parentElement.parentElement.getElementsByClassName('service-name')[0].innerText
        const serviceNo=call.parentElement.parentElement.getElementsByClassName('service-no')[0].innerText
        const coinCount=getValue("coin-count")
        if(coinCount>=20){
            const callAlert='📞 you are calling '+serviceName+' at '+serviceNo
            alert(callAlert)
            const deductValu=-20  
            setValue('coin-count',coinCount,deductValu)
            addHistory(serviceName,serviceNo)
        }
        else{
            alert('❌ You do not have sufficient coin')
            return
        }
    })
}

document.getElementById('clear-history').addEventListener('click', function (){
    document.getElementById('history-container').innerHTML=''
})




