const asyncFn = (log) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(log);
    }, 800);
  });
};

const arr = [1, 2, 3, 4, 5];

const forLoop = async () => {
  for (item of arr) {
    const result = await asyncFn(`for ${item}`);
    console.log(result);
  }
  console.log("complete for");
};

const promiseAll = async () => {
  const promiseArr = arr.map((ele) => asyncFn(`promise ${ele}`));
  await Promise.all(promiseArr).then((res) => {
    res.forEach((ele) => console.log(ele));
  });
  console.log("complete promise");
};

forLoop();
promiseAll();

/* result:
for 1
promise 1
promise 2
promise 3
promise 4
promise 5
complete promise
for 2
for 3
for 4
for 5
complete for
 */
