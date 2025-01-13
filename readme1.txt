This repository contains the code for a web project created as part of my learning journey in web development. Below is an explanation of the web project's structure, design choices, and the implementation of the light/dark mode feature.

_________________________________________________________________________________________________________

Web Structure

The web application consists of the following main sections:

    -Header

        -Contains the navigation bar with links to different parts of the website.
        -Includes the toggle button for switching between light and dark modes.

    -Main Content

        -Features multiple sections, each with specific content related to the theme of the project.
        -Includes text, images, and interactive elements that enhance user engagement.

    -Footer

        -Provides additional links, such as social media icons and copyright information.

_________________________________________________________________________________________________________

Colors Used

The website uses a carefully chosen color palette to ensure visual appeal and accessibility:

    Light Mode:

        Background: A soft, light color (e.g., white or light gray) for clarity and readability.
        Text: Dark tones (e.g., black or dark gray) to ensure contrast against the light background.
        Accent Colors: Used sparingly to highlight important elements such as buttons and links.

    Dark Mode:

        Background: A dark color (e.g., deep gray or black) to reduce eye strain in low-light environments.
        Text: Light tones (e.g., white or light gray) for clear visibility against the dark background.
        Accent Colors: Adjusted slightly to maintain visibility and aesthetic consistency.

    Purple Shades:

        Two shades of purple are used for accent and design elements:
        Light Purple: #A020F0
        Dark Purple: #6A0DAD

_________________________________________________________________________________________________________

Light/Dark Mode Feature

The light/dark mode feature allows users to switch between two color themes for a customized experience. Here is how it works:


Toggle Button:

Located in the header for easy access.

When clicked, it triggers a function that toggles the theme.

_________________________________________________________________________________________________________

CSS Variables:

The website's color scheme is defined using CSS variables (custom properties).

These variables are updated dynamically based on the selected mode.

_________________________________________________________________________________________________________

JavaScript Functionality:

A script listens for user interaction with the toggle button.

The selected mode is stored in the browser's local storage to persist the preference across sessions.