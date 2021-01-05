# BOTIGA WEBSITE

## HOW TO EXECUTE

1. Checkout the project
2. In the Root of the project install dependency using `npm i`
3. In the Root of the project execute `npm start`

## CHANGING FOR MOBILE AND DESKTOP

edit `index.css` media query for desktop and mobile look and feel

## BUILDING THE PROJECT FOR DEPLOYMENT

1. In the root of the project execute `npm run build` build folder will be generated use the files inisde the build folder for deplyment to aws s3 bucket

## CHANGING CONFIG FOR WEBSITE LIKE TERMS, PRiVACY , EMAIL LIST

Make changes to the config.js file

## EMAIL SRVERVICE

-   We are using emai.js library to send mail.
-   Steps to follow:

1. create account
2. add Service and authenticate your email
3. create one template for your mail

use the `service_id`, `template_id`, `user_id` from dashboard in config.js file in project to chage the emailing list.

## DEPLOYING THE APPLICATION IN AWS S3.

1. Login to Aws console
2. Go to the s3 bucket https://console.aws.amazon.com/s3
3. Click on the "Create Bucket" button. You'll be asked to specify a bucket name and a region
4. In The properties tab Enable static website hosting, use index.html for default file and error file
5. In th permision tab, turn off the Block all public access.
6. In th permision tab, we'll add a bucket policy.

```
{
  "Version": "2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::<BUCKET-NAME>/*"]
    }
  ]
}
```

7. Finally go to object tab upload the files inside the build folder of react app to s3 bucket.

8. Go to properties tab the last section conatins the url to access the application.

## Invalidate

-   Website hosted to S3 does not support https
-   To access site over https, it needs to be connected to a `AWS CloudFront`
-   Everytime, you update site, `Invalidate` CloudFront cache to show latest changes

## Tutorial:

1. [Upload react app to s3](https://www.newline.co/fullstack-react/articles/deploying-a-react-app-to-s3/)

2. [Email js](https://www.emailjs.com/)
