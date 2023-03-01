export function ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const randomItem = array[randomIndex]; 
      array[randomIndex] = array[i]; 
      array[i] = randomItem; 
    }
  
    return array;
  }
  