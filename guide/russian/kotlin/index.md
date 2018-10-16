---
title: Kotlin
localeTitle: Котлин
---
**Что такое Котлин?**

[Kotlin](https://kotlinlang.org/) - это язык программирования, разработанный компанией [Jetbrains](https://www.jetbrains.com) , компанией за некоторыми из самых популярных в мире IDE, таких как IntelliJ и Pycharm.

Он служит заменой Java и работает на JVM. Он находится в разработке около 6 лет, и он достиг 1,0 всего год назад.

Сообщество разработчиков охватило Kotlin настолько, что Google анонсировала поддержку первого класса для разработки Android в [Google I / O 2017](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/) .

## Версия

На момент написания этой статьи последняя стабильная версия Kotlin - [версия 1.2.71](https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/)

## Монтаж

Прежде чем приступать к инструкциям по установке для Kotlin, вам необходимо убедиться, что вы настроили **JDK (Java Development Kit),** настроенный в вашей системе.

Если на вашем компьютере не установлен JDK, перейдите в **раздел «Установка»** [этой ссылки, чтобы узнать,](https://guide.freecodecamp.org/java) как его настроить.

Kotlin работает с **JDK 1.6+,** поэтому убедитесь, что вы установили правильную версию. Когда вы закончите настройку JDK, выполните следующие действия.

*   \## IntelliJ IDEA Самый быстрый способ заставить Kotlin работать на ваших машинах - использовать его вместе с **IntelliJ IDEA** . Это рекомендуемая среда разработки для Kotlin из-за поддержки инструментов, предоставляемой Jetbrains. Вы можете захватить [Community Edition](http://www.jetbrains.com/idea/download/index.html) IntelliJ из [JetBrains](https://www.jetbrains.com) .

После установки IntelliJ вы можете начать свой первый проект в Котлине без каких-либо дополнительных конфигураций.

Создайте **новый проект** и убедитесь, что вы выбрали Java-модуль. Установите флажок Kotlin на этом экране

![новый экран проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

Дайте проекту название и нажмите «Готово».

![название проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

Теперь вы попадете в главный редактор, где вы увидите, что ваши файлы проектов организованы следующим образом.

![структура проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)

Чтобы проверить вашу установку, создайте новый файл Kotlin в папке **src** и назовите это **приложение** (или что-нибудь еще, что вам подходит)

![структура проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

После того, как вы создали файл, напечатайте следующий код мира Hello World. Не волнуйтесь, если это не имеет смысла сразу, это будет подробно рассмотрено позже в руководстве.

\`\` \` fun main (args: Array ) { println ("Hello World!") }
```
![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png) 
 
 You can now run this program by either clicking on the Kotlin icon on the gutter (left side of your editor with line numbers) 
 
 ![hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png) 
 
 If everything goes fine, you should see the message Hello World! in your Run window as shown below 
 
 ![run window ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png) 
 
 
 
 * ## Eclipse 
 
 While IntelliJ is the recommended IDE for developing with Kotlin, it is definitely not the only option out there. **Eclipse** happens to be another popular IDE of choice among Java developers and Kotlin is supported by Eclipse as well. 
 
 After setting up the **JDK** on your system, follow the instructions below. 
 
 Download <a href='https://www.eclipse.org/downloads/'>**Eclipse Neon** </a>for your operating system and once you have successfully installed it on your system, download the **Kotlin Plugin** for Eclipse from the <a href='http://marketplace.eclipse.org/content/kotlin-plugin-eclipse'>**Eclipse Marketplace**</a>. 
 
 ![eclipse marketplace ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png) 
 
 ***NOTE: You can also do the same by going into Help -> Eclipse Marketplace and then search for Kotlin Plugin*** 
 
 Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample. 
 
 Create a new Kotlin Project by clicking on File -> New -> Kotlin Project 
 
 ![new kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png) 
 
 An empty project will be created with a directory structure quite similar to a Java project. It would look something like this 
 
 ![empty kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png) 
 
 Go ahead and create a new Kotlin file in the **src** folder 
 
 Once that is done go ahead and type out the following code. Don't worry if it does not make sense right now, it will be covered later in the guide. 
```

fun main (args: Array ) { println ("Hello World!") }
```
![eclipse hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png) 
 
 Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on ***Run As -> Kotlin Application*** 
 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png) 
 
 If all goes well, the console window would open to show you the output. 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png) 
 
 * ## Using the standalone compiler on the terminal 
 If you are someone who prefers doing things in a more manual way and do not want to tie yourself down to an editor/IDE you might wanna use the Kotlin compiler. 
 
 ### Downloading the compiler 
 
 With every release of Kotlin, Jetbrains ship a standalone compiler which can be downloaded from the <a href='https://github.com/JetBrains/kotlin/releases/tag/v1.1.51'>GitHub releases</a>. Version 1.1.51 happens to be the latest at the time of this writing. 
 
 
 </br> 
 
 **Manual Installation** 
 
 Once you have downloaded the compiler you need to unzip it and proceed with the standard installation using the installation wizard. Adding the **bin** directory to the system path is an optional step. It contains the scripts that are necessary to compile and run Kotlin on Windows, Linux and macOS. 
 
 </br> 
 
 **Installation via Homebrew** 
 
 You can install the compiler on macOS using <a href='http://brew.sh/'>Homebrew </a>which is a package manager for macOS. Launch the Terminal app and issue the following commands 
```

$ brew update $ brew install kotlin
```
**Installation via SDKMAN!** 
 
 Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href='http://sdkman.io/'>SDKMAN!</a>. Launch the terminal and issue the following commands 
```

$ curl -s https://get.sdkman.io | bash\`\`\`

Следуйте инструкциям на экране и после SDKMAN! это проблема с установкой следующей команды внутри терминала

`$ sdk install kotlin`

Как и все предыдущие параметры установки, было бы неплохо протестировать запуск установки.

Откройте текстовый редактор по вашему выбору и напишите базовую программу Kotlin, приведенную ниже.
```
fun main(args: Array<String>) { 
    println("Hello, World!") 
 } 
```

Сохраните этот файл с расширением **.kt** . Теперь вы готовы скомпилировать его и посмотреть результаты. Для этого выполните следующую команду

`$ kotlinc hello.kt -include-runtime -d hello.jar`

параметр `-d` сообщает компилятору, что вы хотите вызывать. Параметр `-include-runtime` делает полученный .jar-файл самодостаточным и выполнимым, включая библиотеку времени исполнения Kotlin.

Если ошибок компиляции не было, запустите приложение, используя следующую команду

`$ java -jar hello.jar`

Если все пойдет хорошо, вы должны увидеть **Hello World!** напечатан на экране терминала
```
$ java -jar hello.jar 
 Hello, World! 
```

Поздравляем, вы успешно создали компилятор Kotlin и среду разработки в вашей системе. В этом руководстве мы рассмотрим все тонкости и интересные части Kotlin, но вы можете получить головной убор, если хотите, перейдя на сайт [Try Kotlin](https://try.kotlinlang.org/) и пройдя там упражнения.

## Документация

Одна из самых больших вещей в Kotlin - это всеобъемлющая и хорошо структурированная документация. Даже если вы новичок в программировании, вы найдете себя дома с документами. Они делают довольно изумительную работу, чтобы все это было хорошо структурировано. Вы можете проверить официальную документацию по [этой ссылке](https://kotlinlang.org/docs/reference/) .