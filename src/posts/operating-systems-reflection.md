---
title: Operating Systems Reflection
date: 2026-03-14
blurb: my thoughts after taking eecs482 (operating systems) at the university of michigan
draft: true
---

[… placeholder paragraph — this post exists to test the layout. Real writing will replace it.]

Write normally here. Apostrophes like don't, can't and it's just work, and so do "quotes", em-dashes — and & ampersands.

## A section heading

- bullet points
- **bold**, *italics*, and `inline code`

> Blockquotes too.

```cpp
// code blocks
using std::vector;
using std::views::transform;

vector<int> squares(vector<int> nums) {
    return nums | transform([](int x) { return x * x; }) | std::ranges::to<vector>();
}
```



```python
# code blocks
def squares(nums):
    return [x * x for x in nums]
```
