function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//O(n) The time it takes for this function to run is directly proportional to the length of the array
