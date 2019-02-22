# What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are like data types in a programming language, but defined explicately at the component level, and throws warnings if the wrong types are being passed. It's like Runtime type checking in other languages. 

# Describe a life-cycle event in React?
React components can be rendered, and applied to the DOM(mounting), updated(updating), and removed from the DOM(unmounted) with an life-cycle methods. 

Life Cycle events are what invoke Life-cycle methods.

# Explain the details of a Higher Order Component?
A Higher Order Component is a function that receives a Component as an argument and returns a new component. It's like passing a callback function. 

# What are three different ways to style components in React? Explain some of the benefits of each.
Static css file: old fashion, familiar, and simple way of styling with classnames and selectors.

JS defined CSS, Libraries like styled-components: Programatic control over styles, complex, must know JS pretty well.

Inline React Styling - Nice for one offs or embedding style in a component. Not DRY, generally not best practice.