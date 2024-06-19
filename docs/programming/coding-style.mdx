---
title: 💭 Coding Style
---

Coding style is the "look and feel" of the code that we write.
It is a personal preference, and people rarely have exactly the same preferences.

Thanks to style guides (e.g. [Swift API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/))
and formatters (e.g. [Prettier](https://prettier.io/)),
we can avoid lengthy debates over code style in code reviews.

Below is the coding style that I use in my personal projects and when there are
no conflicting team rules.

## Principles

- Be **Precise**, yet **Concise**; Value **Clarity** over **Brevity**.
- For APIs (functions, etc.), prioritize **Clarity** at the **Call Site**.
- Avoid noise and low or no value chores, in code and future change diffs.

## General

### File Structure

There are two popular flavors on file structure:

- Grouping by file type (`src/ & test/`, `models/ & controllers/`, `components/ & hooks/`, etc.)
- Grouping by features (colocation)

I prefer colocation, "things change together are placed close to each other."

The [file nesting](https://www.jetbrains.com/help/idea/file-nesting-dialog.html)
feature from JetBrains IDEs makes the experience even better with colocation.

### Naming

My favourite style guide on naming is from
[Swift API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/#naming).
There is one thing that I do differently:

> [Acronyms and initialisms](https://en.wikipedia.org/wiki/Acronym)
> that commonly appear as all upper case in American English should be uniformly
> up- or down-cased according to case conventions:
>
> ```
> var utf8Bytes: [UTF8.CodeUnit]
> var isRepresentableAsASCII = true
> var userSMTPServer: SecureSMTPServer
> ```

I find `camelCase` easier to read when the acronym isn't the last word,
particularly when one acronym follows another.

## JavaScript / TypeScript {#javascript-typescript}

### Prettier

Configurations I prefer over the defaults:

```javascript title="prettier.config.js"
module.exports = {
  singleQuote: true,
  semi: false,
  bracketSameLine: true,
}
```

These are mostly personal preferences, but also to avoid "noise and chores",
or as [Kent C. Dodds](https://www.epicweb.dev/contributors/kent-c-dodds)
puts it in his [words](https://www.epicweb.dev/your-code-style-does-matter-actually),
to avoid "babysitting".

### let v.s. const

I used to [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
for many years, like most of the others. However, after reading
[const-antly Confused](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apA.md#const-antly-confused)
from the book [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed),
I reflected on my own code and realized that it has little value for me,
but sometimes add noises:

- Cause Prettier to break lines when `let` could fit the code in one line.
- Need to change `const` to `let` when needed to reassign later.
  Especially annoying when the variable is in destructuring.

So I now use `let` by default and only use `const` for true "constants".

### == v.s. === {#eqeqeq}

Another rule I used to follow until read the book
[You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed)
was [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq),
"Require the use of `===` and `!==`".

After reading [Type Aware Equality](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch4.md#type-aware-equality),
I realized that in most cases, `x === y` logically equals to
`typeof x == typeof y && x == y`. Interestingly,
[eqeqeq has a "smart" option](https://eslint.org/docs/latest/rules/eqeqeq#smart),
in which you can use `x == y` when it is clear whether `typeof x == typeof y`.
When use `TypeScript`, it is clear most of the time.

So the extra `=` in `===` is mostly noise in `TypeScript` code except for a few cases.

One of the cases is type unions, as in `let x: string | number | boolean`.
I may consider using `===` for early returns, for instance, `if (x === false) return`,
However, type checks like `if (typeof x == 'boolean')...` are more preferred.

Another (edge) case is `[] == ![]`. I am not sure if I will ever encounter it.
Will update if I ever do.

### Named exports v.s. Default exports

For a JavaScript module, `export`s are public APIs,
for which I prioritize **Clarity** at the **Call Site**.
So whether to use named or default exports depends on how the module is used.

When the `export` is imported on the call site and used in code with a name,
the name should be part of the API, Therefore, named exports should be used.

When a third-party tool loads the module,
instead of it being imported and used in code,
a default export should be used.
In most cases, it is the sole purpose of the entire module.
