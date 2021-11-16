# Creating and Consuming a Hasura GraphQL Db with React and Apollo Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started with Hasura

Head over to https://hasura.io/ and click the **'Get Started In 30 Second'** button.

Use  GitHub, Google or email to create a new Hasura account.

Verify email address to be redirected to Hasura with this poppup:

<img src="https://i.imgur.com/QxzPCRk.png" alt="popup" width="600">

Click **'Launch Connsole'** to be redirected again to the GraphiQL dev environment to get started on the API.

## Creating the GraphQL API

First connect a database which is easy and free by navigating to the **'DATA'** tab:

Then click the **'Create Heroku Database'** and below that **'Create Database'** button

<img src="https://i.imgur.com/zGhcYYj.png" alt="navbar" width="600">

<img src="https://i.imgur.com/PTNSqf9.png" alt="Database" width="500">

Log in to Heroku via the pop-up and a status bar will appear showing status.

Once finished click **'View Database'** button and then the **'Create Table'** button at the top of that page.

Name the table 'Todo'

Configure fields and set the Primare Key to id.

<img src="https://i.imgur.com/JewSX1D.png" alt="configure fields" width="600">

Foreign Keys and Unique Keys can be set up later.

Then click **'Add Table'**.

#### Now you have a new GraphQL API !!!

Next add data to the API by selecting the **'Todo'** table in the **'Data Manager'** to the left side of the screen then select the **'Insert Row'** tab.

<img src="https://i.imgur.com/RZsmpbo.png" alt="insert row" width="600">

Fill the required fields with data excluding the id as it will be generated automatically.

Press the **'Save'** button, then repeat this step but make sure to change the data fields then click **'Insert Again'**.

Once there is at least one row inserted, select the API tab at the top of the page to return to the GraphiQL IDE.

Here you will now see some options in your GraphiQL Explorer.

<img src="https://i.imgur.com/N0c4wEF.png" alt="navbar" width="600">

<img src="https://i.imgur.com/3n9ntR5.png" alt="explorer" width="300">

Each of these can be use to make different queries and mutations to your API. Start clicking them to see what they do!

<img src="https://i.imgur.com/JIZjXSv.png" alt="query" width="800">

Notice the **'Docs'** pop out button in the top right corner. It has documentation created specifically for this table to show how to query and mutate any way you might need.

#### Keep this dashboard open as it will be needed later !!!

## Using React and Apollo Client to consume the API








### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
