# BankBuddy

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Live Link](#live-link)
- [Future Improvements](#future-improvements)

## Project Overview
BankBuddy is a full-stack web application designed to simplify the process of scheduling, managing, and tracking bank appointments. Users can book appointments with available bank staff, reschedule or cancel them, and manage their profiles. The system also enables bank administrators to manage employee availability efficiently. By digitizing the appointment process, this application aims to improve customer experience and reduce wait times in bank branches.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **File Uploads:** Cloudinary (for profile image management)
- **UI/UX Libraries:** Tailwind CSS

## Features
- User Authentication (JWT-based)
- Book, view, cancel, and reschedule appointments
- Profile Management (update personal information and upload profile picture)
- Real-time availability of bank staff for scheduling
- Responsive UI
- Admin functionalities (Manage Employees and appointments)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhavya1307/BankAppointmentSystem.git

2. Install dependencies:
   ```bash
   cd frontend
   npm install

   cd backend
   npm install

   cd admin
   npm install

3. Set up environment variables:
   Create a .env file in the backend folder
   ```bash
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

4. Run the application:
   ```bash
   cd frontend
   npm run dev

   cd backend
   npm run server

   cd admin
   npm run dev

## Live Link

- Client side: https://bankappointmentsystem.onrender.com/
- Admin side: https://bankappointmentsystem-admin.onrender.com/

## Future Improvements

- **Notifications:** Implement a notification system to alert users and staff of upcoming appointments or changes, such as reminders for booked appointments or cancellations.
- **Bank Staff Side:** Develop a separate interface for bank staff to manage appointments, view schedules, and modify availability, streamlining the internal process.
- **UI Improvements:** Enhance the user interface to provide a more modern, intuitive experience with better visuals and responsiveness.
- **Guidelines:** Add clear guidelines or a user manual to help customers and staff easily navigate the system.
- **Analytics:** Introduce reporting and analytics features to provide insights into appointment trends, helping bank staff manage resources effectively.
