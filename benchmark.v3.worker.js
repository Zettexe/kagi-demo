let court = (name, number_of_judges, others) => {
  let ahead = 1;
  let start = 0;
  let end = others.length;
  let space = -1;

  while (((space = others.indexOf(" ", start)), space > 0)) {
    if (others.substring(start, space) < name) {
      ahead += 1;
    }
    start = space + 1;
  }

  if (others.substring(start) < name) {
    ahead += 1;
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
