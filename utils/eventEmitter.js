// eventEmitter.js
const eventEmitter = {
    events: {},
    subscribe: function (eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    unsubscribe: function (eventName, fn) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(f => f !== fn);
        }
    },
    emit: function (eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(fn => fn(data));
        }
    },
};

export default eventEmitter;
