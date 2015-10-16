var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};


function getTheBest(results){
  var bestResult = 0;
  var bestEmployee;
  
  for (var employee in results){
    if (results[employee] > bestResult){
      bestResult = results[employee];
      bestEmployee = employee;
    };
  };
  return bestEmployee;
};


getTheBest(tasksCompleted);