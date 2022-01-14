
# V-CARE

V-Care is an Artificial Intelligence based Virtual Medical Checkup web application that will examine
your whole body physically as well as mentally like a real Medical Checkup’s. V-Care gives you
complete freedom to examine your health by yourself from anywhere in the world within a few clicks
and saves your lot of money from visiting to Doctors and paying very big amount of money to them.
Once you visit our website our virtual assistant will guide you about every single step require to
Diagnose and Cure your Diseases virtually through our Services. (i.e. Skin Disease, Depression, Xray Monitor, BMI . . . . etc.).
V-Care organizes virtual personal meetings with Doctors and suggests you about best hospitals, in
the world for your disease. You can also generate Virtual Health Reports from here.

## Experience V-Care at:


https://v-care.eu-gb.cf.appdomain.cloud/


##  Documentation

[Download Documentation](https://github.com/skt2020/V-care/blob/main/v-care%20documentation%20(suryansh%20trivedi).pdf)


## Working

V-Care is simple, convenient and easy to use application. Within a clicks user can examine their
body. When the user comes first time to V-Care website they need to register themselves in a
website by filling some basic details. Once they get registered successfully all their data will be
encrypted and saved to IBM Cloud Cloudent Database. After registration User can user will be
redirected back to home page of our website, from here user can take some basic details about VCare from About & Service sections for help and support there will also one Contact form in Contact
section. Register/LogIn section is also provided here.
After successful LogIn user will be moved to their Dashboards. User Dashboard contains necessary
all services required to monitor and analyze health of user either by themselves or by doctor. On
dashboard region one virtual assistant is also provided that will guide users about their self-health
examination process. Virtual Assistant will also guide all users “How they themselves works on all
available services at dashboard?”
Dashboard contains services like Anxiety monitor, BMI Calculator, Skin Disease Detector, X-ray
monitor, Fractures and Heart Disease Detector. All these services use different Artificial Intelligence
custom models trained for these services (Skin Disease Detector, X-ray monitor, Fractures and
Heart Disease Detector uses Azure Custom Vision service at it’s background for visual analysis of
diseases by training custom models for each diseases) ,(Anxiety Monitor uses TensorFlow face
expression model ).All the training and prediction data of all these models are stored in Azure Blob
storage.
Dashboard also provides facility to interact with doctors by Chatrooms for Expert advice, asking
any queries and virtual personalized checkups. One can upload their past health prescriptions for
beater observations. User will also generate their health reports as well as take details about best
hospitals and doctors from Dashboard.
## Demo

* Step 1
Visit https://v-care.eu-gb.cf.appdomain.cloud/ to Start V-Care for Virtual Medical Check-up

* Step 2
Once you hit the above URL you will reached to the landing (Home) page of V-Care.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Explore the Home page of V-Care.
When you click the 3- lines icon you will get the navigation menu which contains 5 elements
Dashboard, Home, About, Services, Contact. You will get detailed information about these
sections in further steps. Visit Dashboard button will redirect you to the V-Care Dashboard
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Scroll down the Home page to view other sections
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
What we do section will showcase some of our main features.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
About Us section will give you clear idea about our goals and services
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Why should you use V-Care provides you some advantages of using V-Care
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
If the Customer wants some free health tips regularly on their mail, they need to submit their Email here
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
You can explore some of V-Care services without visiting to dashboard from here.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Get in Touch section will allow the customers to ask their questions and provide honest feedback.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Contact Us section will provide some contact details of developer. At last there is copyright
section


* Step 3
Once you click on Visit Dashboard button from V-Care Home page you will redirected to
Dashboard page
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Explore the dashboard. V-Care Dashboard will provide 2 sections i.e. Monitoring and Analytical
section under each section different types of services are provided. Left side of Dashboard will
contains Navigation section. Which contains 4 elements Dashboard, Appointment, Dr. Chat,
Watson Health Assistant.
On top right corner you will show your profile (for simplicity during development and evaluation
purpose you will login as V-Care ). Click on logout for to reach to home page.

### -> Monitoring Services: 
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Monitoring Service Section is a group of 6 services i.e. BMI Calculator, Skin Disease Analyzer,
Anxiety Monitor, X-Ray Monitor, Bone Fracture Finder, Heart disease Analyzer.
Along with all these 6 services there are 2 additional services (Upload Prescription and Generate
Report Service)
#### -> BMI Calculator: 
Chick on BMI Calculator you will reach to BMI Calculator form where you need to fill your body
details (Height and Weight) it will calculate your BMI and show whether you are under nourished,
over nourished or fit
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
#### -> Skin Disease Analyzer: 
Skin Disease Analyzer will detect your skin disease with high accuracy once you show image of
disease Infront of camera It will also plot graph to show its accuracy for disease.

![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
#### -> Anxiety Analyzer: 
Once the person comes Infront of camera Anxiety analyzer will shows his depression level and
emotions by tracking 68 landmarks on his face.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
#### -> Heart Disease Analyzer :
Heart Disease Analyzer will analyze your heart disease with high accuracy once you show image of
ECG Graph Infront of camera It will also plot graph to show its accuracy for disease 
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
#### -> Bones Fractures Monitor: 
Bone disease monitor will detect your fractures in bones x-ray with high accuracy once you show
image of x-ray Infront of camera It will also plot graph to show its accuracy for disease

![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
#### -> X-Ray Monitor:
X-Ray monitor will analyze the x-ray of bones with high accuracy and tells the x-ray belongs to
which part of body once you show image of x-ray Infront of camera It will also plot graph to show
its accuracy for disease

![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
#### -> Prescription Upload:
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Once you click on prescription upload button you need to fill some basic details in form and
upload prescription submit it. Doctors will review it and consider it while analyzing your health.
####-> Generate Report:
Once you will analyze your body by V-care services you will generate personalized health report
from here after doctor’s validation.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)

### -> Analatical Services:
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Analytical Service Section is a group of 6 services i.e. Doctors Chat room, Watson health assistant,
Health status, Health productivity chart, best doctors’ recommendations, best hospitals
recommendations.
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)

This section under analytical services contains 2 services i.e. health status, health productivity
chart
#### -> Health Productivity chart:
Health Productivity chart will show the graph of health scale with respect to time (in months) and
show the improvement in your health ones you start using V-Care .V-Care will provide stability in
your health scale readings.
#### -> Health status:
Health status by default show you normal health status of average fit human when you hover a
mouse cursor over it . When you click on this service you will encounter one model window on
which you need to fill all the details and then it will show a personalized health status of you .
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)

### -> Best doctors and hospitals Recmondations
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
This section of analatical services will provide you informatin regarding best doctors and hospitals
available in india for specific diseases.

### -> Dr. Chat 
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Dr. Chat will provide personalized chatt room with doctors you wll ask any queries with doctors . If
doctors will offline simply drop your message here.
### ->Watson health assistant 
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Watson health assistant will guide you about V-Care platorm and its services you will take help
from watson assistant to V-care in effective way.

### ->Appointments
![covid19](https://user-images.githubusercontent.com/44112240/149521379-7cb74b0b-b92d-4fb1-99ad-9a58638205aa.png)
Fix your virtual health appointment with doctors by clicking appointment in navigation pane.


## Summary

Built a web application which detects, analyses diseases,
provide their remedial solutions and generate personalized
health reports also save 25% on Medical Expenses using
Azure Custom Vision Service, JavaScript, IBM Cloudant DB
and deployed over IBM Cloud using Docker and Kubernetes



## Note:
V-care is currently in development stage so there must be always a high chance of AI
model Failure. It is not advised to trust completely and depend over our services. It is
designed for provides primary health monitoring.
It is highly recommended to take expert advice and conformation from professional
doctors before taking any preventive and remedial measures for diseases.




## Feedback

If you have any feedback, please reach out to us at suryanshtrivedi1@gmail.com


## Author

- [Suryansh Trivedi](https://github.com/skt2020)

