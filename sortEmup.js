var numbers = new Array(40);

for(var i = 0; i < numbers.length; i++) {
  numbers[i] = (Math.floor(Math.random() * 100));
}

addNumber(numbers);

function sortEmup() {
    for (first = 0; first < numbers.length; first++) {
        var min = first;
        for (second = first + 1; second < numbers.length; second++) {
            if (numbers[second] < numbers[min]) {
                min = second;


            }

        }
        if (min != first) {
            temp = numbers[first];
            numbers[first] = numbers[min];
            numbers[min] = temp;

        }
    addNumber(numbers);
    }
}



function addNumber(array) {
  $(".list").empty();
  $.each(array, function(i, num) {
   $(".list").append("<p class='number' style='font-size:" + num + "px' >" + num +  "</p>");
  });
}

// addNumber(numbers);
sortEmup();



// function heapSort(array) {

//   arrayLength = array.length;
//   heapify(array, arrayLength);

//   end = arrayLength-1;
//   while (end > 0) {
//     swap = array[0];
//     array[0] = array[end];
//     array[end] = swap;
//     end = end - 1;
//     siftDown(array, 0, end);

//   }
//   alert(array);
// }

// function heapify(array) {
//   var start = Math.floor((arrayLength - 2) / 2);

//   while (start >= 0) {
//     siftDown(array, start, (arrayLength - 1));
//     start = start - 1;
//     return array;
//   }
// }

// function siftDown(array, start, end) {
//   var root = start,
//   child,
//   swap,
//   swap2;

//   while ((root * 2 + 1) <= end) {
//     child = root * 2 + 1;
//     swap = root;

//     if (array[swap] < array[child]) {
//       swap = child;
//     }
//     if (child + 1 <= end && array[swap] < array[child + 1]) {
//       swap = child + 1;
//     }
//     if (swap != root) {
//       swap2 = array[root];
//       array[root] = array[swap];
//       array[swap] = swap2;
//       root = swap2;
//     }
//     else {
//       return array;
//     }
//   }
//   return array;
// }

// heapSort(array);
// console.log(array);

// heapSort(array);
// console.log(array);
