function inspectFunction(func: Function): Function {

  const functionName: string = func.name;
  const functionPropertyLength: number = func.length;

  function updatedFunction(...args: number[]): number {

    console.log(`function name -> ${functionName}`);
    console.log(`function argument length -> ${functionPropertyLength}`);
    console.log(`function argument list -> ${args}`);

    const functionResponse: number = func(...args);

    return functionResponse;
  }

  return updatedFunction;
}

function sum(a: number, b: number): number {
  return a + b;
}


console.log(inspectFunction(sum)(1, 2)); 