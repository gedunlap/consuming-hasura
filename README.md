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

(Most of this section is directly from [Apollo Client Documentation](https://www.apollographql.com/docs/react/get-started/))

Start in terminal by navigating to desktop or a folder of choice, next `npx create-react-app project-name`, then cd into `project-name` and `npm install @apollo/client graphql`. Open the file in code editor of choice.

In `index.js` initialize ApolloClient by importing:

    import {
        ApolloClient,
        InMemoryCache,
        ApolloProvider,
        HttpLink,
        ApolloLink,
    } from "@apollo/client";

Next create a `.env` file in the root of the project. 

Return to the Hasura Dashboard where two needed items will be found:

'GraphQL Endpoint' and 'x-hasura-admin-key'.

<img src="https://i.imgur.com/6MZ7oBc.png" alt="key" width="800">

Open the `.env` file and create two variables:

`REACT_APP_KEY=` (paste 'x-hasura-admin-key' here)

`REACT_APP_URI=` (paste 'GraphQL Endpoint' here)

**Make sure to use **NO** quotations on key or url.**

**If you have been running the dev server you will need to restart it now for these variables to work**

Now back in `index.js` use env variables to connect to the API.

<img src="https://i.imgur.com/hoBRsNB.png" alt="code image">

- Set the endpoint in HttpLink using the created env variable.
- Use ApolloLink to pass headers with admin key env variable.
- ApolloClient concatinates these to send the full request to the API.
- ApolloProvider wraps the App to enable access to ApolloClient throughout.

Return to Hasura and copy a database request.

<img src="https://i.imgur.com/JCK68em.png" alt="query" width="400">

Next, move to `App.js` and import:

    import { useQuery, gql } from '@apollo/client'

- Write a variable holding the Hasura request inside the backticks of a `gql` tag.
- Set a variable with **'loading, error, data'** equal to `useQuery(GET_TODOS)`.

<img src="https://i.imgur.com/jDG4Wku.png" alt="use query">

When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties you can use to render your UI.

`console.log` **'loading, error, data'** to see your data on the front end in devtools.

<img src="https://i.imgur.com/bnWbFLW.png" alt="devtools" width="800">

**Now use the data to build out the front end !!!** 

<img src="https://i.imgur.com/YqAkqWO.jpg" alt="neo" width="400">