const createCounter = () => {
    let count: number = 0; // 这个变量被“关”起来了

    return {
        increment: (): number => ++count,
        getValue: (): number => count,
        decrement: (): number => count > 0 ? --count : 0
    };
};

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
  // console.log(counter.count);    // ❌ Error: 外部永远无法直接触摸这个变量
  console.log(counter.decrement()); // 2
  console.log(counter.decrement()); // 2
