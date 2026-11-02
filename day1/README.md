# Day 1: Web Foundations & HTML Essentials

Welcome to **Day 1** of my web development journey!

This guide documents the fundamental concepts of the World Wide Web and the essential HTML elements I learned while building my first webpages.

My goal is to understand how websites work, how HTML structures content, and how to create accessible, meaningful, and well-organized webpages.

---

## Table of Contents

1. [What is HTML?](#1-what-is-html-the-skeleton-analogy)
2. [How the Web Works](#2-how-the-web-works)
3. [Anatomy of an HTML Element](#3-anatomy-of-an-html-element)
4. [The HTML Document Structure](#4-the-html-document-structure)
5. [HTML Elements and Attributes](#5-html-elements-and-attributes)
6. [HTML Headings and Paragraphs](#6-html-headings-and-paragraphs)
7. [Text Formatting Elements](#7-text-formatting-elements)
8. [Links and Navigation](#8-links-and-navigation)
9. [Images and Media](#9-images-and-media)
10. [Lists in HTML](#10-lists-in-html)
11. [Semantic HTML](#11-semantic-html)
12. [Containers and Grouping Elements](#12-containers-and-grouping-elements)
13. [HTML Tables](#13-html-tables)
14. [HTML Forms and Input Elements](#14-html-forms-and-input-elements)
15. [HTML Buttons](#15-html-buttons)
16. [HTML Attributes](#16-html-attributes)
17. [HTML Entities and Special Characters](#17-html-entities-and-special-characters)
18. [HTML Comments](#18-html-comments)
19. [HTML Metadata and SEO](#19-html-metadata-and-seo)
20. [Accessibility Fundamentals](#20-accessibility-fundamentals)
21. [HTML Validation and Debugging](#21-html-validation-and-debugging)
22. [Files in This Directory](#22-files-in-this-directory-explained)
23. [How to View in Browser](#23-how-to-view-in-browser-using-live-server)
24. [HTML Best Practices](#24-html-best-practices)
25. [External Learning Resources](#25-external-learning-resources)
26. [Day 1 Learning Outcomes](#26-day-1-learning-outcomes)
27. [Final Reflection](#27-final-reflection)

---

## 1. What is HTML? (The Skeleton Analogy)

HTML stands for **HyperText Markup Language**.

It is the standard markup language used to structure content on the World Wide Web.

Think of a webpage like a human body or a building:

- **HTML (HyperText Markup Language)** is the skeleton and bricks. It gives the page structure and determines where titles, paragraphs, images, buttons, and forms belong.
- **CSS (Cascading Style Sheets)** is the clothing and paint. It controls colors, fonts, spacing, layouts, and visual appearance.
- **JavaScript** is the muscles and brain. It makes webpages interactive, allowing buttons to respond to clicks, forms to validate data, and content to update dynamically.

HTML is **not a programming language**. It is a markup language because I use tags to describe the structure and meaning of content.

For example:

```html
<h1>Welcome to My Website</h1>

<p>This is my first webpage.</p>
```

The browser understands that the first element is a main heading and the second is a paragraph.

### My takeaway

HTML provides the foundation of every webpage. Before learning CSS and JavaScript, I need to understand how to structure content correctly.

---

## 2. How the Web Works

When I visit a website, several things happen behind the scenes.

### The basic process

1. I enter a website address (URL) into my browser.
2. The browser uses DNS to find the server's IP address.
3. The browser sends an HTTP or HTTPS request to the server.
4. The server responds with resources such as HTML, CSS, JavaScript, and images.
5. The browser processes these resources and renders the webpage.
6. I interact with the webpage using my mouse, keyboard, or touchscreen.

### Important terminology

| Term | Meaning |
|---|---|
| Web Browser | Software used to access websites, such as Chrome or Firefox |
| Web Server | A computer or service that stores and delivers website resources |
| URL | The address of a resource on the web |
| HTTP | A protocol used to transfer web resources |
| HTTPS | HTTP secured using encryption through TLS |
| DNS | Translates domain names into IP addresses |
| HTML | Structures webpage content |
| CSS | Controls webpage presentation |
| JavaScript | Adds behavior and interactivity |

### Example URL

```text
https://www.example.com/about.html
```

- `https` is the protocol.
- `www.example.com` is the domain name.
- `/about.html` is the path to the requested resource.

### My takeaway

HTML is one part of a larger web system. Understanding how browsers and servers communicate will help me become a better web developer.

---

## 3. Anatomy of an HTML Element

Most HTML elements consist of an opening tag, content, and a closing tag.

```html
<p>Hello, world!</p>
```

- `<p>` is the opening tag.
- `Hello, world!` is the content.
- `</p>` is the closing tag.
- The entire structure is an HTML element.

### The Sandwich Rule

Think of an HTML element like a sandwich:

- The opening tag is the top slice of bread.
- The content is the filling.
- The closing tag is the bottom slice of bread.

Most elements should be properly opened and closed.

### Nesting Elements

HTML elements can be placed inside other elements.

```html
<section>
    <h2>About Me</h2>
    <p>I am learning <strong>web development</strong>.</p>
</section>
```

The `<strong>` element is nested inside the paragraph, which is nested inside the section.

### Correct Nesting

```html
<p>This is <strong>correctly nested</strong> HTML.</p>
```

### Incorrect Nesting

```html
<p>This is <strong>incorrectly nested.</p></strong>
```

**My takeaway:** HTML elements should be properly nested so that the document structure remains predictable and understandable.

---

## 4. The HTML Document Structure

Every HTML page should begin with a standard document structure.

### HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Web Foundations - Home</title>
</head>

<body>

    <!-- Visible content goes here -->

</body>

</html>
```

### Understanding Each Part

| Element | Purpose |
|---|---|
| `<!DOCTYPE html>` | Tells the browser to use modern HTML standards |
| `<html>` | The root element containing the entire document |
| `lang="en"` | Identifies the document language as English |
| `<head>` | Contains metadata and resource references |
| `<meta charset="UTF-8">` | Defines character encoding |
| `<meta name="viewport">` | Helps the page display correctly on mobile devices |
| `<title>` | Defines the browser tab title |
| `<body>` | Contains the webpage's visible content |

### Important Difference

The `<head>` contains information about the document, while the `<body>` contains the content users see and interact with.

---

## 5. HTML Elements and Attributes

An HTML element defines a piece of content or structure.

An attribute provides additional information about an element.

### Example

```html
<a href="https://www.google.com" target="_blank">
    Visit Google
</a>
```

Here:

- `<a>` is the anchor element.
- `href` specifies the destination.
- `target="_blank"` opens the destination in a new browsing context.
- `Visit Google` is the visible link text.

### Common Attribute Types

| Attribute | Purpose | Example |
|---|---|---|
| `id` | Identifies a unique element | `id="intro"` |
| `class` | Groups elements for styling or scripting | `class="card"` |
| `href` | Specifies a link destination | `href="about.html"` |
| `src` | Specifies a media source | `src="image.jpg"` |
| `alt` | Provides alternative text for images | `alt="Laptop on a desk"` |
| `title` | Provides advisory information | `title="More information"` |
| `style` | Adds inline CSS | `style="color: red;"` |
| `name` | Identifies form data | `name="email"` |
| `value` | Defines an input value | `value="Kenya"` |
| `required` | Makes a form field mandatory | `required` |
| `disabled` | Disables an element | `disabled` |

### Boolean Attributes

Some attributes do not need a value.

```html
<input type="text" required>
```

Other examples include:

```html
<button disabled>Unavailable</button>

<input type="checkbox" checked>
```

**My takeaway:** Attributes make HTML elements more useful by defining their behavior, identity, and additional information.

---

## 6. HTML Headings and Paragraphs

Headings organize content into a logical hierarchy.

HTML provides six heading levels:

```html
<h1>Main Page Heading</h1>

<h2>Major Section</h2>

<h3>Subsection</h3>

<h4>Smaller Section</h4>

<h5>Minor Heading</h5>

<h6>Lowest-Level Heading</h6>
```

### Important Guidelines

- Use `<h1>` for the main page heading.
- Use `<h2>` for major sections.
- Use `<h3>` for subsections under an `<h2>`.
- Use headings based on meaning, not merely their visual size.
- Do not skip heading levels without a logical reason.

### Paragraphs

The `<p>` element defines a paragraph.

```html
<p>
    I am learning HTML to build modern websites
    and develop my software engineering skills.
</p>
```

### Line Breaks

The `<br>` element creates a line break.

```html
<p>
    Clarryson Kedogo<br>
    Computer Science Student<br>
    Aspiring Network Engineer
</p>
```

### Horizontal Rule

The `<hr>` element represents a thematic break between sections.

```html
<h2>About Me</h2>

<p>I am learning web development.</p>

<hr>

<h2>My Goals</h2>
```

**My takeaway:** Headings and paragraphs help create readable content and improve document organization.

---

## 7. Text Formatting Elements

HTML provides elements that communicate meaning or formatting for text.

| Element | Purpose |
|---|---|
| `<strong>` | Indicates strong importance |
| `<em>` | Indicates emphasis |
| `<b>` | Draws attention without adding importance |
| `<i>` | Represents text in an alternate voice or mood |
| `<mark>` | Highlights relevant text |
| `<small>` | Represents smaller side comments or fine print |
| `<del>` | Represents deleted text |
| `<ins>` | Represents inserted text |
| `<sub>` | Displays subscript text |
| `<sup>` | Displays superscript text |
| `<code>` | Represents a fragment of computer code |
| `<pre>` | Preserves whitespace and formatting |
| `<blockquote>` | Represents an extended quotation |
| `<q>` | Represents a short inline quotation |
| `<abbr>` | Represents an abbreviation |
| `<time>` | Represents a date or time |

### Examples

```html
<p>This is <strong>important</strong> information.</p>

<p>I am <em>really</em> excited to learn HTML.</p>

<p>Water is H<sub>2</sub>O.</p>

<p>Mathematics: x<sup>2</sup></p>

<p>Use the <code>console.log()</code> function.</p>

<pre>
Line one
Line two
Line three
</pre>

<blockquote>
    Learning never stops.
</blockquote>

<p>
    I study <abbr title="Computer Science">CS</abbr>.
</p>

<p>
    Published on <time datetime="2026-11-02">November 2, 2026</time>.
</p>
```

### My takeaway

HTML text elements do more than change appearance. They communicate the meaning and importance of content.

---

## 8. Links and Navigation

The `<a>` element creates hyperlinks that connect webpages and resources.

### Internal Links

```html
<a href="about.html">About Me</a>
```

This opens another HTML file within my project.

### External Links

```html
<a href="https://www.w3schools.com/html/">
    Learn HTML on W3Schools
</a>
```

### Opening Links in a New Tab

```html
<a
    href="https://developer.mozilla.org/"
    target="_blank"
    rel="noopener"
>
    Visit MDN
</a>
```

The `rel="noopener"` attribute prevents the newly opened page from accessing the original page through `window.opener`.

### Email Links

```html
<a href="mailto:example@email.com">
    Send Me an Email
</a>
```

### Telephone Links

```html
<a href="tel:+254700000000">
    Call Me
</a>
```

### Linking to a Section

```html
<a href="#contact">Go to Contact Section</a>

<section id="contact">
    <h2>Contact Me</h2>
</section>
```

### Navigation Example

```html
<header>
    <nav aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>
```

**My takeaway:** Links connect webpages and make website navigation possible.

---

## 9. Images and Media

The `<img>` element displays images on a webpage.

### Basic Image

```html
<img src="images/profile.jpg" alt="My profile photograph">
```

### Important Image Attributes

| Attribute | Purpose |
|---|---|
| `src` | Specifies the image location |
| `alt` | Provides alternative text |
| `width` | Specifies the image width |
| `height` | Specifies the image height |
| `loading="lazy"` | Defers loading of off-screen images |

### Example

```html
<img
    src="images/laptop.jpg"
    alt="A laptop displaying a code editor"
    width="600"
    height="400"
    loading="lazy"
>
```

### Images With Captions

```html
<figure>
    <img
        src="images/network-lab.jpg"
        alt="Students working in a networking laboratory"
        width="600"
        height="400"
    >

    <figcaption>
        My networking learning journey.
    </figcaption>
</figure>
```

### Audio

```html
<audio controls>
    <source src="audio/sample.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
```

### Video

```html
<video controls width="600">
    <source src="videos/intro.mp4" type="video/mp4">
    Your browser does not support video.
</video>
```

**My takeaway:** Images and media make webpages more engaging, but I should always provide appropriate alternative text and consider performance.

---

## 10. Lists in HTML

HTML provides three main types of lists.

### 10.1 Unordered Lists

The `<ul>` element creates a bullet-point list.

```html
<h2>My Skills</h2>

<ul>
    <li>Python Programming</li>
    <li>Linux Administration</li>
    <li>Networking</li>
    <li>Web Development</li>
</ul>
```

### 10.2 Ordered Lists

The `<ol>` element creates a numbered list.

```html
<h2>My Learning Plan</h2>

<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
    <li>Build Projects</li>
</ol>
```

### 10.3 Description Lists

The `<dl>` element represents a list of terms and descriptions.

```html
<dl>
    <dt>HTML</dt>
    <dd>Structures webpage content.</dd>

    <dt>CSS</dt>
    <dd>Controls webpage presentation.</dd>

    <dt>JavaScript</dt>
    <dd>Adds interactivity.</dd>
</dl>
```

### My takeaway

Lists help organize information into clear, readable groups.

---

## 11. Semantic HTML

Semantic HTML uses elements that describe the meaning and purpose of content.

Instead of using generic `<div>` elements for everything, I use semantic elements where appropriate.

| Element | Purpose | Analogy |
|---|---|---|
| `<header>` | Introductory content or page header | Letterhead |
| `<nav>` | Navigation links | Table of contents |
| `<main>` | Main content of the document | Main article |
| `<section>` | Thematic grouping of content | Chapter |
| `<article>` | Self-contained content | Newspaper article |
| `<aside>` | Related or supplementary content | Sidebar |
| `<footer>` | Footer information | Document fine print |
| `<figure>` | Self-contained media or illustration | Image with caption |
| `<figcaption>` | Caption for a figure | Image description |

### Example

```html
<body>

    <header>
        <h1>My Web Development Journey</h1>

        <nav aria-label="Main navigation">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
        </nav>
    </header>

    <main>

        <section>
            <h2>My Learning Journey</h2>
            <p>I am learning web development step by step.</p>
        </section>

        <article>
            <h2>Day 1: HTML Essentials</h2>
            <p>Today I learned the foundations of HTML.</p>
        </article>

        <aside>
            <h2>Learning Resources</h2>
            <p>Explore W3Schools and MDN documentation.</p>
        </aside>

    </main>

    <footer>
        <p>&copy; 2026 My Web Development Journey</p>
    </footer>

</body>
```

### My takeaway

Semantic HTML improves accessibility, readability, maintainability, and search engine understanding.

---

## 12. Containers and Grouping Elements

Two important HTML elements used for grouping content are `<div>` and `<span>`.

### The `<div>` Element

A `<div>` is a generic block-level container.

```html
<div class="card">
    <h2>My First Project</h2>
    <p>This is a project description.</p>
</div>
```

It is useful when I need to group content for CSS styling or JavaScript functionality.

### The `<span>` Element

A `<span>` is a generic inline container.

```html
<p>
    I am learning
    <span class="highlight">HTML and CSS</span>
    every day.
</p>
```

### Difference

| Element | Default Display | Typical Use |
|---|---|---|
| `<div>` | Block | Grouping larger sections |
| `<span>` | Inline | Styling a small portion of text |

**My takeaway:** I should use semantic elements when they describe the content's purpose, and use `<div>` or `<span>` when no more meaningful element is appropriate.

---

## 13. HTML Tables

Tables display structured information in rows and columns.

They should be used for tabular data, not for designing the overall layout of a webpage.

### Important Table Elements

| Element | Purpose |
|---|---|
| `<table>` | Creates the table |
| `<caption>` | Provides a table title |
| `<thead>` | Groups header rows |
| `<tbody>` | Groups the main data rows |
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
            <th scope="col">Day</th>
            <th scope="col">Topic</th>
            <th scope="col">Status</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Day 1</td>
            <td>HTML Essentials</td>
            <td>Completed</td>
        </tr>

        <tr>
            <td>Day 2</td>
            <td>CSS Fundamentals</td>
            <td>Completed</td>
        </tr>
    </tbody>
</table>
```

### Important Guidelines

- Use `<th>` for table headings.
- Use `<td>` for regular data cells.
- Use `scope="col"` or `scope="row"` where appropriate.
- Use CSS to style tables rather than the outdated `border` attribute.
- Do not use tables for general page layouts.

**My takeaway:** Tables are useful for displaying structured data clearly and accessibly.

---

## 14. HTML Forms and Input Elements

Forms allow users to enter information.

They are used for registration pages, contact forms, login screens, surveys, and search interfaces.

### The `<form>` Element

The `<form>` element groups form controls together.

```html
<form action="/submit" method="post">

    <!-- Form controls go here -->

</form>
```

- `action` specifies where the form data should be sent.
- `method="post"` sends data in the request body.

A real form needs a server-side endpoint or a form-processing service to process submissions.

### 14.1 The Label Element

```html
<label for="username">Username:</label>

<input type="text" id="username" name="username">
```

The `for` attribute connects the label to the input's `id`.

Clicking the label focuses the associated input.

### 14.2 Common Input Types

| Input Type | Purpose |
|---|---|
| `text` | Single-line text |
| `email` | Email address |
| `password` | Password entry |
| `number` | Numeric input |
| `tel` | Telephone number |
| `url` | Website address |
| `date` | Date selection |
| `time` | Time selection |
| `checkbox` | Multiple independent selections |
| `radio` | One selection from a group |
| `file` | File upload |
| `submit` | Form submission |
| `reset` | Reset form controls |

### Example: Contact Form

```html
<form action="/submit" method="post">

    <div>
        <label for="name">Full Name:</label>

        <input
            type="text"
            id="name"
            name="name"
            required
        >
    </div>

    <div>
        <label for="email">Email Address:</label>

        <input
            type="email"
            id="email"
            name="email"
            required
        >
    </div>

    <div>
        <label for="message">Message:</label>

        <textarea
            id="message"
            name="message"
            rows="5"
            required
        ></textarea>
    </div>

    <button type="submit">Send Message</button>

</form>
```

### 14.3 The `name` Attribute

The `name` attribute identifies the field when the browser submits form data.

```html
<input type="email" name="email">
```

Without a `name`, the input's value is generally not included in the submitted form data.

### 14.4 The `required` Attribute

```html
<input type="email" required>
```

The browser prevents submission if the required field is empty or invalid.

### 14.5 The `placeholder` Attribute

```html
<input
    type="text"
    placeholder="Enter your full name"
>
```

A placeholder provides a hint but does not replace a proper label.

### 14.6 Radio Buttons

```html
<p>Choose your learning level:</p>

<label>
    <input type="radio" name="level" value="beginner">
    Beginner
</label>

<label>
    <input type="radio" name="level" value="intermediate">
    Intermediate
</label>
```

Radio buttons with the same `name` belong to the same group.

### 14.7 Checkboxes

```html
<p>Choose your interests:</p>

<label>
    <input type="checkbox" name="interest" value="html">
    HTML
</label>

<label>
    <input type="checkbox" name="interest" value="css">
    CSS
</label>
```

Checkboxes allow multiple selections.

### 14.8 Dropdown Lists

```html
<label for="country">Country:</label>

<select id="country" name="country">

    <option value="">Select your country</option>

    <option value="kenya">Kenya</option>

    <option value="uganda">Uganda</option>

    <option value="tanzania">Tanzania</option>

</select>
```

### 14.9 Fieldsets and Legends

```html
<fieldset>

    <legend>Personal Information</legend>

    <label for="fullname">Full Name:</label>

    <input type="text" id="fullname" name="fullname">

</fieldset>
```

`<fieldset>` groups related form controls, while `<legend>` provides a title for the group.

### My takeaway

Forms collect user input, but HTML alone does not store information in a database or send emails. That requires a backend or external service.

---

## 15. HTML Buttons

The `<button>` element creates a clickable button.

### Submit Button

```html
<button type="submit">Submit Form</button>
```

Submits the form it belongs to.

### Reset Button

```html
<button type="reset">Reset Form</button>
```

Resets form controls to their initial values.

### Regular Button

```html
<button type="button">Click Me</button>
```

Does not submit a form automatically. It is commonly used with JavaScript.

### Important Note

Inside a form, a button without an explicit `type` may behave as a submit button.

**My takeaway:** I should always specify the button type to make its intended behavior clear.

---

## 16. HTML Attributes

Attributes provide additional information or functionality to HTML elements.

### Global Attributes

Global attributes can be used on most HTML elements.

| Attribute | Purpose |
|---|---|
| `id` | Unique identifier |
| `class` | Reusable grouping |
| `style` | Inline CSS |
| `title` | Advisory information |
| `lang` | Language |
| `hidden` | Hides an element |
| `tabindex` | Controls keyboard focus behavior |
| `contenteditable` | Allows editing of content |
| `data-*` | Stores custom data |

### Example

```html
<p
    id="intro"
    class="description"
    lang="en"
    title="Introduction"
>
    Welcome to my website.
</p>
```

### Custom Data Attributes

```html
<button data-user-id="101">
    View Profile
</button>
```

The `data-*` attributes allow developers to store custom information that JavaScript can access.

**My takeaway:** Attributes help customize the behavior, meaning, and identification of HTML elements.

---

## 17. HTML Entities and Special Characters

Some characters have special meanings in HTML and must be written using character references.

| Character | HTML Entity |
|---|---|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| Non-breaking space | `&nbsp;` |
| Copyright | `&copy;` |
| Registered trademark | `&reg;` |

### Example

```html
<p>
    HTML uses &lt;p&gt; to create paragraphs.
</p>

<p>
    &copy; 2026 My Web Development Journey
</p>
```

**My takeaway:** Character references allow me to display special characters without confusing the browser's HTML parser.

---

## 18. HTML Comments

Comments help explain code without displaying the comment text on the webpage.

### Example

```html
<!-- This is the main heading -->

<h1>Welcome to My Website</h1>

<!-- This section contains my introduction -->

<section>
    <p>I am learning web development.</p>
</section>
```

### My takeaway

Comments improve code readability, but I should avoid placing passwords, secrets, or sensitive information inside HTML comments because users can view the page source.

---

## 19. HTML Metadata and SEO

Metadata provides information about the webpage to browsers, search engines, and other services.

### Example

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="My beginner-friendly web development learning journey."
    >

    <title>Day 1: HTML Essentials</title>

</head>
```

### Important Metadata

| Element | Purpose |
|---|---|
| `<title>` | Defines the browser tab title |
| `meta charset` | Specifies character encoding |
| `meta viewport` | Supports responsive display |
| `meta description` | Provides a page description |
| `<link rel="icon">` | Adds a favicon |
| `<link rel="stylesheet">` | Links an external stylesheet |

### Favicon Example

```html
<link rel="icon" href="images/favicon.png">
```

### My takeaway

Good metadata helps browsers display webpages correctly and gives search engines useful information about the page.

---

## 20. Accessibility Fundamentals

Accessibility means designing websites so that people with different abilities can use them.

### Important Accessibility Practices

- Use semantic HTML elements.
- Provide descriptive alternative text for meaningful images.
- Use proper heading hierarchy.
- Associate labels with form controls.
- Ensure links have meaningful text.
- Make interactive elements usable with a keyboard.
- Use sufficient color contrast.
- Do not rely only on color to communicate information.

### Example: Accessible Image

```html
<img
    src="images/networking-lab.jpg"
    alt="Students configuring network switches in a laboratory"
>
```

### Example: Accessible Form

```html
<label for="email">Email Address:</label>

<input
    type="email"
    id="email"
    name="email"
    required
>
```

### Example: Accessible Navigation

```html
<nav aria-label="Main navigation">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
</nav>
```

**My takeaway:** Accessibility is not an optional feature. It is an important part of creating inclusive and professional websites.

---

## 21. HTML Validation and Debugging

HTML validation helps me identify errors and improve the quality of my code.

### Common HTML Mistakes

1. Forgetting to close elements.
2. Incorrectly nesting elements.
3. Using duplicate IDs.
4. Forgetting the `alt` attribute on images.
5. Using headings only for visual sizing.
6. Forgetting to associate form labels with inputs.
7. Using outdated HTML attributes.
8. Forgetting the viewport metadata.
9. Using incorrect file paths.
10. Forgetting the `name` attribute on form inputs.

### Browser Developer Tools

When my webpage does not work correctly:

1. Open the webpage in the browser.
2. Right-click an element.
3. Select **Inspect**.
4. Explore the Elements panel.
5. Check the Console for errors.
6. Verify that images and linked files load correctly.

### HTML Validator

I can validate my HTML using the official W3C validator.

[Validate my HTML](https://validator.w3.org/)

**My takeaway:** Writing HTML is not only about making a webpage appear in the browser. I should also ensure the code is valid, accessible, and maintainable.

---

## 22. Files in This Directory Explained

### 22.1 `index.html` — The Home Page

- Serves as the landing page for Day 1.
- Contains a navigation menu using `<nav>`.
- Uses links to navigate between pages.
- Demonstrates headings and paragraphs.
- Includes a structured HTML document.

### 22.2 `about.html` — The About and Feedback Page

This page demonstrates several HTML features.

#### Navigation

```html
<a href="index.html">Home</a>

<a href="about.html">About</a>
```

#### Headings and Paragraphs

```html
<h1>About Me</h1>

<p>This page introduces my web development journey.</p>
```

#### Lists

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

#### Tables

Demonstrates structured information using table rows, headings, and data cells.

#### Forms

Demonstrates form controls such as:

- Text input
- Email input
- Textarea
- Labels
- Submit buttons

---

## 23. How to View in Browser (Using Live Server)

I use the **VS Code Live Server Extension** to view and test my webpages.

### Steps

1. Open `Day1/index.html` in VS Code.
2. Right-click anywhere inside the file.
3. Select **Open with Live Server**.
4. Alternatively, click **Go Live** on the bottom status bar.
5. The page opens in the browser, usually at:

   `http://127.0.0.1:5500/Day1/index.html`

6. Click the **About** link to navigate to `about.html`.
7. Make changes to my HTML files and save them.
8. Live Server automatically reloads the browser to show the changes.

---

## 24. HTML Best Practices

As I continue learning, I want to develop good habits from the beginning.

- Always begin with `<!DOCTYPE html>`.
- Use semantic HTML elements where appropriate.
- Keep HTML properly indented and formatted.
- Use meaningful element names and attributes.
- Use lowercase element and attribute names.
- Always quote attribute values.
- Use descriptive `alt` text for meaningful images.
- Maintain a logical heading hierarchy.
- Use unique IDs.
- Use labels for form controls.
- Avoid outdated HTML elements and attributes.
- Keep HTML structure separate from CSS presentation.
- Validate my HTML regularly.
- Test my webpages on different browsers and devices.
- Consider accessibility from the beginning.

---

## 25. External Learning Resources

These resources helped me understand HTML and will support my continued learning.

| Resource | What I Can Learn | Link |
|---|---|---|
| W3Schools | Beginner-friendly HTML tutorials and examples | [HTML Tutorial](https://www.w3schools.com/html/) |
| MDN Web Docs | Detailed HTML documentation | [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| freeCodeCamp | Practical web development lessons | [Free Courses](https://www.freecodecamp.org/learn/) |
| W3C Validator | Validate and improve HTML code | [HTML Validator](https://validator.w3.org/) |
| Chrome DevTools | Inspect and debug webpages | [DevTools Documentation](https://developer.chrome.com/docs/devtools/) |

---

## 26. Day 1 Learning Outcomes

By the end of Day 1, I should be able to:

- [x] Explain what HTML is and why it is important.
- [x] Explain the difference between HTML, CSS, and JavaScript.
- [x] Understand how browsers and servers communicate.
- [x] Create a valid HTML document structure.
- [x] Understand opening tags, closing tags, and nested elements.
- [x] Use headings and paragraphs.
- [x] Format text using HTML elements.
- [x] Create internal and external links.
- [x] Display images and media.
- [x] Create ordered, unordered, and description lists.
- [x] Understand semantic HTML.
- [x] Use `<div>` and `<span>` for grouping content.
- [x] Create structured tables.
- [x] Build basic forms using input elements.
- [x] Understand HTML attributes.
- [x] Use metadata and accessibility practices.
- [x] Validate and debug HTML.
- [x] View my webpages using Live Server.

---

## 27. Final Reflection

Today, I learned that HTML is the foundation of web development. It provides the structure and meaning behind every webpage, from simple personal websites to complex web applications.

I explored the anatomy of HTML elements, document structure, semantic HTML, headings, paragraphs, links, images, lists, tables, forms, and attributes.

I also learned the importance of accessibility, validation, and writing clean, maintainable code.

Day 1 marks the beginning of my journey toward becoming a skilled software developer. I now understand how to create structured webpages and am ready to move on to styling them with CSS.

**Next:** Day 2 — Introduction to CSS & Styling Fundamentals.

---

*Documentation references: [W3Schools HTML](https://www.w3schools.com/html/), [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML), and [W3C HTML Validator](https://validator.w3.org/).*

