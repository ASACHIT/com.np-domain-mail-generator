# Mail Generator for .com.np Domain Registration

## Overview

This project is a simple mail generator designed to streamline the domain registration process for the `.com.np` domain. It allows users to generate personalized emails for domain registration requests, tailored for both individual and business entities. The application is built with React

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces, particularly single-page applications.
- **TypeScript**: A statically typed superset of JavaScript that adds optional types to the language, enhancing code quality and maintainability.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs with low-level utility classes.
- **@hugocxl/react-to-image**: A React hook for converting HTML elements to images, enabling the generation of JPEG images from the generated emails.

## How It Works

1. **User Input**: The application provides a form where users can input their details, such as domain name, name servers, personal or company name, and address. The form is divided into two sections: one for individual registration and another for business registration.

2. **Dynamic Content Generation**: Based on the user's input, the application dynamically generates a personalized email content. This includes the date, recipient details, subject, and a body that varies depending on whether the user is registering a domain for an individual or a business.

3. **Email Preview**: The generated email is displayed in a preview section, allowing users to review their request before sending it.

4. **Image Generation**: Users have the option to generate a JPEG image of the email preview. This feature is powered by the `@hugocxl/react-to-image` hook, which converts the HTML content of the email preview into an image.

5. **Download or Share**: Once the image is generated, users can download it directly or share it through various means.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running `npm install` or `yarn`.
4. Start the development server by running `npm run dev` or `yarn dev`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.
