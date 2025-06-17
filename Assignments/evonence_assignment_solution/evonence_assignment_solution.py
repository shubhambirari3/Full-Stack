

# Scenario 1: Data ValidationTask: Write a function validate_data(data) that checks if a list of dictionaries (e.g., [{"name": "Alice", "age": 30}, {"name": "Bob", "age": "25"}]) contains valid integer values for the "age" key. Return a list of invalid entries.

def validate_data(data):
    invalid_entries = []
    for entry in data:
        age = entry.get("age")
        if not isinstance(age, int) or age < 0:
            invalid_entries.append(entry)
    return invalid_entries


# Scenario 2: Logging DecoratorTask: Create a decorator @log_execution_time that logs the time taken to execute a function. Use it to log the runtime of a sample function calculate_sum(n) that returns the sum of numbers from 1 to n.


import time

def log_execution_time(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} executed in {round(time.time() - start, 4)}s")
        return result
    return wrapper

@log_execution_time
def calculate_sum(n):
    return sum(range(1, n + 1))


# Scenario 3: Missing Value Handling
    # Task: A dataset has missing values in the "income" column. Write code to:
    # 1. Replace missing values with the median if the data is normally distributed.
    # 2. Replace with the mode if skewed.
    # Use Pandas and a skewness threshold of 0.5.


import pandas as pd

def fill_income(df):
    df_copy = df.copy()
    income = df_copy["income"].dropna()

    if income.size == 0:
        return df_copy  # Nothing to fill

    skewness = income.skew()

    if abs(skewness) < 0.5:
        filler = income.median()
    else:
        filler = income.mode()[0]

    df_copy["income"] = df_copy["income"].fillna(filler)
    return df_copy


# Scenario 4: Text Pre-processing
    # Task: Clean a text column in a DataFrame by:
    # 1. Converting to lowercase.
    # 2. Removing special characters (e.g., !, @).
    # 3. Tokenizing the text.

import re
from nltk.tokenize import word_tokenize

def clean_text_column(df, col_name):
    df_copy = df.copy()
    def clean_and_tokenize(text):
        if not isinstance(text, str):
            return []
        text = text.lower()
        text = re.sub(r'[^\w\s]', '', text)
        return word_tokenize(text)

    df_copy[col_name] = df_copy[col_name].apply(clean_and_tokenize)
    return df_copy


# Scenario 5: Hyperparameter Tuning
    # Task: Use GridSearchCV to find the best max_depth (values: [3, 5, 7]) and n_estimators (values: [50, 100]) for a Random Forest classifier.

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

def tune_rf(X, y):
    model = RandomForestClassifier()
    grid = {
        "max_depth": [3, 5, 7],
        "n_estimators": [50, 100]
    }
    search = GridSearchCV(model, grid, cv=3)
    search.fit(X, y)
    return search.best_params_


#Scenario 6: Custom Evaluation Metric
    # Task: Implement a custom metric weighted_accuracy where class 0 has a weight of 1 and class 1 has a weight of 2.
    # from sklearn.metrics import make_scorer

def weighted_accuracy(y_true, y_pred):
    weights = [1 if y == 0 else 2 for y in y_true]
    correct = [w for yt, yp, w in zip(y_true, y_pred, weights) if yt == yp]
    return sum(correct) / sum(weights)

weighted_scorer = make_scorer(weighted_accuracy)


# Scenario 7: Image Augmentation
    # Task: Use TensorFlow/Keras to create an image augmentation pipeline with random rotations (±20 degrees), horizontal flips, and zoom (0.2x).

from tensorflow.keras.preprocessing.image import ImageDataGenerator

def get_augmentation():
    return ImageDataGenerator(
        rotation_range=20,
        horizontal_flip=True,
        zoom_range=0.2
    )


# Scenario 8: Model Callbacks
    # Task: Implement an EarlyStopping callback that stops training if validation loss doesn’t improve for 3 epochs and restores the best weights.

from tensorflow.keras.callbacks import EarlyStopping

def get_early_stopping():
    return EarlyStopping(
        monitor='val_loss',
        patience=3,
        restore_best_weights=True
    )


#Scenario 9: Structured Response Generation
    # Task: Use the Gemini API to generate a response in JSON format for the query: "List 3 benefits of Python for data science." Handle cases where the response isn’t valid JSON.

import json

def parse_gemini_response(response_text):
    try:
        response_json = json.loads(response_text)
        return response_json
    except json.JSONDecodeError:
        return {"error": "Invalid JSON format from response"}


# Scenario 10: Summarization with Constraints
    # Task: Write a prompt to summarize a news article into 2 sentences. If the summary exceeds 50 words, truncate it to the nearest complete sentence.

import re

def summarize_article(text):
   
    summary = "Python is easy to learn and has a huge community. It supports many libraries for data science and machine learning."

    sentences = re.split(r'(?<=[.!?]) +', summary)
    final_summary = ""
    word_count = 0

    for sentence in sentences:
        words = sentence.strip().split()
        if word_count + len(words) > 50:
            break
        final_summary += sentence.strip() + " "
        word_count += len(words)

    return final_summary.strip()

def generate_summary_prompt(article_text):
    return f"""Summarize the following article into 2 sentences. If the summary exceeds 50 words, truncate it at the last full sentence under 50 words.\n\nArticle:\n{article_text}"""
