⚙️ Technologies Used
Frontend: React.js (Functional Components & Hooks)

State Management: Redux Toolkit & Redux Thunk

Styling: Material-UI, CSS Flexbox & Grid

API Integration: OpenWeather API

Storage: LocalStorage for task persistence

Deployment: Vercel

📌 Features

1️⃣ Frontend Development & API Integration

✅ Structured layout using HTML & CSS

✅ Material-UI used for styling and components

✅ JavaScript (ES6+) used for application logic

✅ Integrated OpenWeather API to fetch weather data for outdoor tasks

✅ Error handling for API failures

2️⃣ React Components & Advanced State Management

✅ React Functional Components & Hooks (useState, useEffect)

✅ Four main components:

->TodoApp:Contains TaskInput and TaskList components

->Tasknput: Handles task addition

->TaskList: Displays tasks

->WeatherWidget:Displays Weather Of your current location When There is an Outdoor Task in Your Task List using OpenWeather Api

✅ Redux Toolkit & Redux Thunk for async actions

✅ State management for tasks & authentication


3️⃣ Responsive Design

✅ Fully responsive using CSS Grid & Flexbox

✅ Mobile-first approach for better usability

✅ Optimized for mobile, tablet, and desktop devices

4️⃣ Functionality

✅ Add Task: Users can enter a task and add it to the list

✅ View Tasks: Displays all tasks in a structured format

✅ Delete Task: Remove tasks from the list with a delete button

✅ Task Prioritization: Users can set High, Medium, or Low priority

✅ Checkbox Interaction: Each task has a checkbox that users can click to mark it as complete or incomplete.

✅ Strikethrough Effect: When a task is completed, a line-through effect visually indicates the completion.

✅ Persistent Storage: Tasks are stored in LocalStorage. Whatever Changes are made in the task will be stored in local storage even after refreshing the page.

5️⃣ User Authentication

✅ Mocked authentication using Redux

✅ Users must log in to access the To-Do list

✅ Logout functionality included

![Image](https://github.com/user-attachments/assets/e554c095-156f-46a8-a6ff-394e10335a7c)

Weather Will only be display when there is an outdoor Task Type in Task List

![Todo -App Preview](https://github.com/user-attachments/assets/2c6c0d94-39df-463a-868d-bed581adcf8f)

->No Weather will be displayed for indoor task selected

![Image](https://github.com/user-attachments/assets/4ec5ca14-0aeb-4d6f-b561-66c3b54ed9c5)


->If there is any output Task in The Task List then only weather will be displayed using openWeather Api

⚙️ Installation & Running Instructions

1️⃣ Clone the Repository

->git clone https://github.com/Aman123-cmd/to-do-app.git

Then go the to-do-app directory

->cd to-do-app

2️⃣ Install Dependencies

->npm install

3️⃣ Setup API Keys in .env

Create a .env file in the project root and add your OpenWeather API Key:

->VITE_WEATHER_API_KEY=your_api_key_here

4️⃣ Run the App Locally

->npm run dev

Then Youl Will get a link in the terminal press ctrl and then click on the link 
