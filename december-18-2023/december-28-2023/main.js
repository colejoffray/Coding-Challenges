function selReverse(array, length) {
    // TODO
    let res  = []
    if (length === 0) return array
    for(let i = 0; i < array.length; i+=length){
        res.push(...array.slice(i, i+length).reverse())
    }
    return res
    
  }

  console.log(selReverse([1,2,3,4,5,6], 2), [2,1,4,3,6,5]);