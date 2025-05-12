function rotate_logo()
{
 let rotation = 0;
  let scrollLoc = window.pageYOffset; // Get initial scroll position
  const logo = document.querySelector('.logo'); // Get logo element

  window.addEventListener('scroll', () => {
    const newLoc = window.pageYOffset;
    const diffLoc = scrollLoc - newLoc;
    
    rotation += diffLoc; // Update rotation value
    scrollLoc = newLoc; // Update stored scroll position

    const rotationStr = `rotate(${rotation}deg)`; // Template literal
    
    // Apply transformations with vendor prefixes
    logo.style.WebkitTransform = rotationStr;
    logo.style.MozTransform = rotationStr;
    logo.style.transform = rotationStr;
  });
}
rotate_logo(); // call the function