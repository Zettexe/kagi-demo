<script>
  let benchmarks = [
    "benchmark.v1.worker.js",
    "benchmark.v2.worker.js",
    "benchmark.v3.worker.js",
  ];
  let benchmark_results = $state([[], [], []]);
  let parameters = $state(["", "", ""]);

  let benchmark = (name, number_of_judges, others) => {
    parameters[0] = name;
    parameters[1] = number_of_judges;
    parameters[2] = others;
    for (let i = 0; i < benchmarks.length; i += 1) {
      benchmark_results[i] = [];
    }

    const onerror = (error) => {
      console.error("Worker error:", error);
    };
    const postMessage = {
      name: name,
      number_of_judges: number_of_judges,
      others: others,
      iterations: [100000, 1000000, 10000000],
    };

    benchmarks.forEach((benchmark_file, index) => {
      const worker = new Worker(benchmark_file);
      worker.onmessage = (e) => {
        benchmark_results[index] = e.data;
        worker.terminate();
      };
      worker.onerror = onerror;
      worker.postMessage(postMessage);
    });
  };
</script>

<div class="p-3">
  <button
    class="px-2 py-1 mt-3 text-center cursor-pointer border rounded hover:bg-gray-100 active:bg-gray-200"
    onclick={() => benchmark("Jules", 3, "Adam Betty Frank Mike")}
  >
    Start Benchmark
  </button>

  <button
    class="px-2 py-1 mt-3 text-center cursor-pointer border rounded hover:bg-gray-100 active:bg-gray-200"
    onclick={() => benchmark("Zane", 1, "Mark Hank Ana Vivian")}
  >
    Start Benchmark 2
  </button>

  {#if parameters[0] != ""}
    <div class="mt-3">
      <div>
        <div>Name: {parameters[0]}</div>
        <div>Number of Judges: {parameters[1]}</div>
        <div>Others: {parameters[2]}</div>
      </div>
      <table class="table-fixed w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th>Result</th>
            <th>100k</th>
            <th>1m</th>
            <th>10m</th>
          </tr>
        </thead>
        <tbody>
          {#each benchmark_results as benchmark_result, index}
            <tr>
              <th>Version {index + 1}</th>
              {#if benchmark_result.length == 0}
                <td colspan="4">
                  <div class="inline-block" role="status">
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </td>
              {:else}
                <td>{benchmark_result[0]}min</td>
                <td>{Math.floor(benchmark_result[1] * 100) / 100}ms</td>
                <td>{Math.floor(benchmark_result[2] * 100) / 100}ms</td>
                <td>{Math.floor(benchmark_result[3] * 100) / 100}ms</td>
              {/if}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
