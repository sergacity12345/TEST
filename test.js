let list = [5,4,5,4,5,4,4,5,3,3,3,2,2,1,5]

let n = 5
nth_most_rate(list,n)

function nth_most_rate(list,n){

    // arrange the arrays in number of occurence 
    // and this will result to object with key value pair
    // key being the numbers in the array while value being the number of occurence
    let counts = {}
    for(let i = 0; i < list.length; i ++){
        if(counts[list[i]]){
            counts[list[i]] += 1
        }else{
            counts[list[i]] =1
        }
    }
    console.log(counts)



    // getting the object keys
    const key = Object.keys(counts)


    const res = key.find(curr=> curr == n)


    const names = {...counts}

    key.forEach(function(item){
        if(item == res){
            console.log(names[n])
        }else{
            console.log("Undefined")
        }
    })
    
  
}

