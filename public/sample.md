# The Joke Tax Chronicles

Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.

## The King's Plan

The king thought long and hard, and finally came up with [a brilliant plan](#): he would tax the jokes in the kingdom.

> "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."


### The Joke Tax

The king's subjects were not amused. They grumbled and complained, but the king was firm:

- 1st level of puns: 5 gold coins
- 2nd level of jokes: 10 gold coins
- 3rd level of one-liners: 20 gold coins

As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.

### Jokester's Revolt

Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.

And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.

### The People's Rebellion

The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.

| King's Treasury | People's happiness |
| --------------- | ------------------- |
| Empty           | Overflowing         |
| Modest          | Satisfied           |
| Full            | Ecstatic            |

The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.

The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.



```json title="components.json"
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "rsc": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}
```

### `add`

```bash
npx shadcn-ui@latest add
```

The `add` command is now much more capable. You can now add UI components but also import more complex components (coming soon).

The CLI will automatically resolve all components and dependencies, format them based on your custom config and add them to your project.

### `diff` (experimental)

```bash
npx shadcn-ui diff
```

```diff /pl-12/
const alertVariants = cva(
- "relative w-full rounded-lg border",
+ "relative w-full pl-12 rounded-lg border"
)
```

```json {6} title="components.json"
{
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

```txt showLineNumbers
Would you like to use TypeScript (recommended)? no/yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes
```

