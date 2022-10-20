# Deploy React Apps with Amplify Hosting

## Navigate to AWS Amplify

To get started with Amplify, log in to your AWS Management Console and search for Amplify in the search box.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-01-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-01.png)

Click on the AWS Amplify Service given in the above image. This will open up the AWS Amplify landing page.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-02-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-02.png)

## Scroll down to AWS Amplify Hosting

For demonstration, we will deploy react app on AWS Amplify by connecting the Git repository to AWS Amplify. Click on “Get Started” in the Amplify Hosting Section.

## Select your Git Repository

You can directly connect your code repository with AWS Amplify.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-03-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-03.png)

Authorize AWS Amplify to connect with your [Github](https://blog.cloudthat.com/automate-terraform-modules-with-github-actions-as-infrastructure/) account.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-04-300x164.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-04.png)

Select allow for All Repositories. Then click on install & authorize.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-05-300x164.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-05.png)

## Successfully Integrating with Github

Once you have done the above steps and successfully integrated with Github. You will this notification by AWS Management Console.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-06-300x164.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-06.png)

## Select your Repository

After successfully connecting with your Github account. Now you can select the repository you want to host on Amplify. We will go with the first repository named “react-app-01”.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-07-002-300x105.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-07-002.png)

## Select the Branch

It is important to specify the branch you want to deploy, as your code may have multiple branches. We will select the “Master” branch for this demo and then click on next.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-08-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-08.png)

## Auto Detecting your App Settings

One of the main features of Amplify is how once you connect your code repository, it will auto-detect the tech stack of the application.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-09-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-09.png)

## Add Environment Variables

If there are any Environment Variables that are hosted in your application, you can then add them here. AWS Amplify makes sure that these variables are then securely inserted in your application code wherever required.

For the purpose of this demo, we will not add any environment variables. Let’s click on next to continue.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-10-300x162.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-10.png)

## Review your Deployment

Before clicking the save and deploy button. Let us review if all parameters are configured correctly. Click on “save and deploy” once done.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-11-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-11.png)

## Successfully Deploying the App

Now we need to wait till the deployment is successful

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-12-300x163.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-12.png)

Please wait till the status of Provision, Build, Deploy and Verify is green.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-13-300x146.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-13.png)

## Click the Link to Open Your Application

After the status checks are done for Provision, Build, Deploy and Verify. Your App is ready to go. Click on the link given in the image below to open your application.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-15-300x123.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-15.png)

## Be Ready to Watch the Output

Your application is now successfully deployed on AWS Amplify. You can now share this link with your friends and colleagues to test the application.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-151-300x123.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-151.png)

Your AWS Amplify Link: [https://master.d3ujaozaddhcc8.amplifyapp.com](https://master.d3ujaozaddhcc8.amplifyapp.com)

## Enable or Disable CI/CD

AWS Amplify or Amazon Amplify by default has enabled continuous deployments(CI/CD). With CI/CD enabled, every time you make changes to your code, Amplify will trigger a new deployment and deploy the updated repository of your application.

[![](https://d5q4akjun1yjt.cloudfront.net/assets/image-16-300x128.png)](https://d5q4akjun1yjt.cloudfront.net/assets/image-16.png)

## Private npm package installation as part of CD

You should be able to store your NPM auth token as an environment variable in Amplify Console (App settings > Environment variables), aka something like NPM_TOKEN.

At build time, you can reference the env variable in your amplify.yml, (App settings > Build settings) Something like the following in your preBuild section just before your npm or yarn install command:

```
 - echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
 - npm install

```

The amplify.yml file:

```
frontend:
    phases:
        preBuild:
            commands:
                - echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
```

# Further Reading/References

- https://blog.cloudthat.com/aws-amplify-automate-your-deployments/
- https://github.com/aws-amplify/amplify-hosting/issues/501#issuecomment-744494909
- https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
- https://docs.aws.amazon.com/amplify/latest/userguide/server-side-rendering-amplify.html#ssr-Amplify-support