Thie repo uses mkdocs to generate its content.

 * /docs - where the actual content is
 * /site - built content, serve from here

```
pip install properdocs mkdocs-material mkdocs-revealjs mkdocs-no-sitemap-plugin

# we use our custom mkdocs-quiz so it has a gift exporter
pip install git+https://github.com/env3d/mkdocs-quiz.git@gift-export

# also need beautifulsoup4
pip install beautifulsoup4

```

When ready, deploy using the following

```
properdocs gh-deploy
```

