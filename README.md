![header](readme/head.png)
## About
2NT is an interactive game app, inspired by Games Done Quick, that revolves around speed and collaboration between different users.

#### Table of contents
1. [Concept](#concept)
2. [Storyboard and Interactions](#storyboard-and-interactions) <br>
* [About page](#about-page)<br>
* [Play](#play)<br>
* [Leaderboard](#leaderboard)<br>
* [Interactions](#interactions)<br>
3. [Key Features](#key-features)
4. [Team](#team)

## Concept
![gdq](readme/event.jpg)
Games Done Quick is a series of charity video games marathons held twice a year. It features high level gamplay from speedrunners and has an attendance of average 2000 people. 2NT is inspired by and created for these events, the idea is to make the public run its own marathon during the breaks from the gameplays.
The concept of 2NT is easy, each user has to enter a room, the game will start when the room has reached the nember of 16 players in it. Then a stopwatch will start and each person just needs to touch one of the squares, once the grid is all complete the time will stop and the score will enter the leaderboard. 

![gif](readme/gdq.gif)

## Storyboard and Interactions
The app is divided in three main parts: about, play and leaderboard. 

#### About page
In this section the user can have a general idea of what is Games Done Quick and what this game is all about. 

#### Play
Here the user can play the game itself, the first page is an introduction to the game, giving the instructions of how it works. Clicking a button the player can enter the room he will be playing in and he has to wait for other players to join. 
When the number of players is reached, the first tap on one of the squares gets the time started and then all the players just have to tap to complete the game. For each players it's possible just one tap.
When the grid is complete the time will stop and the score will be added to the leaderboard.

#### Leaderboard
In this section the users can see the scores of all the different runs, every room has a name assigned randomly that helps players identify which score his theirs. 

#### Interactions
2NT is created for mobile devices, the user interacts with the game by tapping on the screen. 
Now we present some of the most interesting features of the code.
###### Counting people entering the rooms
This id divided in two steps, the first part is written in the index, where the paragraph of the counter itself it's created.
```
<body>

  <p id="toptext"> The run starts with 16 players<br>you are now</p>

  <p id="guests"> </p>

  <p id="timer" style="display: none"></p>

</body>
```
The second part of the command, the one that triggers the event, is created by calling a function and verify the number of people until they reach 16.
```
function handleCounter(data) {

  document.getElementById("guests").innerHTML = data.count;
  console.log('received:', data);
  //prova per verificare il numero di persone!!
  if (data.count == 16) {
    //console log prova!
    //console.log(roomColors[Math.floor(random(roomColors.length))] + " " + roomNames[Math.floor(random(roomNames.length))] + " : " + timer.innerHTML);
  }
  }
  ```
