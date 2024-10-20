# Easesmith Assignment

I have successfully completed the assignment. This assignment gave me an opportunity to showcase my skills in the `REACTJS`

### - Folder Structure

There are Three Folders we have to consider in this project they are `assets`,`components` and `css`. as the name suggests

> `assets` folder contains all the png that I have used in the entire project
> `components` folder contains all the jsx files that I have used in the entire project
> `css` folder contains all the x that I have used in the entire project

In the `components` folder, There are 7 jsx files namely

> Header.jsx - contains all the menubar,Search bar,company logo with userprofile logo and cart logo
> HomePage.jsx- contains nursery list and product listing with pagination(`view more`)
> NurseryListItem.jsx - contains the code for single nursery list Item.
> ProductListItem.jsx - contains code for single product list item.
> Modal.jsx - contains all the code related to modal,to develop
> ThankYouPage.jsx - contains all the code related to thank you page,
> Footer.jsx - contains all the details of the organisation.

- In the `css` folder you can see all the css is written separatly for individual component,also I have used same name as components for css file.
- all these files are imported into global `index.css`

## - Routing

There are two routes namely `/` and `/thankyou`.

- `/` renders `HomePage.jsx` and
- `/thankyou` renders `ThankYouPage.jsx`

## - Mockdata

I have generated the mock data from this site <https://perenual.com/docs/api> where I have downloaded indoor plant data and stored in `mockData.js`file.

- In the `mockData.js` we can see two lists
  - one is `PlantData` and
  - the other `nurseryData`

## -Functionality

- When the app initially loads, we see `HomePage.jsx` is rendered and we will see nursery plants and a product list. here we can horizontally scroll nursery list item.
- In the product list,we see a list of products with **_name_** ,**_sunshine_** and **_Image_** which change as per the product and **_price_** and **_rating_** remain unchange w.r.t to product. each product Item also contain a `View More` button with `Add to Cart `and `Buy on Rent` buttons.
- When the User clicks on the view more button, app routes to `ThankYouPage.jsx`,where we will show him a thank you message with product name and with a nice quote about plants and `Continue Shopping` button which on clicking routes back to `HomePage.jsx`
- When the user clicks on `Add to Cart` button , we will show him a modal which contain info about the product and a close button to close the modal.we will render `Modal.jsx` to show the modal.

## -Additional Functionality

- I have implemented sorting functionality inside our app.
  - Sorting by order of their `id` which is the default .
  - Sorting by Alphabetical order .I have arranged them based on the first letter of their `CommonName` Refer to `mockData.js`
- I have built my own modal without using any package.I have used `createPortal` API from `React` to achieve this functionality.Using `useState` I have implemented opening and closing of modal

# Thank You Easesmith and Nxtwave for giving this opportunity &#x1F680; &#x1F680;
