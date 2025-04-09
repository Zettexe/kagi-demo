<script>
  export let id;
  export let title;
</script>

<div class="widget">
  <h4>{title}</h4>
  <p><slot>Placeholder Content</slot></p>
  <label id="toggle" for={"check" + id}>
    <input id={"check" + id} class="togglebox" type="checkbox" />
  </label>
</div>

<style>
  .widget {
    --line-height: 1.25;

    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
    line-height: var(--line-height);
    align-self: flex-start;
  }

  h4 {
    margin: 0;
  }

  p {
    max-height: calc(10em * var(--line-height));
    overflow: clip;
  }

  p:has(+ #toggle .togglebox:checked) {
    max-height: unset;
  }

  #toggle {
    display: block;
    cursor: pointer;
  }

  #toggle:after {
    display: block;
    text-align: center;
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
