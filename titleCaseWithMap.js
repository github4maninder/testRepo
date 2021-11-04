const titleCase  = function(result) {
  return result.toLowerCase().split(' ').map(function(w) {
    return (w.charAt(0).toUpperCase() + w.slice(1));
    
  }) .join(' ');
};
console.log(titleCase('ABC')); // result 'Ab';