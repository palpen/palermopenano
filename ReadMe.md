## Palermo Penano's website

My website is [here](https://palpen.github.io/palermopenano), which is a modified version of the website created by following [this](http://kbroman.org/simple_site/) very informative tutorial. Most of the customization were made in the `default.html` file found in `_includes/themes/twitter/default.html`

### How to make changes to the website ###
- `index.md` changes the contents of the homepage
- All the `.md` files in the `pages` folder changes the contents of the other pages
- Execute the following to add, commit, and push the changes and update the website (it may take a few minutes for the changes to be reflected on the page):

```
git add <FILE NAME>
git commit -m "<DESCRIPTION OF CHANGE>"  
git push -u origin gh-pages  
```

### Setting up a custom domain for your GitHub Page using NameCheap
- [Official guide by NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)
- [A blog post on the topic](https://gist.github.com/plembo/84f80c920bb5ac6f19e53fe6f8db1ff7)

---
