// { type: 'INCREMENT' }
// { type: 'DECREMENT' }

const counter = (state, action) => {
    if (typeof state === 'undefined') {
      return 0;
    }
    
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
  
  // counter(1, { type: 'INCREMENT' } )
  // // counter(1, { type: 'DO THE FANDANGO' } )
  