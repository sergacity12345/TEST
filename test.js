let list = [3,3,3,4,4,4,4,5,5,5,8,5,4,6,6,6,6,7,6,7,6]

let n = 1
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



    // getting the object values
    const value = Object.values(counts)


    const res = value.find(curr=> curr == n)

    console.log(res)


    const names = {...counts}

    function getKey(names, res){
        console.log(Object.keys(names).find(key =>names[key] === res))
    }   

    getKey(names,res)
  
}



