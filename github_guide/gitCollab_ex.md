📌 Standard Git Collaboration Workflow for Your Project
(With Branch Protection: Only Shubham Can Push Directly to main)

Since Dhananjay and Shreyash cannot push directly to main, they must follow a standard Git workflow using feature branches and pull requests (PRs) to contribute.

🚀 Step-by-Step Process for Team Collaboration
1️⃣ Dhananjay Starts Working on a New Feature
He opens Command Prompt (cmd) / Git Bash and navigates to the project folder:


cd path/to/project

#He ensures his local repository is up to date by pulling the latest code from main:


git checkout main        # Switch to main branch
git pull origin main     # Get the latest code from GitHub

#He creates a new feature branch (dhananjay-feature):


git checkout -b dhananjay-feature

##-b creates and switches to a new branch.

2️⃣ Dhananjay Makes Changes and Pushes to GitHub
He modifies some files (example.py or index.html in your Django project).

He adds the changes:


git add .

#This stages all modified files.
#He commits the changes with a message:


git commit -m "Added new room booking feature"

#He pushes his branch to GitHub:


git push origin dhananjay-feature

#This uploads his branch (dhananjay-feature) to the GitHub repository.

3️⃣ Dhananjay Creates a Pull Request (PR)
He goes to GitHub and opens the repository.
Clicks on the “Pull Requests” tab.
Clicks “New Pull Request”.
Selects:
Base Branch: main
Compare Branch: dhananjay-feature
Adds a title and description for the PR, explaining what he changed.
Clicks “Create Pull Request”.

4️⃣ Shubham (Owner) Reviews the PR
Shubham receives a notification about the PR.
He reviews the changes in GitHub.
If changes are needed, he requests modifications in the PR.
If everything looks good, he merges the PR into main using the “Merge Pull Request” button.
After merging, Shubham can delete the dhananjay-feature branch (optional).

5️⃣ Other Teammates Pull the Updated Code
Since main is now updated with Dhananjay’s changes, Shreyash and others need to update their local repositories:

#Switch to main branch:

git checkout main

#Pull the latest code:

git pull origin main

#Now, Shreyash and others have the latest project updates and can start working on their own features following the same process.

🔹 Summary of the Collaboration Workflow
Step	Action	Command
1️⃣	Dhananjay pulls the latest code from main	git checkout main → git pull origin main
2️⃣	Dhananjay creates a feature branch	git checkout -b dhananjay-feature
3️⃣	Dhananjay modifies code & commits changes	git add . → git commit -m "message"
4️⃣	Dhananjay pushes changes to GitHub	git push origin dhananjay-feature
5️⃣	Dhananjay creates a pull request	Done on GitHub
6️⃣	Shubham reviews & merges PR	Done on GitHub
7️⃣	Other teammates update their local repo	git checkout main → git pull origin main
✅ Benefits of This Workflow
🔹 Ensures that main always has reviewed and stable code.
🔹 Prevents direct changes to main (only Shubham can push directly).
🔹 Allows team members to work in parallel on separate features.
🔹 Helps with tracking changes and debugging using PR history.

Would you like any modifications or further explanations? 😊