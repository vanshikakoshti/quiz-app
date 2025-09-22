// quizData.js

const quizData = {
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Cascading Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which HTML tag is used to link an external CSS file?",
      options: ["<link>", "<style>", "<script>", "<css>"],
      answer: "<link>",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "font-color", "color", "text-style"],
      answer: "color",
    },
    {
      question: "How do you insert a comment in a CSS file?",
      options: [
        "// this is a comment",
        "/* this is a comment */",
        "# this is a comment",
        "<!-- this is a comment -->",
      ],
      answer: "/* this is a comment */",
    },
    {
      question: "Which CSS property controls the size of text?",
      options: ["font-weight", "text-size", "font-size", "text-style"],
      answer: "font-size",
    },
    {
      question: "Which CSS property is used to change the background color?",
      options: ["background-color", "color", "bgcolor", "background"],
      answer: "background-color",
    },
    {
      question: "Which is the correct CSS syntax?",
      options: [
        "body {color: black;}",
        "{body:color=black;}",
        "{body;color:black;}",
        "body:color=black;",
      ],
      answer: "body {color: black;}",
    },
    {
      question: "How do you select an element with id 'header' in CSS?",
      options: ["#header", ".header", "header", "*header"],
      answer: "#header",
    },
    {
      question: "How do you select elements with class 'menu'?",
      options: [".menu", "#menu", "*menu", "menu"],
      answer: ".menu",
    },
    {
      question: "What is the default value of the position property?",
      options: ["relative", "fixed", "absolute", "static"],
      answer: "static",
    },
  ],

  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<script>", "<css>", "<link>"],
      answer: "<style>",
    },
    {
      question: "Which HTML tag is used to display a picture?",
      options: ["<pic>", "<image>", "<img>", "<src>"],
      answer: "<img>",
    },
    {
      question: "What is the correct HTML tag for the largest heading?",
      options: ["<heading>", "<h1>", "<h6>", "<head>"],
      answer: "<h1>",
    },
    {
      question:
        "Which HTML attribute specifies an alternate text for an image?",
      options: ["title", "alt", "src", "longdesc"],
      answer: "alt",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>",
    },
    {
      question: "How can you make a numbered list in HTML?",
      options: ["<ul>", "<ol>", "<dl>", "<list>"],
      answer: "<ol>",
    },
    {
      question: "Which tag is used to insert a line break in HTML?",
      options: ["<break>", "<br>", "<lb>", "<hr>"],
      answer: "<br>",
    },
    {
      question: "Which of the following is a semantic HTML element?",
      options: ["<div>", "<span>", "<section>", "<b>"],
      answer: "<section>",
    },
    {
      question: "What does the <title> tag do in HTML?",
      options: [
        "Sets the page background color",
        "Defines the title in the browser tab",
        "Adds a title to an image",
        "Creates a heading on the page",
      ],
      answer: "Defines the title in the browser tab",
    },
  ],
  react: [
    {
      question: "What is React?",
      options: [
        "A JavaScript framework",
        "A CSS library",
        "A JavaScript library for building user interfaces",
        "A database",
      ],
      answer: "A JavaScript library for building user interfaces",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Microsoft", "Facebook", "Twitter"],
      answer: "Facebook",
    },
    {
      question: "Which hook is used to manage state in a functional component?",
      options: ["useEffect", "useRef", "useContext", "useState"],
      answer: "useState",
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "A copy of the real DOM kept in memory",
        "A real DOM element",
        "A third-party plugin",
        "A deprecated feature in React",
      ],
      answer: "A copy of the real DOM kept in memory",
    },
    {
      question: "What is JSX?",
      options: [
        "A template language",
        "JavaScript XML syntax used in React",
        "A type of JSON file",
        "A CSS preprocessor",
      ],
      answer: "JavaScript XML syntax used in React",
    },
    {
      question: "Which hook is used to perform side effects in React?",
      options: ["useRef", "useMemo", "useState", "useEffect"],
      answer: "useEffect",
    },
    {
      question: "In React, what is a component?",
      options: [
        "A part of the Redux store",
        "A reusable piece of UI",
        "An HTML tag",
        "A database record",
      ],
      answer: "A reusable piece of UI",
    },
    {
      question: "How do you pass data from a parent to a child component?",
      options: ["State", "Hooks", "Props", "useContext"],
      answer: "Props",
    },
    {
      question: "Which of the following is a valid way to create a component?",
      options: [
        "function MyComponent() {}",
        "const MyComponent = () => {}",
        "class MyComponent extends React.Component {}",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What does the useRef hook return?",
      options: [
        "A setter function",
        "A DOM reference object",
        "A boolean value",
        "An array",
      ],
      answer: "A DOM reference object",
    },
  ],
  javascript: [
    {
      question: "What is the correct syntax to output text in JavaScript?",
      options: [
        "print('Hello World')",
        "console.log('Hello World')",
        "echo('Hello World')",
        "printf('Hello World')",
      ],
      answer: "console.log('Hello World')",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Oracle"],
      answer: "Netscape",
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["Number", "String", "Boolean", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["<!-- -->", "//", "**", "##"],
      answer: "//",
    },
    {
      question: "How do you write an if statement in JavaScript?",
      options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
      answer: "if (i == 5)",
    },
    {
      question:
        "Which method is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "parse()", "int()", "Number()"],
      answer: "parseInt()",
    },
    {
      question: "Which of these is not a JavaScript loop?",
      options: ["for", "foreach", "while", "do...while"],
      answer: "foreach",
    },
    {
      question: "What does '===' mean in JavaScript?",
      options: [
        "Assignment operator",
        "Equality operator (type coercion)",
        "Strict equality (value and type)",
        "None of the above",
      ],
      answer: "Strict equality (value and type)",
    },
    {
      question:
        "Which function is used to convert a JSON string into a JavaScript object?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "parseJSON()",
        "stringifyJSON()",
      ],
      answer: "JSON.parse()",
    },
  ],
  bootstrap: [
    {
      question: "What is Bootstrap?",
      options: [
        "A JavaScript framework",
        "A CSS framework",
        "A database",
        "A programming language",
      ],
      answer: "A CSS framework",
    },
    {
      question:
        "Which class is used to create a responsive fixed-width container in Bootstrap?",
      options: [
        ".container-fluid",
        ".container",
        ".fixed-container",
        ".responsive-container",
      ],
      answer: ".container",
    },
    {
      question:
        "Which Bootstrap class is used to create a button with primary color?",
      options: [
        ".btn-primary",
        ".btn-main",
        ".button-primary",
        ".btn-main-color",
      ],
      answer: ".btn-primary",
    },
    {
      question: "Bootstrap grid system is based on how many columns?",
      options: ["6", "8", "12", "16"],
      answer: "12",
    },
    {
      question: "Which class is used to hide an element in Bootstrap?",
      options: [".hidden", ".d-none", ".invisible", ".hide"],
      answer: ".d-none",
    },
    {
      question: "How do you include Bootstrap in your project?",
      options: [
        "Link to CSS and JS files in HTML",
        "Only JS files",
        "Only CSS files",
        "Write Bootstrap code manually",
      ],
      answer: "Link to CSS and JS files in HTML",
    },
    {
      question:
        "Which class in Bootstrap is used to create a responsive image?",
      options: [
        ".img-responsive",
        ".img-fluid",
        ".responsive-img",
        ".img-scale",
      ],
      answer: ".img-fluid",
    },
    {
      question: "Which class adds margin at the bottom of an element?",
      options: [".mb-3", ".mt-3", ".ml-3", ".mr-3"],
      answer: ".mb-3",
    },
    {
      question: "What does the `.row` class do in Bootstrap?",
      options: [
        "Creates a horizontal group of columns",
        "Creates a vertical list",
        "Adds padding around elements",
        "Creates a container",
      ],
      answer: "Creates a horizontal group of columns",
    },
    {
      question: "Which class is used to make text bold in Bootstrap?",
      options: [".text-bold", ".font-weight-bold", ".bold", ".fw-bold"],
      answer: ".fw-bold",
    },
  ],
};

export default quizData;
