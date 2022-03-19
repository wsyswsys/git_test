let l1= [2,4,3]
let l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    let length = l1.length
    console.log(l1)
    console.log(l2)
    let newArray=[]

    for(let i=0; i< length ;i++){
        let temp=0
        let result =l1[i]+l2[i]
        //console.log(result)
        for(let i=0;i<length; i++){
            if(result<9 ){
                newArray[i]=result
                
            }else{
                newArray[i]=result-10
            }
        }
        
       //console.log(temp) 
    }
    console.log(newArray)
};

//addTwoNumbers()
console.log(addTwoNumbers([2,3,4],[5,6,4]))