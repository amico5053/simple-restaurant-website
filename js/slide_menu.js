// autoplay slide menu function
function slideMenu() 
{
	// setting slide index starting position.
	let slideIndex = 0;
	// assigning the dev elements for slides to constant varibale.
	const slide = document.getElementsByClassName("slide-menu");
	// setting element slides interval time to constant variable. 
	const intervalTime = 2000; 

	if(slide.length === 0) // if no slides move to next.
	{
		return;
	}

	slide[slideIndex].classList.add('active');

	// move to next slide function.
	function nextslide() 
	{
		// remove current active slide
		slide[slideIndex].classList.remove("active");
		// Move to next slide.
		slideIndex++;
		// Reset to first slide if at end
		if(slideIndex >= slide.length)
		{
			slideIndex = 0;
		}	
		// show next slide.
		slide[slideIndex].classList.add("active");
	}
	// start auto play
	let slideInterval = setInterval(nextslide,intervalTime);
}
document.addEventListener('DOMContentLoaded',slideMenu);