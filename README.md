This project was build to illustrate chat data

## Installation Guide

1. Clone then Un-zip the project
2. Check if your device have installed Node by running:
    node -v
3. If not, install node by directing to NodeJS website and download the recommended version of Node: https://nodejs.org/en/
3. If yes, direct to the extracted folder and run npm install from downloading necessary modules:
    npm install
4. To run the application, execute "npm start" from your command promt.

## Usage Guide

    To illustrate data, there are 3 required fields need to be filled, which are:
        Start date: starting date of data capturing
        End date: ending date of data capturing
        Access token: secret token to use the api
    
    After submiting form by Enter or clicking Search button, there will be 3 large cards to display "Total conversation Count", "Total User Message Count" and Total Visitor Message Count"

    under these 3 cards are 2 tabs for illustrating options

        the first tab is Table tabs:
            in this tab, data will be displayed in a table with click-able headers for sorting ascending or descending
            the table will only display 5 datas at a time, user can navigate through navigation buttons below
        the second tab is Graph tabs:
            data will be display in a combochart with 2 columns for "total conversation count" and "visitors with conversation count" and 1 line for "missed chat count"
    
    All section data like start date, end date, access token will be stored in local storage
## Folder Guide

    src/ - The root folder which contains all sub-folders in the application
    |_components/ - components container folder
        |_GraphTab/ - component used to illustrate chat data in column and line chart using AmCharts v4
        |_InputForm/ - component used to enter necessary data to fetch chat data by date like start date, end date and access token
        |_SummaryCard/ - component to display main information of chat data
        |_TableTab/ - all components inside one of two main tab in the application - used to display fetched data in table format
    |_Context/ - Context API file contained folder
    |_store/ - Redux related files folder
    |_types/ - global types


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

