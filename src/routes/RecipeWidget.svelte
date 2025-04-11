<script>
  export let id;
  export let title;
  export let ingredients;
</script>

<div class="p-3 border rounded self-start">
  <h4 class="font-bold">{title}</h4>
  <ul>
    {#each ingredients as ingredient}
      <li>
        <input type="checkbox" />
        {ingredient}
      </li>
    {/each}
  </ul>
  <label
    id="toggle"
    class="block px-2 py-1 mt-3 text-center cursor-pointer border rounded hover:bg-gray-100 active:bg-gray-200"
    for={"check-" + id}
  >
    <input id={"check-" + id} class="invisible w-0 h-0" type="checkbox" />
  </label>
</div>

<style>
  ul {
    display: grid;
    padding: 0;
    grid-template-rows: repeat(10, min-content);
    grid-auto-rows: 0;
    overflow-y: hidden;
  }

  ul:has(+ #toggle input:checked) {
    grid-auto-rows: min-content;
  }

  ul:not(:has(li:nth-child(11))) ~ #toggle {
    display: none;
  }

  #toggle:after {
    content: "Show More";
  }

  #toggle:has(input:checked):after {
    content: "Show Less";
  }
</style>
