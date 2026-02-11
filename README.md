# Calculator Project

A simple **Calculator** built using **HTML, CSS, and JavaScript**.  
This project was created to practice **JavaScript basics and DOM manipulation**.

---

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Clear (`C`) and backspace functionality
- Negate (`+/-`) button to change sign of numbers
- Percentage (`%`) button to calculate percentage
- Decimal support (`.`)
- Real-time display of expression and result
- Handles invalid expressions gracefully

---

## How It Works

1. **Buttons** are connected to a click event listener (`buttonClick`) in JS.  
2. When a button is clicked:
   - Numbers and operators are added to the **expression string**
   - Special actions like clear, backspace, negate, percentage are handled
   - The result is calculated using the **`eval()`** function in a safe manner
3. The **expression** and **result** are displayed dynamically in the UI.

---

## Usage

1. Clone or download the repository:

```bash
git clone <your-repo-url>
