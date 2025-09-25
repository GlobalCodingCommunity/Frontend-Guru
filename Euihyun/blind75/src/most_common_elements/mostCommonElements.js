// Question : https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-most-common-elements
/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */

// solution 1 : time: O(nlogn), space: O(n)
function topKFrequent1(numbers, k) {
  const answer = [];
  // 1. first create an object whose key is an element of nums
  // and whose value is its frequency.
  const frequencies = {};
  for (const elem of numbers) {
    frequencies[elem] = (frequencies[elem] || 0) + 1;
  }
  // 2. from the object sort by its value(frequency)
  const frequenciesArray = Object.entries(frequencies).sort(
    (a, b) => a[1] - b[1]
  );
  // 3. pop k elements
  for (let i = 0; i < k; i++) {
    const result = frequenciesArray.pop();
    answer.push(Number(result[0]));
  }
  // 4. return answer
  return answer;
}

// solution 2: time: O(nlogk), space: O(n + k) (O(n) for the frequency object, O(k) for the min heap)
class minHeap {
  #bubbleUp(index) {
    if (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heapArr[index][1] < this.heapArr[parent][1]) {
        // swap the element and its parent
        [this.heapArr[parent], this.heapArr[index]] = [
          this.heapArr[index],
          this.heapArr[parent],
        ];
        this.#bubbleUp(parent);
      }
    }
  }
  #sinkDown(i, h) {
    const leftChild = 2 * i + 1;
    const rightChild = leftChild + 1;
    let indexToSwap = i;
    // if the left child is larger than the element, designate the left child
    if (
      leftChild < h &&
      this.heapArr[leftChild][1] < this.heapArr[indexToSwap][1]
    ) {
      indexToSwap = leftChild;
    }
    // if the right child is larger than the element AND the left child, designate the right child
    if (
      rightChild < h &&
      this.heapArr[rightChild][1] < this.heapArr[indexToSwap][1]
    ) {
      indexToSwap = rightChild;
    }
    // then swap the two elements.
    if (indexToSwap !== i) {
      [this.heapArr[indexToSwap], this.heapArr[i]] = [
        this.heapArr[i],
        this.heapArr[indexToSwap],
      ];
      this.#sinkDown(indexToSwap, h);
    }
  }

  constructor() {
    this.heapArr = [];
  }

  size() {
    return this.heapArr.length;
  }

  isEmpty() {
    return this.heapArr.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.heapArr[0];
    }
  }

  add(elemToAdd) {
    this.heapArr.push(elemToAdd);
    this.#bubbleUp(this.heapArr.length - 1);
  }

  remove() {
    const topElem = this.top();
    if (!this.isEmpty()) {
      this.heapArr[0] = this.heapArr[this.heapArr.length - 1];
      this.heapArr.pop();
      this.#sinkDown(0, this.heapArr.length);
    }
    return topElem;
  }

  dequeue() {
    return this.heapArr.pop();
  }
}

function topKFrequent2(numbers, k) {
  const answer = [];
  // 1. first create an object whose key is an element of nums
  // and whose value is its frequency.
  const frequencies = {};
  for (const elem of numbers) {
    frequencies[elem] = (frequencies[elem] || 0) + 1;
  }
  // 2. then create a priority queue of size k. next, enqueue the entries of the
  // frequency object. if the queue is already full, remove the top and add the entry.
  const priorityQueue = new minHeap();
  for (const [num, frequency] of Object.entries(frequencies)) {
    priorityQueue.add([Number(num), frequency]);
    if (priorityQueue.size() > k) {
      priorityQueue.remove();
    }
  }
  // 3. then empty the queue and put the "number" back to the answer array
  for (let i = 0; i < k; i++) {
    const [num, frequency] = priorityQueue.dequeue();
    answer.push(num);
  }

  return answer;
}
