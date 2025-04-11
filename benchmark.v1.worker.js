let court = (name, number_of_judges, others) => {
  let name_array = others.split(" ");
  name_array.push(name);
  name_array.sort();
  let index = name_array.findIndex((element) => element == name);
  return 30 * Math.ceil((index + 1) / number_of_judges);
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
