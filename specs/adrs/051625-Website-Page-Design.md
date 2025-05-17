# Website Page Design

## Context and Problem Statement

How to design the three core user-facing pages of our recipe card CRUD collection website (Homepage, Calendar Page, and My Recipes Page)?  
How to ensure the pages are consistent in design, accessible, and intuitive for users?  
How to balance simplicity with functionality in the layout and optimize for performance and usability (RAIL)?

## Considered Options

- Designing it as a mobile app --> Not viable because we do not have the technical skillsets to do this in the given timeframe.
- Define the data structure first 
  
## Decision Outcome

Chosen option: Define the data structure first because the recipe card data structure is a central part to the functionality of our website and thus must be standardize across all pages. 

**Details of the Decision**:
- RAIL principles: Pages must be Responsive, include basic Animations, have minimal Idle time, and reduce Load time wherever possible.
- Common UI elements:
  - Navigation bar with a Home icon on the top-left
  - Consistent font, color scheme, and spacing
  - Shared layout containers with Tailwind breakpoints for responsiveness
- Reuse design tokens/themes to keep styling cohesive
- Consider semantic HTML, ARIA labels, readable contrast ratios, etc. for accessibility
  - Use a stackable layout to scale to smaller screens 

### Homepage 
Purpose: Serve as a landing page with high-level navigation to other parts of the site.  
Requirements:  
- All information fits entirely within a single screen on desktops (no scroll).
- Displays only essential information:
  - Site name/logo
  - Links/buttons to My Recipes and Calendar pages
  - Minimal content; acts as a dashboard rather than a recipe viewer
  
### My Recipes Page
Purpose: Serve as the main workspace for managing recipe cards.  
Requirements:  
- Modal layout for displying all recipe cards (add different layout features later)
- Scrollable if content exceeds screen
- Search functionality:
  - By recipe name/title
  - By features: ingredients, food category, price range, tags (easy/hard), cook time, etc.
- Filtering/Sorting options:
  - Alphabetical by name/title
  - By commonly regarded recipe traits (e.g., shortest time, lowest cost)
  - Categorical by features (as listed above)
- Clear visual distinction for editable vs. read-only states

### Calendar Page
Purpose: Visually organize and display recipes scheduled on specific days.  
Requirements:  
- Displays a calendar layout
- Each day shows recipe titles or icons (not the entire recipe card to avoid clutter)?
- On click/tap, show a modal or popup with recipe details?
- Users can add, remove, or move recipes (CRUD) from the calendar
  - Note: possibly implement My Recipes Page first and copy the functionality of CRUD to Calendar Page?

