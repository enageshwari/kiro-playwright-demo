# Requirements: Kiro App

## Overview
A simple single-page Express web application that greets users by name.

## Requirements

### 1. Project Setup
- WHEN the project is initialized THEN it SHALL have TypeScript and Express installed as dependencies
- WHEN the project is built THEN it SHALL compile TypeScript to JavaScript

### 2. Express Server
- WHEN the server starts THEN it SHALL listen on port 3000
- WHEN a GET request is made to `/` THEN the server SHALL serve `index.html`
- WHEN the server is running THEN it SHALL serve static files from a `public` directory

### 3. index.html Page
- WHEN the page loads THEN it SHALL display a header with the text "Welcome to Kiro App"
- WHEN the page loads THEN it SHALL display a text input field for the user's name
- WHEN the page loads THEN it SHALL display a submit button

### 4. Greeting Behaviour
- WHEN the user types a name into the input field and clicks the submit button THEN the page SHALL display "Hello, [Name]!" where [Name] is the value entered
- WHEN the greeting is displayed THEN it SHALL appear on the same page without a full page reload
- WHEN the input field is empty and the user clicks submit THEN no greeting SHALL be displayed
