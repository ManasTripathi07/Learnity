# 📘 Learnity - A Modern E-Learning Platform

Learnity is a full-stack web application designed to deliver a seamless and interactive online learning experience. It enables instructors to create and manage courses, while allowing students to browse, purchase, and learn through structured video lectures. Inspired by modern platforms like Udemy or Coursera, Learnity aims to make high-quality education accessible and organized.

🚀 Live Demo: https://learnity-1-dztxyqjjw-manastripathi07s-projects.vercel.app/

---

## 📌 Features

### 👨‍🏫 For Instructors
- Create and manage courses with structured sections and video lectures
- Upload and preview video content (with Cloudinary)
- Set course prices and tags
- Access analytics about course enrollments

### 🧑‍🎓 For Students
- Browse all available courses
- View detailed course pages before purchasing
- Purchase multiple courses with Razorpay integration
- Track enrolled courses and progress
- Leave reviews and ratings

### 🔐 Authentication & Security
- JWT-based authentication
- Password hashing (bcrypt)
- OTP verification via email (signup)
- Protected routes with role-based access (Admin, Instructor, Student)

---

## 🛠️ Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| Frontend      | React.js, TailwindCSS, Redux Toolkit|
| Backend       | Node.js, Express.js                 |
| Database      | MongoDB (Mongoose ODM)              |
| File Upload   | Cloudinary                         |
| Payments      | Razorpay (One-time checkout model)  |
| Auth & Token  | JWT, bcrypt, cookies, nodemailer    |

---

## 📚 Use Cases

### 🎓 Online Learning Platform
A student can:
- Sign up and verify their account via email OTP
- Browse courses with filters (category, pricing)
- Purchase multiple courses in one go using Razorpay
- Watch lectures from their enrolled courses
- Track learning progress

### 👩‍🏫 Instructor Portal
An instructor can:
- Upload new courses with multiple sections
- Add or update video lectures
- Monitor engagement and course statistics

### 🛒 Course Marketplace
- Public users can explore courses
- Detailed course pages show ratings, descriptions, and previews before buying

---

## 🧪 Working of the Project

### 1. **Authentication Flow**
- Users sign up → OTP verification email is sent → JWT token is generated → User is redirected to dashboard
- JWT token is stored in HTTP-only cookies for session management

### 2. **Course Management**
- Instructors create courses through a React-based dashboard
- Video files are uploaded to Cloudinary
- Course content is structured as nested sections and lectures

### 3. **Payment System**
- Students add courses to cart and initiate Razorpay checkout
- Backend verifies payment status → Enrollment is updated
- Razorpay test keys used for demo (live mode ready)

### 4. **Role-Based Dashboards**
- Student Dashboard: Purchased courses, learning progress
- Instructor Dashboard: Created courses, analytics
- Admin (optional extension): Global course/user management

---

## 📷 Interface Snapshots

![1](https://github.com/user-attachments/assets/f99a49d0-15cd-4df8-b2f3-299e7768ade5)
![2](https://github.com/user-attachments/assets/dd0a2cf6-704a-4e25-8cc3-8350913d54d5)
![3](https://github.com/user-attachments/assets/82d02b78-e085-4123-bc6c-e18834aabaf9)
![4](https://github.com/user-attachments/assets/ff626ba5-d20b-41a4-be83-d119568e962a)
![5](https://github.com/user-attachments/assets/a0d85dce-b7be-417b-9bfb-cb6ef29d3d3d)
![6](https://github.com/user-attachments/assets/79cca55c-0549-425b-bb2e-ca35602107d7)
![7](https://github.com/user-attachments/assets/723c2142-61a8-4248-b33c-ce2426f05149)
![8](https://github.com/user-attachments/assets/b676ca65-63a9-4b37-a94a-a505f696ea20)
![9](https://github.com/user-attachments/assets/931e22e3-ba75-455e-abe8-29def45ad278)
![10](https://github.com/user-attachments/assets/3da5ad53-d99d-469c-900d-d50ae8f28ed9)
![11](https://github.com/user-attachments/assets/f6a48708-336a-44d7-b8cc-8c0997d3ee62)
![12](https://github.com/user-attachments/assets/30c32ea7-4288-41a1-ad59-9cb77fd26a37)
![13](https://github.com/user-attachments/assets/edaf5612-00bd-42eb-adc5-96ff51e376f2)


## 🚧 Setup Instructions

### 🔗 Clone Repo
```bash
git clone https://github.com/ManasTripathi07/Learnity.git
cd Learnity


---

