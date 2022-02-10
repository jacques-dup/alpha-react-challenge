# Question 3

## Instructions
Finish the implementation of, and improve the fake Alpha Course Dashboard. This dashboard calls an API to fetch course and user data, which can be used to render a list of card elements to display the relevant information for each Alpha course.

> Note: For this challenge there are no constraints and you can edit any part of any file in the "Question3" directory, and add new files as you see fit.

### Part 1: Finish the Implementation
1. Implement the list of `<CourseCard>` elements to be rendered.
1. Implement the list of Participants to be rendered on the course cards.
1. Change the display for the "Host:" entry to be the host's name instead of the ID.

### Part 2: Redo the data fetching
1. Refactor the `data` variable:<br>
Flatten the data of both the course data and user data to be one array that only contains the object data required for the components. You can create your own function or module for this, as you see fit.
1. Making use of React Hooks, ensure that the data fetching will only happen once, and not on every render.

### Part 3: Optional Improvements (Bonus Section)
1. Add Styling to the components making use of the provided `.css` file. (Feel free to configure additional loaders for Sass or Less if you are more comfortable in those formats)
1. Write a function that will group any participants with the same surname (indicating that they are family) on to the same line of the Participants list. (For Example: Daniel LaRusso and Lucille LaRusso)