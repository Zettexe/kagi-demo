<script>
  import RecipeWidget from "./RecipeWidget.svelte";
  import TextWidget from "./TextWidget.svelte";

  let lasagna_ingredients = [
    "1 pound sweet Italian sausage",
    "3/4 pound lean ground beef",
    "1/2 cup minced onion",
    "2 cloves garlic, crushed",
    "1 (28 ounce) can crushed tomatoes",
    "2 (6 ounce) cans tomato paste",
    "2 (6.5 ounce) cans canned tomato sauce",
    "1/2 cup water",
    "2 tablespoons white sugar",
    "1 1/2 tablespoons dried basil leaves",
    "1/2 teaspoon fennel seeds",
    "1 teaspoon italian seasoning",
    "1 1/2 teaspoons salt, divided, or to taste",
    "1/4 teaspoons ground black pepper",
    "4 tablespoons chopped fresh parsley",
    "12 lasagna noodles",
    "16 ounces ricotta cheese",
    "1 egg",
    "3/4 pound mozarella cheese, sliced",
    "3/4 grated Parmesan cheese",
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
  <RecipeWidget
    id="1"
    title="Meat Lasagna Recipe"
    ingredients={lasagna_ingredients.slice(0, 9)}
  ></RecipeWidget>
  <RecipeWidget
    id="2"
    title="Meat Lasagna Recipe"
    ingredients={lasagna_ingredients}
  ></RecipeWidget>
  <TextWidget id="3" title="Space, time, and all in between">
    The fundamental concepts of classical physics, space, time, mass, and
    derived concepts, velocity, momentum, force, angular momentum, energy ...
    all rest on the principle that material points have trajectories. They are
    defined as lines in space-time. Even the dynamics of continuous, solid or
    fluid media describes the trajectories of the material points which
    constitute the bodies in motion. But the indeterminacy relation of
    Heisenberg prevents quantum particles from having such classical
    trajectories, since their position and velocity can not be exactly defined
    at the same time. How then can it explain all the appearances which
    legitimize the fundamental concepts of classical physics? Systems, in one
    sense, are devices that take input and produce an output. A system can be
    thought to operate on the input to produce the output. The output is related
    to the input by a certain relationship known as the system response. The
    system response usually can be modeled with a mathematical relationship
    between the system input and the system output.
  </TextWidget>
</div>
