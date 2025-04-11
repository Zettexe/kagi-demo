# Kagi Frontend Demo

Thoughts on JavaScript optimization:

I ended up with 3 versions of the desired js function, my first attempt was simply to create the most straight forward version of the function I could think of while at the same time not making things slower for no reason (i.e. not looping over the number of judges when the result can simply be calculated).

The second attempt, and the first optimization, was to remove the sort function from the first version. Sorting is slow in pretty much all cases and I was certain I could get something much faster by avoiding it.

The third attempt, and the last version, ended up being an optimization purely for Chromium based browsers. My guess would be that V8 gives better optimization for the indexOf function, either way this version's focus was to remove the extraneous slice in the Version 2 function reducing the amount of looping required to calculate the result.

After this I was not able to find any more optimizations for this function though I am sure I missed something, perhaps WASM could be utilized but in my limited testing it ended up being quite a bit slower, likely due to the overhead of the wasm runtime for such a small function.
