// creates a context Object,
// when react renders a component that subscribes to this context object it will read the current value from
// the closest matching provider above it in the tree.
import React from 'react';

const RouterContext = React.createContext();
console.log('RouterContext is', RouterContext);


export default RouterContext;

