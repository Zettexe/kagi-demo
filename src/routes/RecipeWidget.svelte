<script>
  export let id;
  export let title;
  export let ingredients;
</script>

<div class="widget">
  <h4>{title}</h4>
  <ul>
    {#each ingredients as ingredient}
      <li>
        <input type="checkbox" />
        {ingredient}
      </li>
    {/each}
  </ul>
  <label id="toggle" for={"check" + id}>
    <input id={"check" + id} class="togglebox" type="checkbox" />
  </label>
</div>

<style>
  .widget {
    padding: 0.75rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
    align-self: flex-start;
  }

  h4 {
    margin: 0;
  }

  ul {
    display: grid;
    list-style: none;
    padding: 0;
    grid-template-rows: repeat(10, min-content);
    grid-auto-rows: 0;
    overflow-y: hidden;
  }

  ul:has(+ #toggle .togglebox:checked) {
    grid-auto-rows: min-content;
  }

  #toggle {
    display: block;
    cursor: pointer;
  }

  #toggle:after {
    display: block;
    text-align: center;
  }

  ul:has(li:nth-child(11)) ~ #toggle:after {
    content: "Show More";
  }

  #toggle:has(.togglebox:checked):after {
    content: "Show Less";
  }

  .togglebox {
    display: block;
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>
