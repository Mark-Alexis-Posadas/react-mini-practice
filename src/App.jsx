//Done - Render List of Products: Render a list of products from an array of product objects. Each product object should have properties like name, price, and description.

import Objects from "./exercises/objects/Objects";

//Done - Filter Products: Add buttons to filter the products based on their category. Categories could be stored as a property in the product objects.

// Add to Cart: Create a button next to each product to add it to a shopping cart. Display the total number of items in the cart.

// Remove from Cart: Add a button to each item in the shopping cart to remove it from the cart.

// Toggle Product Availability: Render a list of products with a toggle button next to each product to toggle its availability (in stock/out of stock).

// Sort Products: Add buttons to sort the list of products by price (ascending/descending) or name (alphabetically).

// Render Comments: Render a list of comments from an array of comment objects. Each comment object should have properties like author, date, and content.

// Add Comment Form: Create a form with input fields for author name and comment content. On submission, add the new comment to the list of comments.

// Delete Comment: Add a button to each comment to delete it from the list of comments.

// Like/Dislike Comment: Add buttons to each comment to like or dislike it. Display the number of likes and dislikes for each comment.

const App = () => {
  return (
    <div>
      <Objects />
    </div>
  );
};

export default App;
