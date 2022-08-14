# Eleventy-Starter
This is an Eleventy course by Mr. Andy Bell- a freelance designer and front-end developer based in Brighton, London.

***

## Lesson 5 : Passthrough basics

In our project, we have an **src** folder and a ***dist*** folder. The ***src*** folder
contains source files, which are mainly code, but also static files like images.

We are going to want some of those static files in our ouptput folder and luckily, 
Elevently makes this pretty straightforward with *Passthrough file copy*.

In this lesson, we are going to make our images working by telling Elevently to copy
our image files over to our **dist** folder.


### Our current state
If we go to http://192.168.1.91:8080/, it should display the article element.
But, it does not shows the image. It is because our images never got copied over to
the ** dist ** folder, which is where **localhost:8080 ** serves the local site from.

### Adding passthought

On *eleventy-starter/.eleventy.js*, we add the line
```
// set directories to pass through the dist foler
config.addPassthroughCopy('./src/images/');
```

![Screenshot_20220815-025321_Chrome](https://user-images.githubusercontent.com/97843847/184555078-59061bf0-0df3-4ddc-9359-c6b66dd886d2.jpg)

***

## Lesson 6: Partials

A handy feature of Nunjucks is the ability to include partials in our templates. 
Partials are fragments of code that help to split our overall codebase up into smaller,
more focused pieces. This makes our projects easier to manage.

Using partials follow the DRY principle,
> Donot Repeat Yourself. With partials, we can write a snippet of reusable code
once and then use it again and again around the site. 




