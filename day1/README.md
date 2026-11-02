# Day 1: Web Foundations & HTML Essentials 🌐

Welcome to Day 1 of my Web Development Learning Journey!

Today, I am starting with the foundation of web development: **HTML (HyperText Markup Language)**.

HTML is the language used to structure content on webpages. It tells the browser what content exists and what each piece of content represents.

Think of building a website like constructing a house:

- **HTML** is the structure: walls, doors, windows, and rooms.
- **CSS** is the appearance: paint, colours, decoration, and layout.
- **JavaScript** is the functionality: electricity, switches, and interactive features.

Today, my focus is understanding HTML and learning how to build a properly structured webpage.

---

## 📚 Table of Contents

1. [What Is HTML?](#-what-is-html)
2. [How Does the Web Work?](#-how-does-the-web-work)
3. [Understanding HTML Elements](#-understanding-html-elements)
4. [HTML Element Anatomy](#-html-element-anatomy)
5. [HTML5 Boilerplate](#-html5-boilerplate)
6. [HTML Headings](#-html-headings)
7. [Paragraphs and Text Formatting](#-paragraphs-and-text-formatting)
8. [Links and Navigation](#-links-and-navigation)
9. [Images and Media](#-images-and-media)
10. [HTML Lists](#-html-lists)
11. [Semantic HTML](#-semantic-html)
12. [Div and Span Elements](#-div-and-span-elements)
13. [HTML Tables](#-html-tables)
14. [HTML Forms](#-html-forms)
15. [HTML Attributes](#-html-attributes)
16. [HTML Entities](#-html-entities)
17. [HTML Comments](#-html-comments)
18. [HTML Metadata](#-html-metadata)
19. [Accessibility Basics](#-accessibility-basics)
20. [HTML Validation and Debugging](#-html-validation-and-debugging)
21. [Project Structure](#-project-structure)
22. [Running the Project](#-running-the-project)
23. [Best Practices](#-best-practices)
24. [Learning Resources](#-learning-resources)
25. [What I Learned](#-what-i-learned)

---

## 🌍 What Is HTML?

HTML stands for **HyperText Markup Language**.

It is a markup language used to define the structure and meaning of content on a webpage.

HTML is not a programming language because it does not provide general-purpose programming logic like loops, conditions, or functions.

### What can HTML create?

- Headings and paragraphs.
- Images and hyperlinks.
- Lists and tables.
- Forms and input fields.
- Page sections and navigation.
- Audio and video content.

### Example

```html
<h1>Welcome to My Website</h1>
<p>This is my first webpage.</p>
```

The browser interprets this HTML and displays a heading followed by a paragraph.

---

## 🌐 How Does the Web Work?

When you visit a website, several things happen:

1. You enter a website address, such as `www.example.com`.
2. Your browser uses DNS to find the website's IP address.
3. Your browser sends a request to the website's server.
4. The server responds with resources such as HTML, CSS, JavaScript, and images.
5. The browser interprets these resources and displays the webpage.

### Important web technologies

| Technology | Purpose |
|---|---|
| HTML | Structures webpage content |
| CSS | Styles and arranges webpage content |
| JavaScript | Adds interactivity and behaviour |
| HTTP/HTTPS | Allows browsers and servers to communicate |
| DNS | Translates domain names into IP addresses |

**Networking connection:** Understanding DNS, IP addresses, HTTP, and servers is useful because websites depend on networks to communicate. This also connects web development with my interest in network engineering.

---

## 🧱 Understanding HTML Elements

An HTML element is a building block of a webpage.

Most HTML elements have:

- An opening tag.
- Content.
- A closing tag.

Example:

```html
<p>This is a paragraph.</p>
```

Explanation:

- `<p>` is the opening tag.
- `This is a paragraph.` is the content.
- `</p>` is the closing tag.
- The complete structure is called an HTML element.

### Common categories of HTML elements

**1. Container elements**

These normally have an opening tag, content, and closing tag.

```html
<h1>My Heading</h1>
<p>My paragraph.</p>
<div>Content inside a container.</div>
```

**2. Void elements**

These do not have closing tags because they cannot contain content.

```html
<img src="profile.jpg" alt="My profile picture">
<br>
<hr>
<input type="text">
<meta charset="UTF-8">
```

Remember: Void elements do not use closing tags such as `</img>` or `</br>`.

---

## 🔍 HTML Element Anatomy

Let's examine an HTML element with an attribute:

```html
<a href="https://www.google.com">Visit Google</a>
```

| Part | Meaning |
|---|---|
| `<a>` | Opening anchor tag |
| `href` | Attribute name |
| `"https://www.google.com"` | Attribute value |
| `Visit Google` | Visible link text |
| `</a>` | Closing tag |

An **attribute** provides additional information about an HTML element.

---

## 🏗️ HTML5 Boilerplate

An HTML boilerplate is a standard starting structure for creating an HTML webpage.

Every HTML project should begin with a proper document structure.

### Complete beginner-friendly semantic HTML5 boilerplate

The following example includes comments explaining what each element does.

```html
<!DOCTYPE html>
<!--
    Declares that this document uses HTML5.
    It helps the browser interpret the page correctly.
-->

<html lang="en">
<!--
    The <html> element is the root of the webpage.
    lang="en" tells browsers and screen readers
    that the main language of this document is English.
-->

<head>
    <!--
        The <head> contains information ABOUT the webpage.
        Most of this information is not directly displayed
        inside the visible webpage.
    -->

    <meta charset="UTF-8">
    <!--
        Supports a wide range of characters and symbols,
        including letters, numbers, and special characters.
    -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--
        Makes the webpage adapt to different screen sizes,
        including mobile phones, tablets, and computers.
    -->

    <meta
        name="description"
        content="A beginner's journey into learning HTML and web development."
    >
    <!--
        Provides a short description of the webpage.
        Search engines may use this description in search results.
    -->

    <title>My Web Development Journey</title>
    <!--
        Sets the title displayed in the browser tab.
    -->

    <!--
        We will connect an external CSS file here when learning CSS:

        <link rel="stylesheet" href="style.css">

        This tells the browser to load the styles from style.css.
    -->

</head>

<body>
    <!--
        The <body> contains the actual webpage content.
        Everything visitors see and interact with is placed here.
    -->

    <header>
        <!--
            HEADER:
            Contains introductory content such as the website
            name, logo, heading, or navigation menu.
        -->

        <h1>My Web Development Journey</h1>
        <!-- Main heading of the webpage. -->

        <nav aria-label="Main navigation">
            <!--
                NAV:
                Contains important navigation links.
                aria-label provides a descriptive name
                for screen readers.
            -->

            <ul>
                <!-- An unordered list groups navigation links. -->

                <li>
                    <a href="index.html">Home</a>
                </li>

                <li>
                    <a href="about.html">About</a>
                </li>

                <li>
                    <a href="contact.html">Contact</a>
                </li>

            </ul>
        </nav>

    </header>

    <main>
        <!--
            MAIN:
            Contains the primary content of the webpage.

            A typical page should have one main content area.
            It is placed between the header and footer.
        -->

        <section id="introduction">
            <!--
                SECTION:
                Groups related content under one topic.

                Sections should usually have a heading.
                The id gives this section a unique identifier.
            -->

            <h2>Introduction</h2>

            <p>
                Welcome to my web development journey!
                I am learning HTML, CSS, and JavaScript.
            </p>

        </section>

        <section id="learning">
            <!-- Another section for a different topic. -->

            <h2>What I Am Learning</h2>

            <p>
                I am starting with HTML to understand
                how webpages are structured.
            </p>

        </section>

        <article>
            <!--
                ARTICLE:
                Represents independent content that can make
                sense on its own, such as a blog post or news story.
            -->

            <h2>Day 1: HTML Essentials</h2>

            <p>
                Today, I learned about HTML elements,
                attributes, headings, links, and semantic HTML.
            </p>

        </article>

        <aside>
            <!--
                ASIDE:
                Contains supplementary or related information,
                such as useful links, tips, or resources.
            -->

            <h2>Learning Resources</h2>

            <ul>
                <li>
                    <a href="https://www.w3schools.com/html/">
                        W3Schools HTML Tutorial
                    </a>
                </li>

                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        MDN HTML Documentation
                    </a>
                </li>
            </ul>

        </aside>

        <!--
            DIV:
            A generic container without semantic meaning.

            Use it when you need to group elements for styling
            or layout and no semantic element is appropriate.

            Example:

            <div class="learning-card">
                <h2>My Progress</h2>
                <p>I completed my first HTML lesson.</p>
            </div>
        -->

    </main>

    <footer>
        <!--
            FOOTER:
            Contains closing or supporting information,
            such as copyright details and contact information.
        -->

        <p>&copy; 2026 My Web Development Journey</p>

        <p>
            <a href="mailto:example@email.com">Contact Me</a>
        </p>

    </footer>

</body>
</html>
```

### Understanding the boilerplate structure

```text
<html>
│
├── <head>
│   ├── Character encoding
│   ├── Viewport settings
│   ├── Description
│   └── Page title
│
└── <body>
    │
    ├── <header>
    │   ├── Website heading
    │   └── <nav>
    │       └── Navigation links
    │
    ├── <main>
    │   ├── <section> Introduction
    │   ├── <section> Learning content
    │   ├── <article> Blog or learning entry
    │   └── <aside> Related resources
    │
    └── <footer>
        └── Copyright and contact details
```

### Important semantic HTML rules

- `<header>` introduces a page or section.
- `<nav>` groups important navigation links.
- `<main>` contains the primary content of the page.
- `<section>` groups related content under a topic.
- `<article>` represents independent content.
- `<aside>` contains supplementary content.
- `<footer>` contains closing or supporting information.
- `<div>` is a generic block-level container with no semantic meaning.
- `<span>` is a generic inline container with no semantic meaning.

Do not use semantic elements just to make your code look professional. Choose elements based on the meaning of the content.

---

## 🔠 HTML Headings

HTML provides six heading levels, from `<h1>` to `<h6>`.

```html
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Fourth-Level Heading</h4>
<h5>Fifth-Level Heading</h5>
<h6>Sixth-Level Heading</h6>
```

### Heading hierarchy

| Element | Purpose |
|---|---|
| `<h1>` | Main page heading |
| `<h2>` | Major section |
| `<h3>` | Subsection |
| `<h4>` | Smaller subsection |
| `<h5>` | Lower-level heading |
| `<h6>` | Lowest heading level |

**Important:** Use headings to organize your content logically, not simply to make text bigger or smaller.

---

## 📝 Paragraphs and Text Formatting

The `<p>` element defines a paragraph.

```html
<p>HTML is used to structure webpage content.</p>
```

### Common text formatting elements

```html
<strong>Important text</strong>

<em>Emphasized text</em>

<b>Bold text without added importance</b>

<i>Text in an alternate voice or mood</i>

<u>Underlined text</u>

<mark>Highlighted text</mark>

<small>Smaller text</small>

<del>Deleted text</del>

<ins>Inserted text</ins>

<sub>Subscript text</sub>

<sup>Superscript text</sup>

<code>console.log("Hello World");</code>

<pre>
This preserves
spaces and line breaks.
</pre>

<blockquote>
    This is a longer quotation from another source.
</blockquote>

<q>This is a short quotation.</q>

<abbr title="HyperText Markup Language">HTML</abbr>

<time datetime="2026-11-02">November 2, 2026</time>
```

### Important differences

- `<strong>` indicates strong importance.
- `<b>` draws attention without adding importance.
- `<em>` adds emphasis.
- `<i>` represents text in an alternate voice or mood.
- `<pre>` preserves whitespace and line breaks.
- `<code>` represents a piece of computer code.

---

## 🔗 Links and Navigation

The `<a>` element creates hyperlinks.

```html
<a href="https://www.google.com">Visit Google</a>
```

### Types of links

**1. External link**

```html
<a href="https://www.w3schools.com/">Visit W3Schools</a>
```

**2. Internal page link**

```html
<a href="about.html">About Me</a>
```

**3. Email link**

```html
<a href="mailto:hello@example.com">Send Me an Email</a>
```

**4. Telephone link**

```html
<a href="tel:+254700000000">Call Me</a>
```

**5. Link to a section on the same page**

```html
<a href="#contact">Go to Contact Section</a>

<section id="contact">
    <h2>Contact Me</h2>
</section>
```

**6. Open a link in a new tab**

```html
<a
    href="https://developer.mozilla.org/"
    target="_blank"
    rel="noopener noreferrer"
>
    Visit MDN
</a>
```

`target="_blank"` opens the link in a new tab. `rel="noopener noreferrer"` adds protection when opening an external page this way.

---

## 🖼️ Images and Media

The `<img>` element displays images.

```html
<img src="profile.jpg" alt="My profile picture">
```

### Important image attributes

| Attribute | Purpose |
|---|---|
| `src` | Specifies the image location |
| `alt` | Provides alternative text |
| `width` | Sets image width |
| `height` | Sets image height |
| `loading` | Controls image loading behaviour |

Example:

```html
<img
    src="images/profile.jpg"
    alt="A student working on a laptop"
    width="300"
    height="200"
    loading="lazy"
>
```

### Adding audio

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
```

### Adding video

```html
<video controls width="500" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>
```

### Adding a figure and caption

```html
<figure>
    <img src="network.jpg" alt="A network switch connected to cables">
    <figcaption>A simple computer networking setup.</figcaption>
</figure>
```

---

## 📋 HTML Lists

HTML provides three common types of lists.

### 1. Unordered list

Used when the order of items does not matter.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

### 2. Ordered list

Used when items follow a specific sequence.

```html
<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>
```

### 3. Description list

Used for terms and their explanations.

```html
<dl>
    <dt>HTML</dt>
    <dd>Structures webpage content.</dd>

    <dt>CSS</dt>
    <dd>Styles webpage content.</dd>

    <dt>JavaScript</dt>
    <dd>Adds interactivity to webpages.</dd>
</dl>
```

---

## 🧩 Semantic HTML

Semantic HTML means using elements that describe the meaning and purpose of content.

Instead of using `<div>` for everything, choose elements that communicate what the content represents.

### Common semantic elements

| Element | Meaning |
|---|---|
| `<header>` | Introductory content |
| `<nav>` | Navigation links |
| `<main>` | Main page content |
| `<section>` | Thematic grouping |
| `<article>` | Independent content |
| `<aside>` | Supplementary content |
| `<footer>` | Footer information |
| `<figure>` | Self-contained media or illustration |
| `<figcaption>` | Caption for a figure |
| `<address>` | Contact information for a person or organization |
| `<details>` | Expandable information |
| `<summary>` | Heading for a details element |

### Example: Details and summary

```html
<details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language.</p>
</details>
```

Clicking the summary expands or collapses the additional information.

### Why semantic HTML matters

1. Makes code easier to understand.
2. Improves accessibility.
3. Helps search engines understand page structure.
4. Makes websites easier to maintain.
5. Gives browsers meaningful information about content.

---

## 📦 Div and Span Elements

Both `<div>` and `<span>` are generic containers. They do not describe the meaning of their content.

### Div element

`<div>` is a block-level container commonly used to group larger sections of content.

```html
<div class="profile-card">
    <h2>Clarryson</h2>
    <p>Computer Science Student</p>
</div>
```

### Span element

`<span>` is an inline container commonly used to target a small part of text.

```html
<p>
    I am learning
    <span class="highlight">HTML</span>
    today.
</p>
```

### Difference

| `<div>` | `<span>` |
|---|---|
| Block-level by default | Inline by default |
| Starts on a new line | Stays within the text flow |
| Groups larger content | Targets small inline content |
| Commonly used for layout | Commonly used for text styling |

---

## 📊 HTML Tables

Tables organize information into rows and columns.

### Important table elements

| Element | Purpose |
|---|---|
| `<table>` | Creates a table |
| `<caption>` | Gives the table a title |
| `<thead>` | Groups the header rows |
| `<tbody>` | Groups the main table content |
| `<tfoot>` | Groups footer rows |
| `<tr>` | Creates a table row |
| `<th>` | Creates a header cell |
| `<td>` | Creates a data cell |

### Example

```html
<table>
    <caption>My Learning Progress</caption>

    <thead>
        <tr>
            <th>Day</th>
            <th>Topic</th>
            <th>Status</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Day 1</td>
            <td>HTML</td>
            <td>Completed</td>
        </tr>

        <tr>
            <td>Day 2</td>
            <td>CSS</td>
            <td>Completed</td>
        </tr>
    </tbody>
</table>
```

Use tables for tabular data, not for creating the overall layout of a webpage.

---

## 📝 HTML Forms

Forms collect information from users.

Examples include registration forms, login pages, contact forms, and search boxes.

### Important form elements

| Element | Purpose |
|---|---|
| `<form>` | Creates a form |
| `<label>` | Describes an input |
| `<input>` | Collects user input |
| `<textarea>` | Collects longer text |
| `<select>` | Creates a dropdown |
| `<option>` | Defines a dropdown option |
| `<button>` | Creates a clickable button |
| `<fieldset>` | Groups related form controls |
| `<legend>` | Gives a fieldset a heading |
| `<datalist>` | Provides suggested input values |
| `<output>` | Displays a calculation or result |

### Common input types

| Input type | Purpose |
|---|---|
| `text` | General text |
| `password` | Password input |
| `email` | Email address |
| `number` | Numeric value |
| `tel` | Telephone number |
| `date` | Date selection |
| `time` | Time selection |
| `checkbox` | Multiple independent selections |
| `radio` | One selection from a group |
| `file` | File upload |
| `submit` | Submits a form |
| `reset` | Resets form values |
| `search` | Search input |
| `url` | Website address |
| `color` | Colour picker |
| `range` | Slider input |
| `hidden` | Hidden form value |

### Example: Registration form

```html
<form action="#" method="post">

    <fieldset>

        <legend>Student Registration</legend>

        <!-- Full name input -->
        <label for="fullname">Full Name:</label>
        <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            required
        >

        <br><br>

        <!-- Email input -->
        <label for="email">Email Address:</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            required
        >

        <br><br>

        <!-- Password input -->
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            name="password"
            minlength="8"
            required
        >

        <br><br>

        <!-- Course selection -->
        <label for="course">Choose Course:</label>

        <select id="course" name="course">
            <option value="">Select a course</option>
            <option value="computer-science">Computer Science</option>
            <option value="networking">Networking</option>
            <option value="software-engineering">Software Engineering</option>
        </select>

        <br><br>

        <!-- Gender or other single-choice example -->
        <p>Select your study mode:</p>

        <input type="radio" id="online" name="study-mode" value="online">
        <label for="online">Online</label>

        <input type="radio" id="physical" name="study-mode" value="physical">
        <label for="physical">Physical</label>

        <br><br>

        <!-- Additional information -->
        <label for="message">Additional Information:</label>

        <textarea
            id="message"
            name="message"
            rows="4"
            cols="30"
            placeholder="Tell us about yourself..."
        ></textarea>

        <br><br>

        <!-- Form submission button -->
        <button type="submit">Register</button>

    </fieldset>

</form>
```

**Important:** HTML can structure a form and provide basic browser validation. A backend or suitable service is needed to process and securely store submitted information. The `action="#"` in this example is only a placeholder, not a working registration endpoint.

---

## ⚙️ HTML Attributes

Attributes provide additional information about HTML elements.

### Common attributes

| Attribute | Purpose |
|---|---|
| `id` | Gives an element a unique identifier |
| `class` | Groups elements for CSS or JavaScript |
| `style` | Adds inline CSS |
| `title` | Provides additional information |
| `href` | Specifies a link destination |
| `src` | Specifies a resource location |
| `alt` | Provides alternative image text |
| `target` | Specifies where a link opens |
| `type` | Specifies an element's type |
| `name` | Identifies form data |
| `value` | Specifies an input value |
| `placeholder` | Shows an input hint |
| `required` | Makes an input mandatory |
| `disabled` | Disables an element |
| `readonly` | Prevents editing an input |
| `checked` | Preselects a checkbox or radio button |
| `selected` | Preselects a dropdown option |
| `multiple` | Allows multiple selections |
| `data-*` | Stores custom data on an element |

### Example

```html
<p id="intro" class="highlight" title="Introduction paragraph">
    Welcome to HTML.
</p>
```

Here:

- `id` identifies the element uniquely.
- `class` allows CSS to style similar elements.
- `title` provides extra information.

---

## 🔣 HTML Entities

HTML entities allow you to display reserved characters and special symbols.

| Entity | Display |
|---|---|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&apos;` | ' |
| `&nbsp;` | Non-breaking space |
| `&copy;` | © |
| `&reg;` | ® |
| `&trade;` | ™ |

Example:

```html
<p>HTML uses &lt;p&gt; to create a paragraph.</p>

<p>&copy; 2026 My Website</p>
```

---

## 💬 HTML Comments

Comments are notes written inside HTML code.

They are not displayed on the webpage.

```html
<!-- This is an HTML comment -->

<h1>Welcome</h1>

<!--
    This is a longer comment.
    It can explain what a section of code does.
-->
```

Comments help developers:

- Explain complicated code.
- Organize large HTML files.
- Leave notes for future development.
- Temporarily document code.

Remember: Comments are visible in the page source, so never place passwords, private keys, or confidential information inside them.

---

## 🔎 HTML Metadata

Metadata provides information about the webpage.

It is usually placed inside the `<head>` element.

### Common metadata elements

```html
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="Learning web development from beginner to advanced.">

<meta name="author" content="My Name">

<title>My Website</title>
```

Metadata helps browsers and search engines understand the webpage.

---

## ♿ Accessibility Basics

Accessibility means making websites usable by as many people as possible, including people who use assistive technologies.

### Important practices

1. Use semantic HTML.
2. Give meaningful images alternative text.
3. Associate form labels with their inputs.
4. Use headings in a logical hierarchy.
5. Make links descriptive.
6. Ensure keyboard users can navigate the page.
7. Do not rely on colour alone to communicate information.

### Example

Poor practice:

```html
<img src="laptop.jpg">
```

Better practice:

```html
<img src="laptop.jpg" alt="A laptop displaying a code editor">
```

For decorative images, an empty alternative text can be appropriate:

```html
<img src="decoration.png" alt="">
```

---

## 🛠️ HTML Validation and Debugging

HTML validation helps identify errors in webpage structure.

Common mistakes include:

- Forgetting closing tags.
- Incorrectly nesting elements.
- Missing quotation marks around attribute values.
- Using duplicate IDs.
- Forgetting the `alt` attribute on meaningful images.
- Misspelling element names.
- Incorrect file paths.

### Example of incorrect nesting

```html
<p>
    <div>Incorrect structure</div>
</p>
```

### Better structure

```html
<div>
    <p>Correct structure</p>
</div>
```

### Useful debugging tools

- Browser Developer Tools: Inspect and debug webpage structure.
- Console: View browser errors and messages.
- Elements panel: Examine the rendered HTML.
- Network panel: Check whether images and other resources load correctly.

### HTML Validator

Use the official W3C HTML Validator:

https://validator.w3.org/

It helps identify HTML errors and warnings.

---

## 📁 Project Structure

My Day 1 project uses the following folder structure:

```text
day-01-html-foundations/
│
├── index.html
│
├── about.html
│
├── contact.html
│
├── images/
│   └── profile.jpg
│
└── README.md
```

### File explanations

| File/Folder | Purpose |
|---|---|
| `index.html` | Main homepage |
| `about.html` | About page |
| `contact.html` | Contact page |
| `images/` | Stores images |
| `README.md` | Documents the project |

As the project grows, I will introduce separate CSS and JavaScript folders.

---

## 🚀 Running the Project

I use **Visual Studio Code** to write and edit HTML.

### Steps

1. Open Visual Studio Code.
2. Open the `day-01-html-foundations` folder.
3. Create an `index.html` file.
4. Write the HTML boilerplate.
5. Save the file.
6. Install the Live Server extension if it is not already installed.
7. Right-click `index.html`.
8. Select **Open with Live Server**.
9. Your webpage will open in the browser.

### Alternative

You can also open the HTML file directly in your browser without Live Server.

Live Server is helpful because it automatically refreshes the webpage when you save changes.

---

## ✅ HTML Best Practices

- Always start with `<!DOCTYPE html>`.
- Use lowercase HTML element names.
- Use meaningful and descriptive names for IDs and classes.
- Indent your code consistently.
- Use semantic HTML where appropriate.
- Always include alternative text for meaningful images.
- Use double quotation marks around attribute values.
- Keep HTML structure separate from CSS styling.
- Avoid unnecessary `<div>` elements.
- Use one primary `<main>` element per page.
- Keep heading levels logically organized.
- Validate your HTML.
- Write comments when they help explain your code.
- Keep file and folder names organized.

---

## 📚 Learning Resources

These are the resources I will use to strengthen my HTML knowledge.

### 1. W3Schools

https://www.w3schools.com/html/

Beginner-friendly tutorials and examples covering HTML elements, attributes, forms, tables, and more.

### 2. MDN Web Docs

https://developer.mozilla.org/en-US/docs/Web/HTML

Detailed documentation explaining HTML elements, attributes, browser behaviour, and web standards.

### 3. freeCodeCamp

https://www.freecodecamp.org/learn/

Interactive lessons and practical exercises for learning web development.

### 4. W3C HTML Validator

https://validator.w3.org/

A tool for checking whether HTML documents follow HTML standards.

---

## 🎯 What I Learned Today

By the end of Day 1, I should be able to:

- Explain what HTML is and why it is important.
- Explain the difference between HTML, CSS, and JavaScript.
- Describe how a browser communicates with a web server.
- Understand HTML tags, elements, and attributes.
- Write a complete HTML5 boilerplate.
- Understand the purpose of `<head>` and `<body>`.
- Structure webpages using semantic HTML.
- Use headings, paragraphs, links, and images.
- Create ordered, unordered, and description lists.
- Build basic HTML tables.
- Create forms with different input types.
- Understand the difference between `<div>` and `<span>`.
- Add comments and metadata.
- Apply basic accessibility practices.
- Validate and debug HTML documents.

---

## 💭 Day 1 Reflection

Today, I learned that HTML is more than just writing tags. It is about organizing information in a meaningful way so that browsers, search engines, developers, and users can understand the structure of a webpage.

One of my most important takeaways was understanding semantic HTML and why elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` are important.

I also learned that building a good website starts with a strong foundation. Before focusing on colours, animations, and design, I need to understand how to structure content correctly.

**My next step:** Move to Day 2 and learn CSS, where I will transform my plain HTML pages into visually attractive and responsive websites.

---

**Learning Journey:** HTML → CSS → JavaScript → Responsive Design → Real-World Projects

**Day 1 Status:** HTML Foundations 🚀
