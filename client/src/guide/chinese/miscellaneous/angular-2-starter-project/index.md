---
title: Angular 2 Starter Project
localeTitle: Angular 2入门项目
---
本教程将使用Angular2构建一个非常简单的种子项目。我们将从最基本的应用程序开始，然后添加更多功能。

## 概观

通过创建包含角度特定标记的HTML模板来构建Angular 2应用程序。然后创建类来管理模板，并将所有内容包装到一个模块中，您可以将它们拼凑在一起以创建应用程序。这些模块称为**组件** 。

Angular解释这些模块并使用它们在浏览器中显示您的应用程序。

## 入门申请

让我们开始使用最小的应用程序。我们将从包含单个模块的应用程序开始，该模块的唯一工作是显示一些文本。

我们将首先创建一个名为“app”的新文件夹。
```
$ mkdir app 
```

如上所述，我们的应用程序将从单个模块或**组件开始** ，它将向屏幕显示一些文本。我们可以使用纯JavaScript或TypeScript来制作一个有角度的2应用程序。使用TypeScript，它更容易，更方便程序员![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 "：眨眼：")

让我们学习如何使用TypeScript创建组件。

创建一个名为_`app.component.ts`_的文件，如下所示：
```
    // app.component.ts 
 
    import { Component } from '@angular/core'; 
    @Component({ 
      selector: 'my-app', 
      template: '<h1>Free Code Camp Rocks!</h1>', 
      styles: <a href='http://plnkr.co/edit/BdvNONEmO3Jwg0EavX22' target='_blank' rel='nofollow'>` 
        h1 { color: darkgreen; font-family: Arial, Helvetica, sans-serif;} 
      `] 
    }) 
    export class AppComponent { } 
```

每个Angular 2应用程序至少有一个组件，通常名为**AppComponent** 。组件使用其中的模板管理页面的一部分。

我们的组件演示了您将要编写的任何组件的基本结构。它包含：

*   **import语句**来引入我们需要的其他组件
*   **组件装饰器** ，让angular知道要使用哪个模板以及如何创建组件。基本上，任何与组件相关的元数据。
*   **组件类** ，它控制组件的外观和行为

让我们仔细看看组件中的每一行。

## 进口
```
import { Component } from '@angular/core'; 
```

由于角度应用程序是模块化的，我们可以导入我们可能需要的任何其他模块或库。在这里，我们将导入Angular 2核心模块，以使我们的组件可以访问`@Component`装饰器。每个应用都需要此导入才能开始使用。

由于我们导入了上面的`Component`函数，我们现在可以使用它来将元数据与我们的组件类相关联，这将告诉Angular我们应该如何创建组件以及它将提供的操作。

