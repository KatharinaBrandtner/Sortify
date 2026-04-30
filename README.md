<img width="300" height="100" alt="Bildschirmfoto 2026-04-24 um 14 16 05 2" src="https://github.com/user-attachments/assets/55c99249-7d90-4546-9413-bb32355bee45" />


## Project Description
Sortify is an intelligent task organizer that helps users structure unorganized to-dos more efficiently. Many people write down tasks quickly and in an unstructured way, which makes it easy to lose track of them. Sortify addresses this problem by automatically suggesting a suitable category for each newly entered task. Instead of fully automating the process, the system keeps the user in control by allowing them to confirm or adjust the suggested category.

## Goal
The goal of the project is to reduce organizational effort, support self-organization, and help users maintain a clearer overview of their tasks. The app is especially designed for people who manage many tasks in parallel, such as young adults or students.

## Categories
The current prototype uses the following predefined categories:
- 🎓 University
- 💼 Work
- 🏠 Household
- 🛒 Shopping
- 🎉 Leisure / Private
- 🩺 Health
- 📑 Organizational

These categories were chosen to cover common everyday and study-related tasks while keeping the system understandable and manageable.

## Technical Approach
- **Frontend:** React Native
- **Backend:** Python with FastAPI
- **Machine Learning:** scikit-learn
- **Text Representation:** TF-IDF
- **Classification Model:** Logistic Regression

## Planned Workflow
1. The user enters a new task.
2. The system analyzes the text and predicts a category.
3. The predicted category is shown in the interface.
4. The user can confirm the suggestion or select a different category.
5. The task is then stored in the chosen category.

## 💛 Project Focus
This project combines machine learning with user-centered interaction design. The aim is not fully automatic task management, but supportive automation that reduces effort while preserving user control.


