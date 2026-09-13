Project Name: Nadim DevStack 

Nadim DevStack is a modern and responsive technology stack builder built with React and TypeScript. It has sum features Like Selecting ,Deleting all Deleting etc.

## 🌐 Live Website

🔗 Live Demo: [Add Your Netlify/Vercel Live Link Here]

## 📂 Repository

🔗 GitHub: [Add Your GitHub Repository Link Here]

---

## 🛠️ Technologies Used

1 React.js
 2 TypeScript
 3 Tailwind CSS
 4 DaisyUI
5  React-Toastify
6  JSON
7 Vite

##  Features

# 1 Explore Technologies
Users can browse different technologies and view useful information about each technology, including its category and difficulty level.
 # 2 Build your own Stacks.
Users can select technologies and add them to their personal technology stack.

# Amazing Notifications
React-Toastify is used to show a notification when a technology is successfully added to the user's stack.
#  React Questions & Answers

## 1   What is JSX, and why is it used in React?

JSX is a syntax that allows us to Code like HTML in React ,with JS Concepts.
It makes React components easier to write and understand because we can describe the UI directly inside our component code.

 



## 2What is the difference between props and state?

"Props" are used to pass data from a parent component to a child component.

"State" are use to managed data inside a component that can change over time.

# 3. what does the `useState` hook do, and where did you use it in this project?

The 'useStatea' hook is used to create and manage changing data inside a React component.

In this project, i also used "useState"  to store the selected technologies and control whether a technology has been added to the stack.

# 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component, such as fetching data from an external source.

If JSON data is loaded using useEffect, it can fetch the data when the component loads and then store the data in state.

In this project, the technology data comes from a JSON file.

# 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

A unique key helps React understand which item was changed, added, or removed. This makes updating the UI more efficient.
example:
{technologies.map((tech) => (
  <TechCard key={tech.id} Tech={tech} />
))}



# 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, in this project, the selected stack can show an empty message when there are no selected technologies.
example:
    const handleRemove =(tech:TechTypes)=>{
        const newRemoveSetAdder= addTech.filter(fil=> fil.id !== tech.id)
        setAddTech(newRemoveSetAdder)
        
    }

# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A child can send something back to the parent by calling a function received through props. In this project, setAddTech is passed to the child so the child can update the selected technology list.
example:
<div className="col-span-9">
                 <AvilableTech toUse={toUse} addTech={addTech} setAddTech={setAddTech}></AvilableTech>
                </div>