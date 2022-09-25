let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}

let count=0

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==arr[i+1])
    {
        count++

    }

}
console.log(count)