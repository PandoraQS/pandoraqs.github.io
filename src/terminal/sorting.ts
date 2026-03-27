export type SortAlgorithm =
  | 'bubble'
  | 'selection'
  | 'insertion'
  | 'shell'
  | 'quick'
  | 'merge'
  | 'heap'
  | 'counting'
  | 'radix'
  | 'bucket';

export interface SortStats {
  sorted: number[];
  steps: number;
  trace?: string[];
}

export interface SortAlgoInfo {
  complexity: string;
  description: string;
  note?: string;
}

export type SortRunResult =
  | { ok: true; result: SortStats }
  | { ok: false; error: string; hint?: string };

interface SortOptions {
  expand?: boolean;
}

const MAX_TRACE_LINES = 40;

const withTrace = (expand?: boolean) => {
  const trace: string[] = [];

  const push = (entry: string) => {
    if (!expand) return;
    if (trace.length < MAX_TRACE_LINES) {
      trace.push(entry);
    }
  };

  const finalize = () => {
    if (!expand) return undefined;
    if (trace.length >= MAX_TRACE_LINES) {
      trace.push('... trace truncated to keep output readable.');
    }
    return trace;
  };

  return { push, finalize };
};

export const SORT_ALGOS: SortAlgorithm[] = [
  'bubble',
  'selection',
  'insertion',
  'shell',
  'quick',
  'merge',
  'heap',
  'counting',
  'radix',
  'bucket',
];

export const SORT_INFO: Record<SortAlgorithm, SortAlgoInfo> = {
  bubble: {
    complexity: 'O(n^2)',
    description: 'Adjacent swaps, very simple baseline.',
  },
  selection: {
    complexity: 'O(n^2)',
    description: 'Repeatedly selects the minimum and places it in front.',
  },
  insertion: {
    complexity: 'O(n^2)',
    description: 'Builds sorted prefix, good on nearly-sorted arrays.',
  },
  shell: {
    complexity: 'O(n log^2 n) typical',
    description: 'Gap-based insertion sorting for faster partial ordering.',
  },
  quick: {
    complexity: 'O(n log n) avg',
    description: 'Pivot-based divide-and-conquer.',
    note: 'Worst case O(n^2).',
  },
  merge: {
    complexity: 'O(n log n)',
    description: 'Stable divide-and-conquer merge strategy.',
  },
  heap: {
    complexity: 'O(n log n)',
    description: 'In-place binary heap sorting.',
  },
  counting: {
    complexity: 'O(n + k)',
    description: 'Linear-time integer sorting over small ranges.',
    note: 'Requires integer inputs and a bounded value range.',
  },
  radix: {
    complexity: 'O(d·(n + b))',
    description: 'Digit-wise integer sort (LSD base-10 implementation).',
    note: 'Requires integer inputs.',
  },
  bucket: {
    complexity: 'O(n + k) avg',
    description: 'Distributes values into buckets and sorts each bucket.',
    note: 'Average-case performance depends on distribution.',
  },
};

export const parseNumberArgs = (args: string[]): number[] => {
  const tokens = args
    .join(' ')
    .split(/[\s,]+/)
    .map(token => token.trim())
    .filter(Boolean);

  return tokens.map(token => Number(token));
};

const bubbleSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let swaps = 0;
  const tracer = withTrace(options?.expand);

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
        swapped = true;
        tracer.push(`swap(${j},${j + 1}) -> ${arr.join(' · ')}`);
      }
    }
    if (!swapped) break;
  }

  return { sorted: arr, steps: swaps, trace: tracer.finalize() };
};

const selectionSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let swaps = 0;
  const tracer = withTrace(options?.expand);

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      swaps++;
      tracer.push(`select min@${minIndex} -> swap(${i},${minIndex}) => ${arr.join(' · ')}`);
    }
  }

  return { sorted: arr, steps: swaps, trace: tracer.finalize() };
};

const insertionSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let shifts = 0;
  const tracer = withTrace(options?.expand);

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      shifts++;
    }
    arr[j + 1] = current;
    tracer.push(`insert(${current}) at ${j + 1} -> ${arr.join(' · ')}`);
  }

  return { sorted: arr, steps: shifts, trace: tracer.finalize() };
};

const shellSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let moves = 0;
  const tracer = withTrace(options?.expand);

  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
        moves++;
      }

      arr[j] = temp;
      tracer.push(`gap=${gap} place ${temp} -> ${arr.join(' · ')}`);
    }
  }

  return { sorted: arr, steps: moves, trace: tracer.finalize() };
};

const quickSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let partitions = 0;
  const tracer = withTrace(options?.expand);

  const partition = (low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    partitions++;
    tracer.push(`partition [${low},${high}] pivot=${pivot} -> ${arr.join(' · ')}`);
    return i + 1;
  };

  const sort = (low: number, high: number) => {
    if (low < high) {
      const pivotIndex = partition(low, high);
      sort(low, pivotIndex - 1);
      sort(pivotIndex + 1, high);
    }
  };

  sort(0, arr.length - 1);
  return { sorted: arr, steps: partitions, trace: tracer.finalize() };
};

const mergeSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let merges = 0;
  const tracer = withTrace(options?.expand);

  const merge = (left: number[], right: number[]): number[] => {
    const out: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        out.push(left[leftIndex]);
        leftIndex++;
      } else {
        out.push(right[rightIndex]);
        rightIndex++;
      }
    }

    merges++;
    const merged = [...out, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    tracer.push(`merge [${left.join(',')}] + [${right.join(',')}] -> ${merged.join(' · ')}`);
    return merged;
  };

  const sort = (input: number[]): number[] => {
    if (input.length <= 1) return input;
    const middle = Math.floor(input.length / 2);
    return merge(sort(input.slice(0, middle)), sort(input.slice(middle)));
  };

  return { sorted: sort(arr), steps: merges, trace: tracer.finalize() };
};

const heapSort = (values: number[], options?: SortOptions): SortStats => {
  const arr = [...values];
  let heapifyOps = 0;
  const tracer = withTrace(options?.expand);

  const heapify = (size: number, root: number) => {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < size && arr[left] > arr[largest]) largest = left;
    if (right < size && arr[right] > arr[largest]) largest = right;

    if (largest !== root) {
      [arr[root], arr[largest]] = [arr[largest], arr[root]];
      heapifyOps++;
      tracer.push(`heapify swap(${root},${largest}) -> ${arr.join(' · ')}`);
      heapify(size, largest);
    }
  };

  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr.length, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyOps++;
    tracer.push(`extract max to index ${i} -> ${arr.join(' · ')}`);
    heapify(i, 0);
  }

  return { sorted: arr, steps: heapifyOps, trace: tracer.finalize() };
};

const countingSort = (values: number[], options?: SortOptions): SortRunResult => {
  const tracer = withTrace(options?.expand);

  if (values.some(value => !Number.isInteger(value))) {
    return {
      ok: false,
      error: 'Counting sort accepts only integer values.',
      hint: 'Use integers only, e.g. sort counting 8 3 1 9 2',
    };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min + 1;

  if (range > 50000) {
    return {
      ok: false,
      error: 'Value range is too large for counting sort in terminal mode.',
      hint: 'Use quick/merge/heap for wide ranges.',
    };
  }

  const counts = new Array<number>(range).fill(0);
  for (const value of values) {
    counts[value - min]++;
  }

  tracer.push(`range [${min}, ${max}] -> buckets=${range}`);
  tracer.push(`counts: ${counts.join(' · ')}`);

  const sorted: number[] = [];
  let writes = 0;

  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      sorted.push(i + min);
      counts[i]--;
      writes++;
      tracer.push(`write ${i + min} -> ${sorted.join(' · ')}`);
    }
  }

  return { ok: true, result: { sorted, steps: writes, trace: tracer.finalize() } };
};

