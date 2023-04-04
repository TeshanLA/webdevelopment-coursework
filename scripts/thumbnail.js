// Background font change
function fontchange1() {
    document.getElementById("text").style.fontSize = "16px";
}
function fontchange2() {
    document.getElementById("text").style.fontSize = "20px";
}
function fontchange3() {
    document.getElementById("text").style.fontSize = "25px";
}

// Background color change
function getSelectedValue(selectList) {
    return selectList[selectList.selectedIndex].value;
}
function changeBackColor() {
    let item = document.getElementById("backgroundColor")
    let text = item.options[item.selectedIndex].value;
    if (text === "white") {
        document.body.style.backgroundColor = "white";
    }
    else if (text === "#C9COBB") {
        document.body.style.backgroundColor = "Silver";
    }
    else if (text === "#91affe") {
        document.body.style.backgroundColor = "lightblue";
    }
    else if (text === "#7DCEA0") {
        document.body.style.backgroundColor = "#7DCEA0";
    }
}

// Images description
const change = src => {
    document.getElementById('main').src = src
}
function text1() {
    var textOne = "Baseball is a sport played between two teams of nine players each. The game is played with a ball and a bat, and the objective is for the batting team to hit the ball and score runs by running around a series of four bases on a diamond-shaped field. The pitching team attempts to prevent the batting team from scoring by pitching the ball in a way that makes it difficult to hit, and by fielding the ball and making plays to get the batters out. The game is divided into nine innings, with each team taking turns to bat and field. Baseball is a popular sport in many countries, especially in the United States, Japan, and Latin America. It is often referred to as America's national pastime.";
    document.getElementById('text').innerHTML = textOne;
}
function text2() {
    var textTwo = "Cricket is a sport played between two teams of eleven players each. The game is played with a ball and a bat, and the objective is for the batting team to score runs by hitting the ball and running back and forth between two sets of wickets, while the fielding team attempts to prevent the batting team from scoring by bowling the ball in a way that makes it difficult to hit, and by fielding the ball and making plays to get the batters out. The game is divided into innings, with each team taking turns to bat and field. Cricket is a popular sport in many countries, especially in England, Australia, India, Pakistan, South Africa, and the West Indies. It is known for its long matches that can last several days, as well as its complex rules and strategies.";
    document.getElementById('text').innerHTML = textTwo;
}
function text3() {
    var textThree = "Football, also known as soccer in some parts of the world, is a sport played between two teams of eleven players each. The game is played with a ball and the objective is to score goals by kicking the ball into the opposing team's net. The team with the most goals at the end of the game wins. The players use their feet, legs, and heads to control and move the ball around the field, and may also use other parts of their body except their arms and hands. The game is played in two halves, each lasting 45 minutes, with a break in between. Football is the most popular sport in the world and is played in almost every country. It is known for its fast pace, physicality, and the passion it inspires among fans.";
    document.getElementById('text').innerHTML = textThree;
}
function text4() {
    var textFour = "Badminton is a sport played between two players (singles) or two pairs (doubles) using rackets to hit a shuttlecock, also known as a birdie or shuttle, back and forth across a net. The objective of the game is to hit the shuttlecock over the net and land it in the opponent's court, with the aim of making it difficult for the opponent to return the shot. Points are scored when the shuttlecock lands on the opponent's court or when the opponent commits a fault, such as hitting the shuttlecock out of bounds or into the net. The game is played in sets, with the first player or pair to win two sets declared the winner. Badminton is a popular sport worldwide, known for its speed, agility, and precision.";
    document.getElementById('text').innerHTML = textFour;
}
function text5() {
    var textFive = "Basketball is a sport played between two teams of five players each. The objective of the game is to score points by shooting a ball through a hoop, which is mounted 10 feet high on a backboard at each end of the court. Players move the ball by dribbling it with their hands and passing it to their teammates, with the aim of outscoring the opposing team. The game is divided into four quarters, each lasting 12 minutes at the professional level, with a break in between. Basketball is known for its fast pace, high-scoring games, and physicality, with players using their bodies to gain position and contest shots. It is a popular sport in many countries, especially in the United States, where it is one of the most widely played and watched sports.";
    document.getElementById('text').innerHTML = textFive;
}
function text6() {
    var textSix = "Hockey is a sport played on ice or on a field, between two teams of players. The objective of the game is to score goals by hitting a puck (in ice hockey) or a ball (in field hockey) into the opposing team's net using a stick. Players skate or run around the rink or field, using their stick to control and move the puck or ball, with the aim of outscoring the opposing team. The game is divided into three periods, each lasting 20 minutes in professional ice hockey and 35-40 minutes in field hockey, with a break in between. Hockey is known for its speed, physicality, and intensity, with players using their bodies to gain position and protect the puck or ball. It is a popular sport in many countries, especially in Canada, the United States, and European countries like Sweden, Finland, and Russia.";
    document.getElementById('text').innerHTML = textSix;
}
function text7() {
    var textSeven = "Golf is a sport played on a large outdoor course consisting of 18 holes. The objective of the game is to hit a small ball with a club into a series of holes in as few strokes as possible. The course is designed with various obstacles, such as sand traps, water hazards, and trees, that challenge the player's skill and strategy. Players use different clubs to hit the ball, with each club designed for a specific type of shot. The game is played individually or in teams, with the player or team with the lowest score at the end of the round declared the winner. Golf is known for its precision, concentration, and patience, and is a popular sport worldwide, especially in countries like the United States, United Kingdom, and Australia.";
    document.getElementById('text').innerHTML = textSeven;
}
function text8() {
    var textEignht = "Netball is a sport played between two teams of seven players each. The objective of the game is to score goals by shooting a ball into a hoop at each end of the court. Players are assigned specific positions on the court, and can only move into certain areas depending on their position. The ball must be passed from player to player, with the aim of outmaneuvering the opposing team's defense and scoring a goal. Players cannot run with the ball or dribble it, and must pass or shoot within three seconds of catching the ball. The game is divided into four quarters, each lasting 15 minutes, with a break in between. Netball is known for its fast pace, agility, and teamwork, and is a popular sport in many countries, especially in Australia, New Zealand, and the United Kingdom.";
    document.getElementById('text').innerHTML = textNine;
}
function text9() {
    var textNine = "Volleyball is a sport played between two teams of six players each, on a court divided by a net. The objective of the game is to score points by hitting a ball over the net and into the opposing team's court, with the aim of making it difficult for the opposing team to return the ball. The ball can be hit with any part of the body, but players typically use their hands or arms to set up and spike the ball. Players rotate positions on the court after each point, ensuring that all players have a chance to play each position. The game is divided into sets, with the first team to win three sets declared the winner. Volleyball is known for its fast-paced, high-energy games, and is a popular sport worldwide, especially in countries like Brazil, the United States, and Russia.";
    document.getElementById('text').innerHTML = textSix;
}
function text10() {
    var textTen = "Swimming is a sport that involves moving through water using various strokes and techniques. Competitive swimming typically involves racing against other swimmers over a set distance, with the aim of being the fastest to complete the race. There are four primary strokes used in competitive swimming: freestyle (also known as front crawl), backstroke, breaststroke, and butterfly. Swimmers may also compete in individual medley events, which involve all four strokes in a specific order. Swimming can also be used as a form of exercise, with many people using it for fitness and health benefits. Swimming is known for its low impact on the joints and ability to provide a full-body workout, making it a popular form of exercise for people of all ages and abilities.";
    document.getElementById('text').innerHTML = textTen;
}

// Colour picker
function generateColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector(".color").style.backgroundColor = "#" + randomColor;
}

function changeColor() {
    var selectedColor = document.querySelector(".color-picker input").value;
    document.body.style.backgroundColor = selectedColor;
    document.querySelector(".color").style.backgroundColor = selectedColor;
}