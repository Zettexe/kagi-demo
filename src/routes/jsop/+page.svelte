<script>
  let benchmark_results = $state([]);

  let benchmark = (performance_block) => {
    benchmark_results = [];
    benchmark_results.push(performance_block());
    let start_time = performance.now();
    for (let i = 0; i < 100000; i++) {
      performance_block();
    }
    benchmark_results.push(performance.now() - start_time);
    start_time = performance.now();
    console.log(performance_block());
    for (let i = 0; i < 1000000; i++) {
      performance_block();
    }
    benchmark_results.push(performance.now() - start_time);
    // start_time = performance.now();
    // for (let i = 0; i < 10000000; i++) {
    //   performance_block();
    // }
    // benchmark_results.push(performance.now() - start_time);
  };

  let courtInitial = (name, number_of_judges, others) => {
    let name_array = others.split(" ");
    name_array.push(name);
    name_array.sort();
    let index = name_array.findIndex((element) => element == name);
    return 30 * Math.ceil((index + 1) / number_of_judges);
  };
</script>

<button
  onclick={() =>
    benchmark(() => courtInitial("Jules", 3, "Adam Betty Frank Mike"))}
  >Start Benchmark</button
>

<button
  onclick={() =>
    benchmark(() => courtInitial("Zane", 1, "Mark Hank Ana Vivian"))}
  >Start Benchmark 2</button
>

{benchmark_results.join(", ")}
