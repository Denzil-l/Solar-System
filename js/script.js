function ThisIsWhile(){
    let num1 = +prompt(`Enter your first number`)
    while(true){
        let num2 = +prompt(`Enter your next number`)
        num1 = num1 * num2
        console.log(num1)
        if(num1 === 0){break}
    }
}
// ThisIsWhile()
function ThisIsWhile2(){
    let str = ''
    let firstletter =''
    let uppletter=''
    let lastletter =''
    while(true){
        str = prompt('Enter yoyr password')
        firstletter = str[0]
        lastletter = str[str.length-1]
        uppletter = firstletter.toUpperCase()
        if(str.length > 5 && str.length < 12 && firstletter === uppletter && (lastletter === '!' || lastletter === '?')){break}
    }
}
// ThisIsWhile2()



function ThisIsWhile3(){
    let str = ''
    
    while(true){
        str = prompt('Do you want to go to a Theater')
        str = str.toUpperCase()
        if(str === "YES"){
            console.log("It is your tickets")
            break
        }
        else if(str === 'NO'){
            break
        }
        
    }
}

// ThisIsWhile3()

 
    const ar1 = [5, -12, 1.3, 'BluE','black',0.45, 'wHIte',100,2.01, 'ReD']
       const ar2 = []
       const ar3 = [7, 9.1]
       const ar4 = ['GREEN']
function ThisIsWhile4(arr){
 let i = 0
 while (i < arr.length) {
    if (isNaN(arr[i])){
        let str = String(arr[i])
        str = str.toLowerCase()
        arr[i] = str
        i++
    }
    else{
        i++
    }
  

 }
 console.log(arr)

}
// ThisIsWhile4(ar1)
// ThisIsWhile4(ar2)
// ThisIsWhile4(ar3)
// ThisIsWhile4(ar4)


function findAll(str,letter){
    let arr = []
    let i = 0
    let j = 0
    while(i < str.length){
        if (str[i] === letter) {
            arr[j] = i
            j++
            i++
        }
        else{i++}
    }
    console.log(arr)
    
}

findAll('archaebacteria','a')
findAll('abracadabra','a')
findAll('encyclopedy','m')
findAll('encyclopedy','c')
findAll('encyclopedy','c')
findAll('error','e')