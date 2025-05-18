---
status: pending
date: 2025-05-18
decision-makers: [Manan Ahmad]
---
# Add to Cart Interaction 

---

## Context & Problem Statement

Our recipe-card web app currently lets users **store** and **import** recipes, but it does not help them **act** on those recipes. We want to:

* let users add all the ingredients of a recipe to a *shopping list / cart* in one click;
* display that list in a dedicated **Shopping** page so they can tick items off at the store or jump to an online checkout;
* keep everything **client-side** (for now) to stay within our MVP scope and offline-friendly design.

The architectural question is **how should we implement the Add-to-Cart flow and where should the data live?**

---

## Considered Options

| # | Option | Summary |
|:-:|--------|---------|
| 1 | **Inline “Buy ingredients” button → Local cart (LocalStorage)** | A button on each recipe card pushes that recipe’s ingredients into a cart array stored in `localStorage`. A separate `/shop` page reads that array and renders the list. |
| 2 | **Dedicated Shopping Page with Session-storage cart** | Same as (1) but cart lives in `sessionStorage` so it resets per browser session. |
| 3 | **Redirect to third-party grocery API (Instacart, Kroger, etc.)** | Clicking “Shop ingredients” opens an external service with the items pre-selected via URL parameters. No local cart. |
| 4 | **Hybrid: Local cart + affiliate links on /shop** | Use option 1 for state, but also show buttons that build affiliate URLs to partner grocery sites for potential revenue. |

---

## Decision Outcome

**Chosen option: 4 – Hybrid local cart + affiliate links.**  
We’ll store the cart as JSON in `localStorage` (key: `recipeCart`) and render it on `/shop.html`. For each item we’ll display quantity + unit + ingredient and, when possible, attach a constructed link to a partner grocery search (Instacart first). This keeps the feature fully offline-capable while giving us a path to monetisation.

*Why not option 3 alone?* It sacrifices the offline usefulness/chance to tick off items.  
*Why not option 2?* Losing persistence across sessions would annoy users.  
Option 1 is fine but misses future revenue opportunities that option 4 adds almost “for free.”

---

## Consequences

* **Good** – Very low back-end complexity (no server DB), works offline, easy to prototype.  
* **Good** – Affiliate links lay the groundwork for future revenue without locking us into a single provider.  
* **Bad** – LocalStorage has a 5-10 MB quota; huge carts could overflow (unlikely for MVP).  
* **Bad** – No cross-device sync; users on a new device will see an empty cart.  
* **Trade-off** – Affiliate deep-links are brittle; DOM parsing of ingredient text must stay clean.

---

## Implementation Plan 

1. **Data model**

   ```ts
   type CartItem = { id: string; name: string; qty: number; unit?: string };
   type Cart = CartItem[];
   // stored under localStorage['recipeCart'] 
  -
  ## References 
  * [Instacart Checkout](https://docs.instacart.com/storefront/learn_about_your_storefront/cart_and_checkout/checkout/)
  * [Spoontacular Extract](https://spoonacular.com/food-api/docs#Extract-Recipe-From-Website)
  
