# Phase-1-Benchmarks
3, 2, 1, Contacts
Skills

Can use JavaScript's Array#sort
Can iterate through an Array
Exercise

In this benchmark module, you will be writing functions to load a list of contacts, and print them out in the console. A file with some scaffolding has already been provided for you.

Complete the functions provided, such that all the specs are met.

Specs

Contacts printed in the console must be sorted by first and last name
functions addContact, addContacts and printContacts have been implemented
Executing the file should print the following:

$ node contacts.js
Loading contact data...
...Finished loading contact data.

All Contacts:
|----------------------+--------------------------------|
| Full Name            | Email Address                  |
|----------------------+--------------------------------|
| Ambrose Scullard     | ascullard6@timesonline.co.uk   |
| Charil Clegg         | cclegge@weibo.com              |
| Conroy Honsch        | chonsch3@sohu.com              |
| Devon Bocking        | dbockingc@comcast.net          |
| Didi Grose           | dgroseh@google.com.hk          |
| Engracia Folger      | efolger2@epa.gov               |
| Karita Bough         | kbough9@angelfire.com          |
| Marguerite Lafayette | mlafayettea@bravesites.com     |
| Mateo Da Costa       | mdacosta5@about.com            |
| Mercy Browncey       | mbrownceyg@yelp.com            |
| Nessi Bywaters       | nbywatersf@shop-pro.jp         |
| Niccolo Spruce       | nsprucei@wordpress.com         |
| Northrop Bauchop     | nbauchopb@pagesperso-orange.fr |
| Pier Waine           | pwaine8@unc.edu                |
| Shaylah Fairney      | sfairney7@stumbleupon.com      |
| Tanny Vibert         | tvibert0@illinois.edu          |
| Tova Myall           | tmyall1@instagram.com          |
| Virgina Cankett      | vcankett4@washington.edu       |
| Willdon Hedley       | whedleyd@purevolume.com        |
| Winston Hixley       | whixleyj@homestead.com         |
|----------------------+--------------------------------|


Contacts With Testing
Exercise

This benchmark builds on the 3-2-1-Contacts benchmark that you may have completed earlier. In this benchmark you will be adding some additional functionality and tests to the code you have written earlier

Specs

addContact function should check if the firstName, lastName & email addresses are strings
if either of those arguments are NOT strings, the function should throw an error
addContacts function should catch errors thrown by addContact function, and continue processing the remaining contacts.
The function should maintain the list of contacts that failed to be loaded, and should print a warning to the console about the failed imports.
Test addContact and addContacts using console.assert.
Modify the file so that all the specs are met.

Executing the file should print the following to the console:

$ node contacts-with-testing.js

|----------------------+--------------------------------|
| Full Name            | Email Address                  |
|----------------------+--------------------------------|
| Ambrose Scullard     | ascullard6@timesonline.co.uk   |
| Charil Clegg         | cclegge@weibo.com              |
| Conroy Honsch        | chonsch3@sohu.com              |
| Devon Bocking        | dbockingc@comcast.net          |
| Didi Grose           | dgroseh@google.com.hk          |
| Engracia Folger      | efolger2@epa.gov               |
| Karita Bough         | kbough9@angelfire.com          |
| Marguerite Lafayette | mlafayettea@bravesites.com     |
| Mateo Da Costa       | mdacosta5@about.com            |
| Mercy Browncey       | mbrownceyg@yelp.com            |
| Nessi Bywaters       | nbywatersf@shop-pro.jp         |
| Niccolo Spruce       | nsprucei@wordpress.com         |
| Northrop Bauchop     | nbauchopb@pagesperso-orange.fr |
| Pier Waine           | pwaine8@unc.edu                |
| Shaylah Fairney      | sfairney7@stumbleupon.com      |
| Tanny Vibert         | tvibert0@illinois.edu          |
| Winston Hixley       | whixleyj@homestead.com         |
|----------------------+--------------------------------|

Could not import 3 contacts.
First: 55 , Last: Myall, Email: tmyall1@instagram.com
First: Virgina , Last: Cankett , Email: true
First: Willdon , Last: 22, Email: whedleyd@purevolume.com


Command Line Todo List
Skills

Can write a Node script that parses complex command line arguments
Can write a complex Node script with modular organization of the code
Can use fs.readFileSync to read from a file in Node
Can use fs.writeFileSync to write to a file in Node
Can write unit tests with mocha in Node
Description

Design a todo-list which manages your tasks from the command line. It should maintain a task list, allowing you to add, list and complete your tasks.

The tasks should be saved to a file called tasks.json. Use the command fs.readFileSync to save the tasks to the file. Read the documentation here

The following commands should be supported by your node script:

command	description	example usage
add	adds the specified task	node task.js add Finish reading Flatland
list	lists the incomplete tasks	node task.js list
done	marks the task with id equal to <task-id> complete	node task.js done <task-id>
Specs:

Tasks are persisted to a json file using fs.readFileSync
Node script task.js is used to manage the tasks. (See example usage below)
list command has been implemented in a file located at commands/list.js
add command has been implemented in a file located at commands/add.js
done command has been implemented in a file located at commands/done.js
Add tests using Mocha and Chai for all functions
User receives an error message if they enter an invalid command
Example Usage

To add tasks:

$ node task.js add "Buy milk"
Created task 1.

$ node task.js add "Buy eggs"
Created task 2.

$ node task.js add "Bake cake"
Created task 3.

$ node task.js add "Put groceries in the fridge"
Created task 4.
To view incomplete tasks:

$ node task.js list

ID Description
-- -----------
1  Buy milk
2  Buy eggs
3  Bake cake
4  Put groceries in the fridge

4 tasks.
To complete a task:

$ node task.js done 1
Completed the task 'Buy milk'

$ node task.js done 3
Completed the task 'Buy cake'

$ node task.js list

ID Description
-- -----------
2  Bake eggs
4  Put groceries in the fridge

2 tasks.
