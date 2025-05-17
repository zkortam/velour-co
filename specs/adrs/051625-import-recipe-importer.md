---
status: Proposed
date: 2025-05-16
decision-makers: [Team Leads]
---

# Importing External Recipes into Recipe Card App

## Context and Problem Statement  
Creating every recipe by hand is time consuming; many users already have a link to a blog or food
site. We want them to drop that URL into the app and have the card auto populate.

## Decision Drivers (Must Haves/Goals)
* Make sign-up easy and impressive. Users should be able to paste a link and see a recipe appear instantly.

* Keep most of the work in the browser for the MVP. We don’t want to spin up a big back end yet.

* Stay on the right side of copyright. Only pull data that websites openly provide.

* Avoid extra cost and technical headaches.

## Considered Options

| # | Option (plain name) | What it actually means | Upside | Downside |
|---|---------------------|------------------------|--------|----------|
| 1 | <mark>**Let the browser read the recipe from the web page itself**</mark> | JavaScript in the user’s browser pulls Schema.org tags. | No server to run and completely free. | 1) Fails on sites that block CORS (browser security) or have missing tags. 2) Broken/absent markup → data can be wrong. |
| 2 | <mark>**Call a ready-made recipe-extract API ([Spoonacular](https://spoonacular.com/food-api))**</mark> | Send the recipe URL to Spoonacular’s “Extract Recipe from URL” endpoint and get back clean JSON (title, ingredients, steps, etc.). | Quick to build; works on thousands of sites out of the box. | Requires an API key; free tier has daily limits and paid tier costs money. |
| 3 | **Have users paste the recipe text, then parse it** | Provide a big text box for users to copy-paste ingredients and steps, optionally parse with AI to fill fields. | No third-party dependencies. | Still a lot of manual effort — import isn’t really “one click.” |
| 4 | **Skip importing for now** | Only manual card creation in MVP; revisit later. | Simplest, zero risk. | Higher barrier for new users; behind competitors that offer importing. |


## Decision Outcome  
**Chosen approach: Hybrid**  
* **Phase 1 (MVP)** – call Spoonacular’s Extract API (Option 2) for immediate coverage of ~5k sites.  
* **Phase 2** – stand-up a tiny serverless function that wraps `recipe-scrapers` (Option 3) as a
fallback once we hit API-quota or need private/offline scraping.

### Consequences
*✅  Fast to ship; minimal client code.*

*✅  Handles CORS and weird HTML for us.*

*❌  Relies on an external service / API key; possible cost once traffic grows.* (free for many uses unless we go public)

*❌  Adds operational work later (Phase 2 microservice).*

### Confirmation
### Implementation checks (kept short & clear)

- **Jest unit test**  
  Verify that calling `importRecipe('https://www.allrecipes.com/recipe/24074')`  
  returns the fields `title`, `ingredients[]`, `instructions`, and `totalTime`.

- **CI run**  
  GitHub Actions executes `npm test` on every push/PR.  
  Tests mock the API call, so no real network or API key is needed.

- **Code review guard**  
  Confirm the Spoonacular API key is stored only in **GitHub Secrets**  
  and never appears in any committed file.

## Pros and Cons of the Options

### 1  —  Let the browser read the recipe tags  
**Pros**  
- No server or API costs—completely client-side.  
- Works even when the user is offline.  

**Cons**  
- Many sites block these requests via CORS.  
- Missing or broken Schema.org tags lead to unreliable data.

---

### 2  —  Use the Spoonacular “Extract Recipe” API  
**Pros**  
- Very quick to implement; covers thousands of recipe sites.  
- Returns clean, normalized JSON fields (title, ingredients, steps, time).  

**Cons**  
- Requires an API key; free tier is limited (~150 calls/day).  
- Higher usage costs money and TOS requires attribution.  
- We become dependent on a third-party service’s uptime.

---

### 3  —  Let users copy-paste the recipe text  
**Pros**  
- No third-party services or credentials needed.  
- Simple to code; users control exactly what is imported.  

**Cons**  
- Still a lot of manual work—defeats the “one-click import” goal.  
- Parsing free-text (even with AI) can be error-prone.

---

### 4  —  Skip importing for the MVP  
**Pros**  
- Simplest path: nothing new to build or maintain.  
- Lets the team focus on core CRUD features first.  

**Cons**  
- Users must type every recipe by hand—high friction.  
- Competitors already offer importing; we risk falling behind.



## More Information  (quick references)

* **Schema.org “Recipe” spec** – defines the standard field names  
  (e.g., `name`, `recipeIngredient`, `recipeInstructions`, `totalTime`)  
  that we’ll map into our card model.  
  <https://schema.org/Recipe>

* **Example JSON-LD parsing tutorial (Node.js)** – shows how to locate  
  the `<script type="application/ld+json">` block in an HTML page and  
  common pitfalls (bad JSON, multiple scripts, etc.).  
  <https://www.smashingmagazine.com/2023/01/parsing-json-ld-nodejs/>

* **Spoonacular Extract API docs** – request/response format, rate limits,  
  and attribution rules for the free tier.  
  <https://spoonacular.com/food-api/docs#Extract-Recipe-From-Website>

*(These links are “read later” material; the ADR just keeps them in one place so no one has to hunt them down again.)*

---
