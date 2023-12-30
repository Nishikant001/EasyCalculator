let a=document.getElementById('i1')
let b=document.querySelectorAll('button')
let string=''

b.forEach(nishi=>{
    nishi.addEventListener('click',(d)=>{
        if(d.target.innerText=='='){
            string=eval(string)
            a.value=string
        }else if(d.target.innerText=='AC'){
            string=''
            a.value=string

        }else if(d.target.innerText=='<='){
            string=string.substring(0,string.length-1)
            a.value=string

        }else if(d.target.innerText=='C'){
            string=''
            a.value=string

        }
        else{
            string+=d.target.innerText
            a.value=string
        }

    })
})