---
title: 👨‍💻 A Lazy Developer
description: Work smarter not harder.
---

I am one of those "lazy developers" who is "always looking for ways to do something faster, more efficiently."

> Most of you are familiar with the virtues of a programmer. There are three, of course: **« Laziness, Impatience and Hubris »**
>
> -- [Larry Wall](https://www.youtube.com/watch?v=G49RUPv5-NU)

My first job interview was introduced by a friend of a friend.
After the interview, my new friend showed me what he was working on.
I was blown away by how efficient he was on his IDE,
compared to what I could do with the IDE I was using.

I realized that the key of programming efficiently is not to type faster,
but to type less.

I started investing in tooling, with time and money.
I looked for the most powerful IDEs, spent hours learning the features and shortcuts.
I bought my first Mac to give those tools more memory, as Windows was still 32-Bit,
which can only have 4GB of memory.

## JetBrains IDEs

I first knew about JetBrains [IntelliJ IDEA](https://www.jetbrains.com/idea/) from
[John Lindquist](https://johnlindquist.com/)'s videos on Flash ActionScript,
but I didn't switch yet as I was still very happy with [FDT](https://fdt.powerflasher.com/).
Then I needed to write some `Objective-C` and [AppCode](https://www.jetbrains.com/objc/)
was an easy pick over Xcode. I have since then used:

- [AppCode](https://www.jetbrains.com/objc/) for `Objective-C` and `Swift`.
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) for `ActionScript` and `Java`.
- [CLion](https://www.jetbrains.com/clion/) for `C++`.
- [Rider](https://www.jetbrains.com/rider/) for `C#`.
- [WebStorm](https://www.jetbrains.com/webstorm/) for `JavaScript` and `TypeScript`.

I have been mostly using WebStorm in recent years, and there are more than 100 keyboard
shortcuts that I more or less used. I [created a table on Notion](https://responsible-eggnog-a31.notion.site/dcee0e26c53d47a5a4e7d44bc7a7c8aa?v=787386ed8d01423d9cfb6cd97b4ab000) ,
trying to re-organise those shortcuts. I thought I could only memorise more of
them to be more efficient.

Until...

## Vim

I heard about Vim for a few times in the past, but I thought I didn't need it.
I believed that I could be just as efficient at editing texts with the
IDE features and shortcuts. Then one of my colleagues switched from WebStorm to
[NeoVim](https://neovim.io/) and was very passionate about it. I asked him to show
me how to do a few things in Vim, which I felt inefficient to do in IDE.

It was **A LOT MORE** efficient in those cases.

So I decided to learn Vim and give it a proper try with the
[IdeaVim plugin](https://github.com/JetBrains/ideavim).
Not only did it make me more efficient with text editing;
once I learnt about leader key mapping, it totally changed the way I use IDE.

Instead of squeezing over 100 shortcuts into combinations of `⌘⌥⌃⇧` modifiers,
any key on the keyboard (following the `leader key`, which is `␣ spacebar` for me)
can switch the keyboard to a different layer,
on which each key can do a different thing.

e.g. `leader s` for "**S**ource Control",

- `␣ s n` to create a **N**ew branch
- `␣ s N` to create a **N**ew pull request

There are still places modifiers work better than leader keys:

- Repeating actions, e.g., move lines/statements up/down.
- Same mapping for the same/similar actions in different IDE contexts.
  e.g., move to previous/next change in the file, and previous/next diff in the diff view.

I am now settling with:

- [`HJKL` with `⌘⌥⌃⇧` modifiers](https://github.com/evan-liu/dotfiles?tab=readme-ov-file#h-j-k-l-with-modifiers) for jumping/moving up/down and back/forward.
- [Leader Key Mapping](https://github.com/evan-liu/dotfiles?tab=readme-ov-file#leader-key-mapping) for one-off actions.

## Zed

While learning Vim, I started using [NeoVim](https://neovim.io/) for text file
editing like configs and notes. I liked the speed, but the cost for setting
everything up (config, plugins, etc.), was too high for me.

With [Zed](https://zed.dev/), I get the speed, Vim mode, and the
[(not yet) same mappings](https://github.com/evan-liu/dotfiles?tab=readme-ov-file#dotfiles)
I have with IDEs.

I do not think I will switch to Zed for big projects. But I use it for
all the text editing and small projects (config, note, scripts, etc.).

## Karabiner-Elements

Text/Code editing is not all I do on computer though.
I would like to use `H J K L` for `← ↓ ↑ →` outside of the code editors,
and use the same shortcuts for common actions in other apps, like browsers, too:

- `⌃` + `H`/`L` for going back/forward history
- `⌥` + `H`/`L` for going to previous/next tab

[Karabiner-Elements](https://karabiner-elements.pqrs.org/) to the rescue.
It can do all of that and [a lot more](https://github.com/evan-liu/karabiner-config/blob/main/karabiner-config.ts).

Together with [some other tools](/category/-mac),
I continue the journey to be a more ~~lazy~~ productive Mac user.
