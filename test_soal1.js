function cariModus(arr) {
    let arrModus = [], isSame = false;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          isSame = true;
          arrModus.push(arr[i]);
        } else {
          isSame = false;
        }
      }
    }
    return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
  }
  
 
  console.log(cariModus([1, 1, 1, 2, 2, 4, 1, 1]))
  console.log(cariModus([2, 1, 2, 2, 2, 8, 1, 1]))
  console.log(cariModus([3, 3, 3, 3, 2, 4, 1, 1]))