## 组件装饰器
```
    @Component({ 
      selector: 'my-app', 
      template: '<h1>Free Code Camp Rocks!</h1>' 
    }) 
 ``` 
 Our metadata object has selector and template fields. 
 * The `selector` specifies a CSS selector that indicates which HTML element will represent this component. The element we will use will be named "`my-app`". Angular will use this to create an instance of our component where it finds this element. 
 * The `template` tells angular what template it will use for this component. This can refer to other Components or just a form of HTML that tells how to display the view for our component. Our template is just displaying an `h1` element containing the text "`Free Code Camp Rocks!`". 
 
 ## Component Class 
 Our final line provides an empty class named ***AppComponent*** 
 ```js 
 export class AppComponent { } 
 ``` 
 If we want to build a more complex component we can add logic and properties to the class. This component is extremely basic and simply displays some html, so its class will remain empty. 
 
 We export our class so we can use it in other components in our application. 
 
 Next, we need to connect our root component to Angular. To do this we create another file in our app folder called *`main.ts`* that will have the following code: 
 ```js 
    import { bootstrap }    from '@angular/platform-browser-dynamic'; 
    import { AppComponent } from './app.component'; 
    bootstrap(AppComponent); 
 ``` 
 This file imports the two items we need to start our app. 
 * **`bootstrap`** - Angular's built in method that connects to the browser 
 * **`AppComponent`** - Our component we created above (which is why we exported it) 
 We then call `bootstrap` method with `AppComponent` 
 
 **Finally, create index.html** 
 
 ```html 
    <html> 
      <head> 
        <title>Free Code Camp - Angular 2 Tutorial</title> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="stylesheet" href="styles.css"> 
        <!-- 1\. Load libraries --> 
        <script src="https://npmcdn.com/core-js/client/shim.min.js"></script> 
 
        <script src="https://npmcdn.com/zone.js@0.6.12?main=browser"></script> 
        <script src="https://npmcdn.com/reflect-metadata@0.1.3"></script> 
        <script src="https://npmcdn.com/systemjs@0.19.27/dist/system.src.js"></script> 
 
        <!-- 2\. Configure SystemJS --> 
        <script src="systemjs.config.js"></script> 
        <script> 
          System.import('app').catch(function(err){ console.error(err); }); 
        </script> 
      </head> 
 
      <!-- Display app in my-app element --> 
      <body> 
        <my-app>Loading Your App...</my-app> 
      </body> 
    </html> 
 ``` 
 In commented section 1, we loaded several libraries that improve the compatibility of this tutorial with different browsers/versions. It also imports `system.src.js` which is used as module loader to import the app. 
 
 In section 2, SystemJS is used to load our application and our various modules. In a production example we may want to use something else such as webpack. It was chosen here since we can use it with plunker. 
 
 This is all that is required to get our simple application running. <a href="http://plnkr.co/edit/2i7Wjwd2JGj4NZtKvGD2" target="_blank">Here is a link to a plunker</a> that contains our working application. You can fork it into your own version and change whatever you'd like. 
 
 <a target="_blank" href="http://plnkr.co/edit/2i7Wjwd2JGj4NZtKvGD2">VIEW APP</a> 
 
 ## Add Functionality and Another Component 
 
 Now let's add a bit more functionality to our program. We will create a counter that let's you increment it by clicking a button. 
 
 Our increment component will be its own module so that we can reuse it in later applications. 
 
 Let's name our file: `app/increment-clicker.component.ts` and set it up. 
 ```js 
 // app/increment-clicker.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
    selector: 'increment-clicker', 
    template: ` 
      <div className="counter"> 
        <h1>{{curClicks}} clicks</h1> 
        <button type="button" (click)="incrementClicks()">Increment</button> 
      </div> 
    `, 
    styles: [` 
        .counter { 
          width: 100%; 
          margin: auto; 
          background: darkgreen; 
          border-radius: 5px; 
          color: white; 
          padding: 20px; 
          text-align: center; 
        } 
        .counter h1 { 
          margin: 0; 
          padding: 20px; 
          font-size: 36px; 
        } 
        .counter button { 
          background: #f1c40f; 
          border: 0; 
          box-shadow: 0px 5px 0px #927608; 
          padding: 20px; 
          width: 100%; 
          outline: none; 
          border-radius: 5px; 
          color: darkgreen; 
          font-weight: bold; 
        } 
 
        .counter button:hover { 
          background: #a9890a; 
          cursor: pointer; 
        } 
    `] 
 }) 
 
 export class IncrementClicker { 
  curClicks = 0; 
 
  incrementClicks() { 
    this.curClicks++; 
  } 
 } 
 ``` 
 Our component structure is similar to our previous one, but we've added a bit of functionality here. You will notice our class is no longer empty. We've added a variable to track the clicks as well as a function to increment them when the user clicks the button. 
 
 You can display properties from your class in your template using double braces such as: `{{ variableName }}` 
 
 We bind the button click event to our class function using Angulars Event Bindings. 
 ```html 
 <button type="button" (click)="incrementClicks()">Increment</button> 
 ``` 
 
 Notice that we've also added some styling to our components. This way everything is self-contained in this module. You may also include a `templateUrl` and/or `styleUrls` properties instead to extract the template and style rules to an external file and link them here. 
 
 Now we just need to update our `AppComponent` to include our new component: 
 ```js 
 // app/app.component.ts 
 
 import { Component } from '@angular/core'; 
 
 /* Nested Component */ 
 import { IncrementClicker } from 'app/increment-clicker.component'; 
 
 @Component({ 
  selector: 'my-app', 
  directives: [IncrementClicker], 
  template: ` 
    <h1>Free Code Camp Rocks!</h1> 
    <increment-clicker></increment-clicker> 
  `, 
  styles: [` 
    h1 { color: darkgreen; font-family: Arial, Helvetica, sans-serif;} 
  `] 
 }) 
 
 export class AppComponent { } 
 ``` 
 To pull in our new `IncrementClicker` component we need to import it by including the class name as well as the location of the typescript file as we did on this line: 
 ```js 
 import { IncrementClicker } from 'app/increment-clicker.component'; 
 ``` 
 We then add the `IncrementClicker` *component* as a directive to the `AppComponent` module using: 
 ```js 
 directives: [IncrementClicker], 
```

最后，我们只需在模板中添加组件连接的标记。因此，我们的`IncrementClicker`组件中的选择器将匹配我们希望它显示的标记。  
`js template:`

# 免费Code Camp Rocks！

`,`  
我们的组件现已包含在我们的应用中！  
\[更新代码  
[查看完整的应用程序](http://run.plnkr.co/plunks/BdvNONEmO3Jwg0EavX22/)