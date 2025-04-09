<script>
  let benchmark_results = $state([[], [], []]);

  let benchmark = (performance_block, benchmark_id) => {
    benchmark_results[benchmark_id] = [];
    benchmark_results[benchmark_id].push(performance_block());
    let start_time = performance.now();
    for (let i = 0; i < 100000; i++) {
      performance_block();
    }
    benchmark_results[benchmark_id].push(performance.now() - start_time);
    start_time = performance.now();
    console.log(performance_block());
    for (let i = 0; i < 1000000; i++) {
      performance_block();
    }
    benchmark_results[benchmark_id].push(performance.now() - start_time);
    start_time = performance.now();
    for (let i = 0; i < 10000000; i++) {
      performance_block();
    }
    benchmark_results[benchmark_id].push(performance.now() - start_time);
  };

  let courtVersion1 = (name, number_of_judges, others) => {
    let name_array = others.split(" ");
    name_array.push(name);
    name_array.sort();
    let index = name_array.findIndex((element) => element == name);
    return 30 * Math.ceil((index + 1) / number_of_judges);
  };

  let courtVersion2 = (name, number_of_judges, others) => {
    let ahead = 1;

    let others_array = others.split(" ");
    for (let i = 0; i < others_array.length; i++) {
      if (others_array[i] < name) {
        ahead += 1;
      }
    }

    return 30 * Math.ceil(ahead / number_of_judges);
  };
</script>

<div>
  <button
    onclick={() =>
      benchmark(() => courtVersion1("Jules", 3, "Adam Betty Frank Mike"), 0)}
    >Start Benchmark</button
  >

  <button
    onclick={() =>
      benchmark(() => courtVersion1("Zane", 1, "Mark Hank Ana Vivian"), 0)}
    >Start Benchmark 2</button
  >

  {benchmark_results[0].join(", ")}
</div>

<div>
  <button
    onclick={() =>
      benchmark(() => courtVersion2("Jules", 3, "Adam Betty Frank Mike"), 1)}
    >Start Benchmark</button
  >

  <button
    onclick={() =>
      benchmark(() => courtVersion2("Zane", 1, "Mark Hank Ana Vivian"), 1)}
    >Start Benchmark 2</button
  >

  {benchmark_results[1].join(", ")}
</div>
