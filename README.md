# group-project-readme


# Introduction

Our project is a Recipe Generator that generates different recipes for users based on the ingredients they provide to our application. Users input an image of their ingredients to our application, and the application outputs recipes that correspond to those specific ingredients.

![second](https://github.com/CS222-UIUC-FA23/group-project-team85/assets/123044514/3cf5004a-1c53-4770-b0ff-240dca163295)

![WhatsApp Image 2023-12-04 at 11 13 02 AM](https://github.com/CS222-UIUC-FA23/group-project-team85/assets/123044514/25f2c56c-a9c3-4fac-80ec-8b17b0ff3242)


Here is the overall project structure:

A user interacts with the frontend of our project, which is written in React.js. A user can choose a file on their device and input an image to the application. This process involves the use of middleware and the Node.js file system module to take the inputted image and send it to the running backend server. The running backend server then takes the image and uploads the image to an S3 bucket in AWS. After uploading the image to an AWS S3 bucket, the next step is calling the API we set up through AWS API Gateway. We are able to pass in the details of the location of the image in S3, and the API gateway will take this information and call an AWS Lambda function. The Lambda function will call a service called AWS Rekognition, which is a machine learning software in AWS that is used to detect images and outputs text that describes the image. We then take this text which describes the image and we send it back to the frontend. This text will give us the names of the ingredients that Rekognition has detected in the image. The frontend uses this to call the Recipe API with all the detected ingredients, and the recipe API sends back a response with all the recipes corresponding to those ingredients. The recipes are then listed.

The bottom part of the application, which is the inspiration section, takes the user input and once again calls an API to find different images corresponding to recipes the user is looking for.

# Project Proposal Link: 

## https://docs.google.com/document/d/1Q4pBhWnkIWhGatoDLdQhtT5VIPk9zQBAe0YtQeI3PSI/edit?usp=sharing


<img width="712" alt="Screenshot 2023-12-03 at 8 04 05 PM" src="https://github.com/CS222-UIUC-FA23/group-project-team85/assets/123044514/bd099caf-efc1-4fcf-a6e6-a832d5c8ef3c">

This is a base-level architecture of the application. The user will give some input and we will then take the file and send it to the backend, which will upload it to AWS S3. Then we will call API Gateway, which will call AWS Lambda, which will call AWS Rekognition, and which will return results. We take these results and call the recipe API, and the output of different recipes is then displayed on the webpage. Here is a closer look at the AWS architecture as well:

![WhatsApp Image 2023-12-03 at 1 59 55 PM](https://github.com/CS222-UIUC-FA23/group-project-team85/assets/123044514/a6ab9bcd-51c8-4675-b0c2-98a2d8635f89)

Here is a diagram depicting the request being sent to the API, the communication with AWS lambda and rekognition, and the eventual response sent back from the API.


# Developers:
Ayush Tarachandani: Worked on frontend development and developed backend node.js file system functionality

Rishabh Ranganathan: Developed the backend server's functionality and worked on connecting the frontend and the backend through axios requests

Pranav Pullabhotla: Developed AWS integration and worked on the image inspiration API connection

Joshus Neela: Frontend developer who worked primarily on color schemes and UI


# Environment Installation:

## Make sure npm is installed on your computer

## Navigate to the source directory and run the following command:
### npm i

## Next, navigate to the frontend folder and run the command again
### npm i

## Navigate back to the source directory and type the following command to run the backend server:
### node index.js

## Now, open another terminal window and run the following command:
### npm start

## The project will open in a browser window

