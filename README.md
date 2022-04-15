
![Screenshot 2022-04-15 at 09 56 06](https://user-images.githubusercontent.com/27992446/163518416-28b37a0f-e0a4-431f-a0a9-47a65cd9328b.png)

**See Demo** [here](https://counter13.herokuapp.com/)



A counter component in React.js, HTML and CSS ( without external JS/CSS frameworks or libraries such as bootstrap, lodash, etc) that can increment or decrement a counter upon clicking the plus and minus buttons.

Functional requirements - 

1. The starting value of the counter should be picked from the GET API shared below. If no value is present then the counter will start at 1.
2. The counter can be initialized with a max value. The max value will come from an environment variable `MAX_VALUE`. If no environment variable is present, then assume that the max value will be 1000. If a max value is present then the counter can be incremented to only that max value. There is no minimum value for the counter.
3. The user can also type a value into the counter.
4. The value of the counter will be additionally displayed below the counter as a separate "Counter value" component as shown in the design. This additional "Counter value : 10" text component should be a separate component and not part of the actual counter component.
5. While the counter value API is being called, the "Saving counter value" loader and text should get displayed on top of the counter.
6. Create a provision to update the value of the counter at the back-end when the user changes the counter value. When the API call is in progress the user should not be blocked from manipulating the counter value through any of the inputs/buttons.
