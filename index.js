const createLogicBind = (obj, cb, ...args) => {
  const original = obj;

  const handler = {
    set(obj, prop, value) {
      obj[prop] = value;
      cb(obj, prop, args);
    },
  };

  const proxy = new Proxy(original, handler);

  return proxy;
};

module.exports = createLogicBind;
