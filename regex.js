const prefix = "/";

const sayHi = new RegExp(`^${prefix}halo$`);
const gempa = new RegExp(`^${prefix}gempa$`);

module.exports = {
  sayHi,
  gempa,
};
