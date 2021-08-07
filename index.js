const createLogicBind = (configs) => {
  const {obj = {}, cb = () => {}, args = {}} = configs
  const original = obj;

  const handler = {
    set(obj, prop, value) {
      obj[prop] = value;
      cb({obj, prop, args});
    },
  };

  const proxy = new Proxy(original, handler);

  return proxy;
};

module.exports = createLogicBind;
