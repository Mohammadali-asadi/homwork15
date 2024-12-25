// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:

document.body.style.backgroundColor = "#0a122d";

const image = document.querySelector('img'); 
if (image) {
  image.style.margin = "4rem 0";
  image.style.borderRadius = "1rem";
} else {
  console.error("No image element found on the page.");
}

const h5 = document.querySelector('h5');

if (h1 && h5) {
  h1.style.position = "absolute";
  h1.style.top = "50%";
  h1.style.left = "50%";
  h1.style.transform = "translate(-50%, -100%)"; 

  h5.style.position = "absolute";
  h5.style.top = "50%";
  h5.style.left = "50%";
  h5.style.transform = "translate(-50%, 50%)"; 
  console.error("h1 or h5 element not found.");
}

