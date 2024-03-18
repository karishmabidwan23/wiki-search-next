## Getting Started

Update enviroment variables, add .env.local file in the root of the project. The file should have below content.

```
MEDIA_WIKI_BASE_URL=https://en.wikipedia.org/w/api.php
```

You can then run the project using below mentioned commands.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

This is a demo project developed to showcase production grade high performing, scalable and flexible architecture build using next js.

### Directory Structure 

The directory structure is as per next js best practices, further I have divided it into few parts to optimize the redablity of whole application codebase.

```
-- public # contains public assets such as images and fonts. For this project this folder only contains icons as .png.
-- src # Contains whole application code.
   -- app # Contains react application code, which includes common components, screens, utils, library and third party integrations.
      -- component # Contains common component which can be used across application in different screens.
      -- hooks # Contains common custom hooks which can be used across application.
      -- icons # Exports variable links for icons, this in our case refers to icon in public directory.
      -- lib # Contains, third party integration which are commonly used by all major production application.
      -- screens # Contains, whole screen code, these screen will be exported to pages directory.
      -- test-utils # Contains, common function which can be used accross all test cases.
   -- pages # Contains Next JS app-router files.
      -- api # Contains backend api required for the application this code runs in backend next js.
```

### Major Libraries Used

I have use well tested libraries in this project. These libraries are widely used accross the industry and is well tested and verified by major companies. Below is the list of libraries I have used.

#### Styled Components

Styled component is modern way to write css in js. With help of styled-component we can write easy readable react-components. You can learn more about styled-component using this link: https://styled-components.com/

#### React Query

React query, helps us to write rest api's in a statefull reactive manner. With help of react query we can easily manage all our rest opperation and application state centrally. With react query, caching and performance optimization of rest operation can be ensured.
learn more about react-query usign this link: https://tanstack.com/query/latest.

#### Dompurify (For Security)

As part of this project I have render html from third party source (Wiki-pedia). This can cause XSS attacks. To purify the html dom and ensure security of our application, I have used dompurify. Dompurify sanetize the html to ensure xss attacks do not happend. 


#### React-window

Usually, we do not require to render Virtualized list in react. But in some cases when we have lot of dom element we need to render only the elments which are currently vissible to user. For this kind of cases we need virtualized list support. By default react do not provide any such support because of which to demonstate Virtualized List implementation I have used react-window.

## Steps taken to improve performance

1 Usage of stateless components. I have created stateless components like SearchInput and SearchItem components. This component is dumb components and will not cause heavy rendering. When building large application we should architecutre our application in this way. Most of our component should be as state-less as possible. By this we can make sure easy and less heavy rendering of our components.

2 Usage of useCallback and useMemo where neccessary. I have used the useMemo and useCallback hooks from react, whereever it was neccessary. By this we can save not required re-calculation. However using this functions can also decrease the perfomance since it can be more expensive to perform cache check either of performing the simple opperation itself. That's why I have used this function carefully to imporve the performance.

3 Usage of VirtualizedList. I have used react-window to implement virtualization list concept. However for this use-case VirtualizedList was not required, but to demonstrate the usage and since it was a requirement I have used the react-window to showcase how Virtualization can be used when required.

4 Central Caching mechanism. I have used react-query which can cache the result of queries centrally with very less effort. This increases the performance in cases when similar kind of api is called multiple times.

5 Custom Debounce: I have created a custom useDebounce function, which can we used when user types in search input. This can ensure less multiple api call happens when user types. This small change drastically improves performance of application.

## Steps taken for security

1 Usage of dompurify. I have sanitized the output of wikipedia, before injecting them into our application. By doing this we are ensuring that XSS attacks should be avoided.

2 Have next/api proxy. In this application we are not directly accessing the wikipedia api from frontend. I have created api's using next js. The frontend of application is accessing its own backend api's. By doing this we only provide user a certain controll over the usage of api. By this we can controll upto what extend user can make any changes. We can further add next/auth and other mechanism to add extra layer of security.

3 In this we majorly created all the componment ourself, except of few like loader. The third party libraries which are used are well trusted.

## Steps taken for scalablity and flexiblity of codebase

1 I have used a directory struture which is well diffrentiating types, styles, jsx and js logic. In long run when application code base increases, structure like this help to ensure that each file is small enough to be easily readable. And segrigating files like this is best practice as per software development standards.

2 Segregation of business logic and jsx code. In code you can see for large screen we have extracted out business logic in a custom hook and then used that in the screen. Example useHome hook. By doing this we, solve two problems, our jsx code is much simple to understand and maintain and it can be tested in isolation with the business logic. We can write business logic test independent of ui logic if required. When our application, grow this will help us to write simple test and keep our code clean as much as possible.

3 Common components. I have created common components which can be reused in different pages if required. In long run if we segrigate components like this we can create a component library which can not only be used in one project but also in other different projects withing a company.

4 Usage of typescript. Typescript usage makes code more readable and easily understandable for the developers. It also added other many advantages which is not possible with normal javascript.

5 Usage of Theme. I have used theming logic in this application with this we can easily switch whole theme of our application. This makes it easy to create different themes and used can switch them easily. With current setup we can create a DarkThem and add a Dark Mode to our application.

## Testing

The project is configured to used jest, and testing-library. I have wrote one basic test to show how testing can work. However, because of time constraints I could'nt write more testcases.