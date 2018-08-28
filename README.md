ATK Web app V1.0.0


Client Instructions:

* To test project :
1. Open command line prompt and type.
2. Clone the repo using command git clone <repo url>
3. cd to the project folder.
4. Run command npm install
5. Run command ng serve –o

App will automatically open in your default browser.


Developer Instructions:

Please follow this guide for best practices and generate more compatible code that can be used in further modules in this project, module and components in folder app/theme/pages/default that’s very important to follow the metronic template.

Modules applied so far till the date 16/12/2017:
* Log in
* Feeds
* Profile
* Messages
* Module for every report type
* Settings
* Admin module

For adding more parts of the app please add it in new module to keep the app at lazy loading as possible.

Loading and animations:

Regular processes like loading and animations can achieved easily in the current version, to control loading please refer to utilities.service file, please if you would like to add any more utilities make sure to add it to this service and keep it in concise function that can be called easily through the app.

For adding body animation make sure to add class “uk-animation-slide-bottom-small” to the body container, example for loading and animation applied can be found in the feeds.component folder.

Api Urls and calls:
For Api calls in this app version there is a service api-url.service.ts all urls returns from closure to keep it secure from editing in client side, please add any further urls in this service at the same style already applied, every module has its own service which uses specific urls for its api data needed.

Shared Module:
For shared module the layout.Module.ts can be used for that as it is default for metronic template.

Please feel free to add/edit info in this read me for better documentation and produce more sharable code.