const radixSort = (values: number[], options?: SortOptions): SortRunResult => {
  const tracer = withTrace(options?.expand);

  if (values.some(value => !Number.isInteger(value))) {
    return {
      ok: false,
      error: 'Radix sort accepts only integer values.',
      hint: 'Use integers only, e.g. sort radix 170 45 75 90 2 24 802 66',
    };
  }

  const sortNonNegative = (input: number[]) => {
    const arr = [...input];
    let exp = 1;
    let passes = 0;
    const max = arr.length ? Math.max(...arr) : 0;

    while (Math.floor(max / exp) > 0) {
      const buckets = Array.from({ length: 10 }, () => [] as number[]);

      for (const value of arr) {
        const digit = Math.floor(value / exp) % 10;
        buckets[digit].push(value);
      }

      let writeIndex = 0;
      for (const bucket of buckets) {
        for (const value of bucket) {
          arr[writeIndex] = value;
          writeIndex++;
        }
      }

      passes++;
      tracer.push(`radix exp=${exp} -> ${arr.join(' · ')}`);
      exp *= 10;
    }

    return { arr, passes };
  };

  const negatives = values.filter(v => v < 0).map(v => Math.abs(v));
  const nonNegatives = values.filter(v => v >= 0);

  const negSorted = sortNonNegative(negatives).arr.reverse().map(v => -v);
  const nonNegSortedResult = sortNonNegative(nonNegatives);
  const sorted = [...negSorted, ...nonNegSortedResult.arr];
  const steps = negSorted.length + nonNegSortedResult.passes;

  return { ok: true, result: { sorted, steps, trace: tracer.finalize() } };
};

const bucketSort = (values: number[], options?: SortOptions): SortRunResult => {
  const tracer = withTrace(options?.expand);
  const arr = [...values];

  if (arr.length <= 1) {
    return { ok: true, result: { sorted: arr, steps: 0, trace: tracer.finalize() } };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  if (min === max) {
    return { ok: true, result: { sorted: arr, steps: 0, trace: tracer.finalize() } };
  }

  const bucketCount = Math.max(5, Math.ceil(Math.sqrt(arr.length)));
  const buckets = Array.from({ length: bucketCount }, () => [] as number[]);
  let writes = 0;

  for (const value of arr) {
    const normalized = (value - min) / (max - min);
    const index = Math.min(bucketCount - 1, Math.floor(normalized * bucketCount));
    buckets[index].push(value);
  }

  tracer.push(`bucket range [${min}, ${max}] with ${bucketCount} buckets`);

  const sorted: number[] = [];
  buckets.forEach((bucket, index) => {
    bucket.sort((a, b) => a - b);
    if (bucket.length) tracer.push(`bucket[${index}] -> ${bucket.join(' · ')}`);
    for (const value of bucket) {
      sorted.push(value);
      writes++;
    }
  });

  return { ok: true, result: { sorted, steps: writes, trace: tracer.finalize() } };
};

export const runSort = (algo: SortAlgorithm, values: number[], options?: SortOptions): SortRunResult => {
  if (!values.length) {
    return {
      ok: false,
      error: 'Missing numbers to sort.',
      hint: 'Example: sort merge 10 4 6 1',
    };
  }

  if (values.some(value => Number.isNaN(value))) {
    return {
      ok: false,
      error: 'Invalid numeric input detected.',
      hint: 'Use only integers/floats separated by spaces or commas.',
    };
  }

  if (algo === 'bubble') return { ok: true, result: bubbleSort(values, options) };
  if (algo === 'selection') return { ok: true, result: selectionSort(values, options) };
  if (algo === 'insertion') return { ok: true, result: insertionSort(values, options) };
  if (algo === 'shell') return { ok: true, result: shellSort(values, options) };
  if (algo === 'quick') return { ok: true, result: quickSort(values, options) };
  if (algo === 'merge') return { ok: true, result: mergeSort(values, options) };
  if (algo === 'heap') return { ok: true, result: heapSort(values, options) };
  if (algo === 'counting') return countingSort(values, options);
  if (algo === 'radix') return radixSort(values, options);
  return bucketSort(values, options);
};
