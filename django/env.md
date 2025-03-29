refer link : https://medium.com/@biswajitpanda973/render-your-first-html-page-with-django-3e96721b180d

### **Step 1: Install Python (if not already installed)**

- Download and install Python from [python.org/downloads](https://www.python.org/downloads/).
- During installation, **check "Add Python to PATH"**.

---

### **Step 2: Create a Virtual Environment (venv)**

1. **Open Terminal (Command Prompt/PowerShell/Terminal)**.
2. Navigate to the folder where you want to create the virtual environment.
3. Run the following command:

   ```bash
   python -m venv venv_name
   ```

   - Replace `venv_name` with your desired virtual environment name (e.g., `myenv`).
   - This will create a folder named `venv_name` containing the virtual environment.

---

### **Step 3: Activate the Virtual Environment**

- **Windows (Command Prompt)**:
  ```bash
  venv_name\Scripts\activate
  ```
- **Windows (PowerShell)**:
  ```bash
  .\venv_name\Scripts\Activate.ps1
  ```
- **macOS/Linux**:
  ```bash
  source venv_name/bin/activate
  ```

---

### **Step 4: Verify Activation**

- After activation, your terminal prompt should show the environment name, e.g.:
  ```
  (myenv) C:\Users\YourName\project>
  ```

---

### **Step 5: Install Dependencies (like `django`, `flask`, etc.)**

Once the virtual environment is activated, you can install packages using `pip`:

```bash
pip install package_name
```

Example:

```bash
pip install flask
pip install django
```

---

### **Step 6: Deactivate the Virtual Environment**

To exit the virtual environment:

```bash
deactivate
```

This will return you to the system's default Python environment.

---

### **Common Issues:**

- If activation fails in PowerShell, run:
  ```bash
  Set-ExecutionPolicy RemoteSigned
  ```
  Then try activating again.

Let me know if you face any issues!

<!-- after install env  -->

always goto the folder where you have installed the virtual environment and then activate it
there open cmd and run the following command

```bash
venv_name\Scripts\activate
```

<!-- after activating the env -->

for creating a django project run the following command

```bash
django-admin startproject .
|^ this will create the project in the current directory
```

django-admin startproject mysite
|^ this will create the project in the mysite directory
for this you have to use cd mysite to go to the mysite directory and then run the command

<!-- after creating the project -->

for running the server run the following command

```bash
python manage.py runserver
or
python manage.py runserver 8080

```
refer this link for more information about how django works 

GPT : 