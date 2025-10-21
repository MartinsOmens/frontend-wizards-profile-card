# 🌟 Frontend Wizards — Stage 0 & 1: Profile Card + Contact Page

A collection of responsive, accessible **Frontend tasks** built for the **HNG Internship**.  
Includes:

- **Stage 0:** Profile Card  
- **Stage 1:** Contact Us Page (Form Validation)

---

## 💻 Live Demo

🔗 **Profile Card Live Site:** [https://martins-hng-task0.netlify.app/](https://martins-hng-task0.netlify.app/)  
🔗 **GitHub Repository:** [https://github.com/MartinsOmens/frontend-wizards-profile-card](https://github.com/MartinsOmens/frontend-wizards-profile-card)

---

## 📘 Stage 0 — Profile Card

### 🧩 Description
A simple, responsive **Profile Card** that displays:

- 👤 **Name** and **avatar**
- 📝 **Short biography**
- 🕒 **Current time in milliseconds** (updates every second)
- 🔗 **Social media links** (Twitter, GitHub)
- 🎯 **Hobbies and dislikes**

### ✨ Features
- Fully **responsive** (mobile → desktop)
- **Accessible** (semantic HTML, focusable elements, alt text)
- **Testable** (includes required `data-testid` attributes)

---

## 📞 Stage 1 — Contact Us Page

### 🧩 Description
A simple and accessible **Contact Form** built with **vanilla HTML, CSS, and JavaScript**, featuring form validation and feedback messages.

### 🧠 Functionality
- Validates user inputs:
  - Full name — required  
  - Email — must follow `name@example.com` format  
  - Subject — required  
  - Message — required, minimum 10 characters
- Displays clear error messages below each field.
- Shows a **success message** after valid submission.
- Moves keyboard focus to the success message for accessibility.

### ♿ Accessibility
- Each input field has a linked `<label>` via the `for` attribute.
- Error messages are connected using `aria-describedby`.
- Keyboard-accessible: users can tab through all fields and submit.
- Success message announced to screen readers using `aria-live="polite"`.

### 🧪 Test IDs (for HNG automated tests)
| Field | Data Test ID |
|-------|---------------|
| Full name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Field Errors | `test-contact-error-<field>` |
| Success Message | `test-contact-success` |

### ✅ Validation Rules
| Field | Rule |
|-------|------|
| Full name | Required |
| Email | Must match `name@example.com` |
| Subject | Required |
| Message | At least 10 characters |
| Success Message | Shown on valid submission |

---

## ⚙️ Setup Instructions

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MartinsOmens/frontend-wizards-profile-card.git
