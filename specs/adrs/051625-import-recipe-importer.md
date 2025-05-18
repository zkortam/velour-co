---
status: accepted
date: 2025-05-16
decision-makers: [Mehdi Aziz]
---

# Importing External Recipes into Recipe Card App

## Context and Problem Statement  
Creating every recipe by hand is time consuming; many users already have a link to a blog or food site.  
We want them to drop that URL into the app and have the recipe card auto-populate instantly.

## Goals  
- Allow users to paste a recipe link and instantly generate a recipe card  
- Keep most of the logic in the browser for MVP simplicity  
- Only use data that websites openly allow (legal + ethical)  
- Avoid extra costs and backend maintenance

## Our Solution: Spoonacular API Integration
To support recipe imports from external websites, we’re integrating the [Spoonacular Extract Recipe API](https://spoonacular.com/food-api/docs#Extract-Recipe-From-Website).

When a user pastes a recipe link, we send a request like:

GET https://api.spoonacular.com/recipes/extract
    ?url=<RECIPE_URL>
    &apiKey=YOUR_KEY

## Implementation Plan
1. Get a Spoonacular API key  
2. Build the `importRecipe(url)` function to fetch and process the API response  
3. Add a URL input and Import button in the Add Recipe modal  
4. Add attribution (“Powered by Spoonacular”) in the UI per TOS  
5. Write tests to validate:
   - Proper parsing of valid URLs  
   - Handling of invalid or error responses  
   - Saving to localStorage  
   - Duplicate prevention

## Notes and Tradeoffs
- Spoonacular has a free tier (150 requests/day) — enough for MVP and testing  
- API attribution is required in the app  
- If usage exceeds limits, we may explore a fallback option later (e.g., self-hosted scraping)

## References
- [Spoonacular API Docs](https://spoonacular.com/food-api/docs#Extract-Recipe-From-Website)  
- [Schema.org Recipe Format](https://schema.org/Recipe)  
- [JSON-LD Parsing Tutorial](https://www.smashingmagazine.com/2023/01/parsing-json-ld-nodejs/)

