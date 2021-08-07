// Import the createLogicBind function
const createLogicBind = require("./index")

// Create a config object which has 3 properties, obj (original object), cb (callback when object properties change), args (args to be made available to callback)
const config = {
    // obj is the initial state of the object
    obj: {
        count: 0
    },
    // Callback receives object with obj (original object), prop (property being changed), args (args property of config object)
    cb: ({obj, prop, args}) => {prop === "count" ? console.log(obj.count) : console.log(args.cheese)},
    // args is just to deliver any addition functions or data you may need in the callback
    args: {cheese: "gouda"}
}

// The object is returned from createLogicBind, callback will run when any property changes
const state = createLogicBind(config)

// logs 1
state.count++
// logs gouda
state.stuff ="weeeee"