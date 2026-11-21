class UserService {
  getUser(id: number) {
    return { id, name: 'Puneet' };
  }

  createUser(name: string) {
    return { id: 1, name };
  }
}
function inspectClass(target: Function) {
  console.log('Class name:', target.name);

  console.log('Prototype:', target.prototype);

  console.log(
    'Methods:',
    Object.getOwnPropertyNames(target.prototype)
  );

  return target;
}

const inspectedClass = inspectClass(UserService);

const userService = new inspectedClass();
console.log(userService.getUser(1));