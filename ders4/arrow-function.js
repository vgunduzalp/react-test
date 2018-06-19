const fn = (param1, param2) => {
  console.log(param1);
  console.log(param2);
};

fn(12, 44);

const add = (param1, param2) => param1 + param2;

console.log(add(1, 3));

const pow = param1 => param1 ** 2;

console.log(pow(8));

const test = (param1 = "value", ...rest) => ({
  key1: param1,
  key2: "value2",
  rest,
});

const result = JSON.stringify(test("veysel", "a", "b", "c", "d", "e"), null, 2);

console.log(result);
