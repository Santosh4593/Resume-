from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import base64
import os
import io
from PIL import Image 
import pdf2image
import google.generativeai as genai
import inspect 

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

# Enable CORS (if your frontend is served from a different origin)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Whitelist allowed origins
    allow_credentials=True,
    allow_methods=["POST"],  # Adjust allowed HTTP methods if needed
    allow_headers=["Content-Type"],  # Adjust allowed headers if needed
)

# Input Prompt 1 for "Tell Me About the Resume"
input_prompt1 = """
You are an experienced Technical Human Resource Manager, your task is to review the provided resume against the job description. 
Please share your professional evaluation on whether the candidate's profile aligns with the role. 
Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
"""

# Input Prompt 3 for "Percentage Match"
input_prompt3 = """
You are a skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science and ATS functionality. 
Your task is to evaluate the resume against the provided job description. Give me the percentage of match if the resume matches the job description. 
First, the output should come as a percentage and then keywords missing, and lastly, final thoughts.
"""

async def get_gemini_response(input_text, pdf_content, prompt):
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([input_text, pdf_content[0], prompt])
    
    if inspect.iscoroutine(response):
        response = await response  # Await here to get the response if it's a coroutine
    
    return response.text



async def input_pdf_setup(uploaded_file):
    if uploaded_file is not None:
        ## Convert the PDF to image
        pdf_data = await uploaded_file.read()  # Await here to get the bytes

        images = pdf2image.convert_from_bytes(pdf_data)
        first_page = images[0]

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


@app.post("/tell_me_about_resume")
async def tell_me_about_resume(job_description: str = Form(...), resume: UploadFile = File(...)):
    pdf_content = await input_pdf_setup(resume)  # Await here to get the result

    response = get_gemini_response(job_description, pdf_content, input_prompt1)  # Don't await here

    return {"response": await response}  # Await the response before returning
  

@app.post("/percentage_match")
async def percentage_match(job_description: str = Form(...), resume: UploadFile = File(...)):
    pdf_content = await input_pdf_setup(resume)

    response = get_gemini_response(job_description, pdf_content, input_prompt3)

    return {"response": await response}

@app.post("/upload")
async def upload_resume(file: UploadFile = File(...), job_description: str = None):
    pdf_content = await input_pdf_setup(file)

    response = get_gemini_response(job_description, pdf_content, input_prompt1)

    return {"response": await response}
