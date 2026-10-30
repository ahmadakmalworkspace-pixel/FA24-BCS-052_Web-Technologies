# Midterm

Name: Mian Ahmad Akmal
Roll number: FA24-BCS-052
N = 52
BP = 600 + 52 = 652px
H = (52 x 7) mod 360 = 4
K = (52 mod 3) + 3 = 4

## Files changed

- index.html
- product.html
- op-xy.html, op-1-field.html, tp-7.html, po-33.html, ob-4.html, m-1.html, cm-15.html
- style.css
- script.js (new)
- README.md

## Task 1 - CSS-only category filter

I gave each product card one of 4 categories (samplers, synths, speakers, recording) using a data-category attribute. I added 5 radio buttons (All plus 4 categories) above the grid, with All checked by default. In style.css I used the :has() selector so that when a category radio is checked, every card that is not in that category gets display: none. The selected label uses the accent colour hsl(4, 70%, 45%).

## Task 2 - Product page layout with a sticky details box

I put the image, details and description in a CSS Grid with named grid-template-areas. Below 652px they stack in one column. From 652px, the image and details sit side by side and the description sits underneath at full width. From 652px the details box has position: sticky with top: 82px. I applied the same layout to all 8 product pages and wrote a long description on product.html.

## Task 3 - JavaScript search and price sort

script.js works on the cards already in index.html. The search box hides cards whose name does not contain the typed text. It works together with the category filter, and a "No products found" message replaces the grid when nothing matches. The Sort by price button reorders the existing cards with appendChild, lowest first and then highest first. Products above 5200 get a Premium label added by the script. I changed the prices to rupees so that some products are above 5200.

## AI tools used

Claude
