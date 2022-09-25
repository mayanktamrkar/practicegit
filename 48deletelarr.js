let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}

let position=Number(prompt('enter position'))


for(let i=position;i<arr.length;i++){
    arr[i]=arr[i+1]

}
arr.length=arr.length-1
console.log(arr)