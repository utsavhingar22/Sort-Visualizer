"use strict";
const start = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }
  if (algoValue === 0) {
    alert("No Algorithm Selected");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if (algoValue === 1) await algorithm.BubbleSort();
  if (algoValue === 2) await algorithm.SelectionSort();
  if (algoValue === 3) await algorithm.InsertionSort();
  if (algoValue === 4) await algorithm.MergeSort();
  if (algoValue === 5) await algorithm.QuickSort();
};

const RenderScreen = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let algoInfo = document.querySelector(".algo-info");
  let algoComp = document.querySelector(".algo-comp");
  console.log(algoInfo)
  switch(algoValue){
    case 1:
      algoInfo.innerHTML = "<h2>Bubble Sort</h2><p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,compares adjacet elements and swaps them of they are in the wrong order.The paas through the list is repeated until the list is sorted.The algorithm,which is a comparison sort,is named for the way smaller or larger elements bubble to the top of the list.Although the algorithm i simple,it is too slow and impractical for most problems</p><a href='https://en.wikipedia.org/wiki/Bubble_sort'>Learn More</a>"
      algoComp.innerHTML = "<h2>Performance</h2><p>Worst-case time complexity O(n2)<br>Average Timecomplexity O(n2)<br>Best-case time complexity  O(n)<br>Worst-case space complexity O(1)</p>"
      break;

    case 2:
      algoInfo.innerHTML = "<h2>Selection Sort</h2><p>Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.</p><a href='https://en.wikipedia.org/wiki/Selection_sort'>Learn More</a>"
      algoComp.innerHTML = "<h2>Performance</h2><p>Worst-case time complexity O(n2)<br>Average Timecomplexity O(n2)<br>Best-case time complexity  O(n2)<br>Worst-case space complexity O(1)</p>"
      break;

    case 3:
      algoInfo.innerHTML = "<h2>Insertion Sort</h2><p>Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.</p><a href='https://en.wikipedia.org/wiki/Insertion_sort'>Learn More</a>"
      algoComp.innerHTML = "<h2>Performance</h2><p>Worst-case time complexity O(n2)<br>Average Timecomplexity O(n2)<br>Best-case time complexity  O(n)<br>Worst-case space complexity O(1)</p>"
      break;

    case 4:
      algoInfo.innerHTML = "<h2>Merge Sort</h2><p>Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:<br>1.Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)<br>2.Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</p><a href='https://en.wikipedia.org/wiki/Merge_sort'>Learn More</a>"
      algoComp.innerHTML = "<h2>Performance</h2><p>Worst-case time complexity O(n logn)<br>Average Timecomplexity O(n logn)<br>Best-case time complexity  O(n logn)<br>Worst-case space complexity O(1)</p>"
      break;
    case 5:
      algoInfo.innerHTML = "<h2>Quick Sort</h2><p>Quick Sort is is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:<br>Pick an element, called a pivot, from the array. This is usually done at random.<br>2.Move pivot element to the start of the array.<br>3.Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.<br>4.Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.<br>The base case of the recursion is an array of size zero or one, which are sorted by definition. </p><a href='https://en.wikipedia.org/wiki/Quicksort'>Learn More</a>"
      algoComp.innerHTML = "<h2>Performance</h2><p>Worst-case time complexity O(n2)<br>Average Timecomplexity O(n logn)<br>Best-case time complexity  O(n logn)<br>Worst-case space complexity O(logn)</p>"
      break;

    default:
      algoInfo.innerHTML = "<h2>Select Algorithm</h2><p>You must select an algorithm before you can visualize it's execution on an array of numbers.</p>"
      algoComp.innerHTML = "<h2>Performance</h2><p>Worst-case time complexity <br>Average Timecomplexity <br>Best-case time complexity  <br>Worst-case space complexity </p>"
      break;

  }
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  console.log(arrayNode);
  console.log(list);
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const RenderArray = async (sorted) => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  if (sorted) list.sort((a, b) => a - b);

  const arrayNode = document.querySelector(".array");
  const divnode = document.createElement("div");
  divnode.className = "s-array";

  for (const element of list) {
    const dnode = document.createElement("div");
    dnode.className = "s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
  arrayNode.appendChild(divnode);
};

const randomList = async (Length) => {
  let list = new Array();
  let lowerBound = 1;
  let upperBound = 100;

  for (let counter = 0; counter < Length; ++counter) {
    let randomNumber = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    list.push(parseInt(randomNumber));
  }
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};

const response = () => {
  let Navbar = document.querySelector(".navbar");
  if (Navbar.className === "navbar") {
    Navbar.className += " responsive";
  } else {
    Navbar.className = "navbar";
  }
};

document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload = RenderScreen;
