from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()
import base64
import streamlit as st
import os

import io
from PIL import Image 
import pdf2image
import google.generativeai as genai

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

# Enable CORS (if your frontend is served from a different origin)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https:localhost:8000"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_gemini_response(input,pdf_cotent,prompt):
    model=genai.GenerativeModel('gemini-pro-vision')
    response=model.generate_content([input,pdf_content[0],prompt])
    return response.text

def input_pdf_setup(uploaded_file):
    if uploaded_file is not None:
        ## Convert the PDF to image
        images=pdf2image.convert_from_bytes(uploaded_file.read())

        first_page=images[0]

        # Convert to bytes
        img_byte_arr = io.BytesIO()
        first_page.save(img_byte_arr, format='JPEG')
        img_byte_arr = img_byte_arr.getvalue()

        pdf_parts = [
            {
                "mime_type": "image/jpeg",
                "data": base64.b64encode(img_byte_arr).decode()  # encode to base64
            }
        ]
        return pdf_parts
    else:
        raise FileNotFoundError("No file uploaded")
    

##post function
# ... (your existing code)

# @app.post("/tell_me_about_resume")
# def tell_me_about_resume(job_description: str = Form(...), resume: UploadFile = File(...)):
#     # Your logic for "Tell Me About the Resume"
#     return {"response": "Response from Tell Me About the Resume"}

# @app.post("/improve_my_skills")
# def improve_my_skills(job_description: str = Form(...), resume: UploadFile = File(...)):
#     # Your logic for "How Can I Improve my Skills"
#     return {"response": "Response from How Can I Improve my Skills"}

# @app.post("/percentage_match")
# def percentage_match(job_description: str = Form(...), resume: UploadFile = File(...)):
#     # Your logic for "Percentage Match"
#     return {"response": "Response from Percentage Match"}

# ... (rest of your code)




# @app.post("/upload")
# def upload_resume(file: UploadFile = File(...), job_description: str = None):
#     # Add your existing file upload logic here
#     # Call the function that processes the uploaded file
#     pdf_content = input_pdf_setup(file.file)

#     # Call the function that interacts with the Gemini AI model
#     response = get_gemini_response(input_prompt1, pdf_content, job_description)

#     return {"response": response}
 # Endpoint for "Tell Me About the Resume"
@app.post("/tell_me_about_resume")
def tell_me_about_resume(job_description: str = Form(...), resume: UploadFile = File(...)):
    pdf_content = input_pdf_setup(resume)

    response = get_gemini_response(job_description, pdf_content, job_description)

    return {"response": response}   

def improve_my_skills(job_description: str = Form(...), resume: UploadFile = File(...)):
    pdf_content = input_pdf_setup(resume)

    response = get_gemini_response(job_description, pdf_content, job_description)

    return {"response": response}


# Endpoint for "Percentage Match"
@app.post("/percentage_match")
def percentage_match(job_description: str = Form(...), resume: UploadFile = File(...)):
    pdf_content = input_pdf_setup(resume)

    response = get_gemini_response(job_description, pdf_content, job_description)

    return {"response": response}


# Endpoint for general file upload
@app.post("/upload")
def upload_resume(file: UploadFile = File(...), job_description: str = None):
    pdf_content = input_pdf_setup(file)

    response = get_gemini_response(job_description, pdf_content, job_description)

    return {"response": response}



## Streamlit App

st.set_page_config(page_title="IntelliRecruit ATS")
st.header("Application Tracking System")
input_text=st.text_area("Job Description: ",key="input")
uploaded_file=st.file_uploader("Upload your resume(PDF)...",type=["pdf"])


if uploaded_file is not None:
    st.write("PDF Uploaded Successfully")


submit1 = st.button("Tell Me About the Resume")

#submit2 = st.button("How Can I Improvise my Skills")

submit3 = st.button("Percentage match")

input_prompt1 = """
 You are an experienced Technical Human Resource Manager,your task is to review the provided resume against the job description. 
  Please share your professional evaluation on whether the candidate's profile aligns with the role. 
 Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
"""

input_prompt3 = """
You are an skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science and ATS functionality, 
your task is to evaluate the resume against the provided job description. give me the percentage of match if the resume matches
the job description. First the output should come as percentage and then keywords missing and last final thoughts.
"""

if submit1:
    if uploaded_file is not None:
        pdf_content=input_pdf_setup(uploaded_file)
        response=get_gemini_response(input_prompt1,pdf_content,input_text)
        st.subheader("The Repsonse is")
        st.write(response)
    else:
        st.write("Please uplaod the resume")

elif submit3:
    if uploaded_file is not None:
        pdf_content=input_pdf_setup(uploaded_file)
        response=get_gemini_response(input_prompt3,pdf_content,input_text)
        st.subheader("The Repsonse is")
        st.write(response)
    else:
        st.write("Please uplaod the resume")




   




