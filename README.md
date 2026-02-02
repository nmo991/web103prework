# WEB103 Prework - Creatorverse

Submitted by: **Kaleab Alemu**

About this web app: **Creatorverse is a web application that allows users to manage and showcase their favorite content creators. Users can browse a collection of creators, view detailed information about each one, and perform full CRUD (Create, Read, Update, Delete) operations on the creator database.**

Time spent: **15** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Responsive grid layout for creator cards
* [x] Navigation bar with consistent styling across all pages
* [x] Form validation for required fields
* [x] Loading states for better user experience

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<a href="https://drive.google.com/file/d/1oOKK8KttIchSnkz3Fq6PMYHNeDLo2YhX/view?usp=drive_link"> Video Preview <a/>

Video created with **QuickTime Player**

## Notes

**Challenges encountered while building the app:**

1. **Routing Issues**: Initially faced difficulties with React Router v6 implementation, particularly with dynamic routes (`/:id`) and ensuring proper navigation between pages.

2. **Database Integration**: Setting up Supabase and establishing the connection required careful attention to environment variables and API key management.

3. **Form State Management**: Managing form state across Create and Edit operations while maintaining data integrity presented challenges.

4. **CSS Styling**: Getting PicoCSS properly integrated and styled required troubleshooting import statements and understanding Pico's class-based styling system.

5. **CRUD Operations Synchronization**: Ensuring that Create, Update, and Delete operations immediately reflected in the UI without requiring page refreshes.

**Features Implemented Beyond Requirements:**

- **Loading States**: All async operations show loading indicators
- **Error Handling**: Form validation and error messages for failed operations
- **Responsive Design**: The application works well on mobile, tablet, and desktop
- **Navigation Consistency**: Persistent navigation bar across all pages


## How to Run This Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your Supabase project and get API credentials
4. Create a `.env` file with your Supabase URL and API key
5. Run the development server: `npm run dev`
6. Open http://localhost:5173 in your browser
