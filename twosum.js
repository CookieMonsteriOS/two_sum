function twoSum (numsArr, targetSum) {

  numsArr.sort((a,b) =>  a- b);
  
  let leftIndex = 0
  let rightIndex = numsArr.length-1

  while (leftIndex < rightIndex){

  const currentSum = numsArr[leftIndex] + numsArr[rightIndex]

  if (currentSum == targetSum){
   
     //Prints number to console
     console.log(numsArr[leftIndex], numsArr[rightIndex])

     return [numsArr[leftIndex], numsArr[rightIndex]]   
   
   }else if(currentSum < targetSum){     
    
    leftIndex++
    
    }else if(currentSum > targetSum){
    
    rightIndex--

   }

  }

 return []
}


//Test variables    
var numsArr = [100,2,99,4,21,8,11,4]
var targetSum = 10

// Call function
twoSum(numsArr, targetSum)