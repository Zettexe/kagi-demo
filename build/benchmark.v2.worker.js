let court = (name, number_of_judges, others) => {
  let ahead = 1;

  let others_array = others.split(" ");
  for (let i = 0; i < others_array.length; i++) {
    if (others_array[i] < name) {
      ahead += 1;
    }
  }

  return 30 * Math.ceil(ahead / number_of_judges);
};

onmessage = function(e) {
  const { name, number_of_judges, others, iterations } = e.data;

  let results = [];
  results.push(court(name, number_of_judges, others));

  let start_time = performance.now();
  for (let i = 0; i < iterations[0]; i++) {
    court(name, number_of_judges, others);
  }
  results.push(performance.now() - start_time);

  start_time = performance.now();
  for (let i = 0; i < iterations[1]; i++) {
    court(name, number_of_judges, others);
  }
  results.push(performance.now() - start_time);

  start_time = performance.now();
  for (let i = 0; i < iterations[2]; i++) {
    court(name, number_of_judges, others);
  }
  results.push(performance.now() - start_time);

  postMessage(results);
}
