const a = "Mehak";
const b = "Shivansh";
const c = "Shivam";

export default a; // a is being exported by default so it can be exported with any var name.
export {b}; // but c and b are not exported by default so we have to export by their name only
export {c}; // that we will see in module 2.mjs