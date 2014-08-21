var array = [];

$(".list p").each(function (index) {
  x = $(this).text();
  array.push(x);


})


// This is my array
    for (i = 0; i < array.length; i++) {
        // Assume first element is min
        var min = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;

            }
        }
        if (min != i) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

        console.log(array[i]);// I print the in ascending order
    }

$("button").on("click", function () {
  $(".list p").each(function (index) {
    $(this).text(array[index]).css({"font-size": "+" + ((index+3) * 5) + "px"});
  })
})


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
