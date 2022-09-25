let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}

let obj={}
for(i in arr){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]++
    }

}
for(i in obj){
    if(obj[i]==1){
        console.log(i)

    }
}

