---
title: Homebrew
description: The Missing Package Manager for macOS.
sidebar:
  order: 1
tableOfContents: false
---

[Homebrew](https://brew.sh/) is not only useful for installing packages and apps. When I need to reset, or set up a new Mac, I first clone my backup repo and run:

```bash title="bootstrap.sh"
#!/bin/zsh

if ! command -v brew >/dev/null 2>&1; then
  echo "Installing homebrew"
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

echo "Installing homebrew bundle"
brew bundle --all
```

Which first install [Homebrew](https://brew.sh/), then install all packages and apps from my `Brewfile` using [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle):

```ruby title="Brewfile"
tap "homebrew/bundle"

cask "zed"
cask "jetbrains-toolbox"

cask "karabiner-elements"
cask "raycast"
cask "shottr"
cask "finicky"
cask "squirrel"
cask "stats"

# App Store
brew "mas"
mas "Hidden Bar", id: 1452453066

# ... Other tools like zoom, slack, etc.
```
