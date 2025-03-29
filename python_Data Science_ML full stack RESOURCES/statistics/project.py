#!/usr/bin/env python
# coding: utf-8

# In[5]:


import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


# In[6]:


df1=pd.read_csv("Salary_Dataset_with_Extra_Features.csv")


# In[7]:


df1.head(50)


# In[8]:


df1.shape


# In[9]:


df1.columns


# In[10]:


df2=df1.drop(['Salaries Reported','Job Roles'],axis=1)
df2.head(10)


# In[11]:


df2.info()


# In[12]:


df2.duplicated().sum()


# In[13]:


df2.duplicated()


# In[14]:


df2=df2.drop_duplicates()


# In[15]:


df2.shape


# In[16]:


plt.hist(df2['Rating'])
plt.xlabel('Rating')
plt.ylabel("count of companies")


# In[17]:


top_job_roles=df2['Job Title'].value_counts()[:10]
print(top_job_roles)


# In[18]:


df2['Job Title'].value_counts()[0:50]


# In[19]:


count=0
for i in df2 ['Location']:
    for j in i.split(","):
        if j =='Pune':
            count=count+1
print (count)            


# In[20]:


count=0
for i in df2 ["Location"]:
    for j in i.split(","):
        if j =='Mumbai':
            count=count+1
print(count)            


# In[27]:


count=0
new_loc=[]
for i in df2['Location']:
    for j in i.split(","):
        if j not in new_loc:
            if j not in new_loc:
                new_loc.append(j)
                count==count+1
print(count)
print(new_loc)


# In[10]:


import mysql.connector


# In[ ]:


conn=mysql.connector.connect(host="localhost",database="student_info",user="root",password="Pass@123")


# In[ ]:


c=conn.cursor()


# In[3]:


l=[]
flag=1
for i in range(int(input("enter no. of jobs"))):
    Rating=input("enter the rating:")
    company_name=input("enter the company name:")
    job_title=input("enter job title:")
    salary=input("enter salary")
    location=input("enter location")
    emp_status=input("enter the employement status")
    
    stmt="insert into salary_check(Rating,company_name,job_title,salary,location,emp_status) values('{}','{},'{}','{}','{}')".format(rating,company_name,job_title,salary,location,emp_status)
    print(stmt)
    
    if rating.isdigit() and float (Rating)<=5:
        print("valid")
    else:
        print("invalid")
        flag=0
        
    if company_name.isalpha():
        print('valid')
    else:
        print("invalid")
        flag=0
    if job_title.isalpha():
        print("valid")
    else:
        print("invalid")
        flag=0
    if salary.isdigit():
        print("valid")

    else:
        print("invalid")
        flag=0
    if location.isalpha():
        print("valid")
    else:
        print("invalid")
        flag=0
    if emp_status.isalpha():
        print("valid")
    else:
        print("invalid")
        flag=0
        
        
c.execute(stmt)
conn.commit()
c.close()
conn.close()
            
    
    


# In[ ]:




