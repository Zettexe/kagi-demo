<script>
  export let id;
  export let title;
</script>

<div class="widget flex flex-col p-3 border rounded self-start">
  <h4 class="font-bold">{title}</h4>
  <p><slot>Placeholder Content</slot></p>
  <label
    id="toggle"
    class="px-2 py-1 mt-3 text-center cursor-pointer border rounded hover:bg-gray-100 active:bg-gray-200"
    for={"check-" + id}
  >
    <input id={"check-" + id} class="invisible w-0 h-0" type="checkbox" />
  </label>
</div>

<style>
  .widget {
    --line-height: 1.5;

    line-height: var(--line-height);
  }

  p {
    max-height: calc(10em * var(--line-height));
    overflow: hidden;
  }

  p:has(+ #toggle input:checked) {
    max-height: unset;
  }

  #toggle:after {
    content: "Show More";
  }

  #toggle:has(input:checked):after {
    content: "Show Less";
  }
</style>
