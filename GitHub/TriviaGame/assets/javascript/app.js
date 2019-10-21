var intervalID;

function startTimer(duration, display) {
  
    var timer = duration;
    var minutes;
    var seconds;
    
    intervalID=setInterval(function () {
        console.log(intervalID);
       
        if (timer < 0) {
            console.log(intervalID);
            clearInterval(intervalID);
            console.log(timer);
            timer = duration;
            console.log(duration);
            alert("Sorry you lost");
        
           
        } else {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            console.log(timer);
        }

        timer--;
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
};



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is Superman's birth name?", "Kal-El", "Clark Kent", "Barry Allen", "A" ],
    [ "Which X-Men absorbs powers through skin contact?", "Beast", "Rogue", "Gambit", "B" ],
    [ "Who is Tim Drake?", "Captian America", "Hulk", "Robin", "C" ],
    [ "Who can control weather?", "Super Girl", "Storm", "Batman", "B" ],
    [ "Which superhero is nicknamed the Scarlett Speedster?", "Speedball", "The Flash", "The Thing", "B" ],
    [ "Who is the leader of theFantastic Four?", "Mr. Fantastic", "Wolverine", "Storm", "A" ],
    [ "What is Iron Man's real name?", "Scott Summers", "Tony Stark", "Oliver Queen", "B" ],
    [ "Cyclops is married to which X-Men?", "Kitty Pryde", "Storm", "Jean Grey", "C" ],
    [ "Which avenger is James Rhodes?", "Iron Man", "Falcon", "War Machine", "C" ],
    [ "Which Justice League member can talk to fish?", "Cyborg", "Martian Manhunter", "Aquaman", "C" ],
    [ "Who is Eddie Brock?", "Carnage", "Bishop", "Venom", "C" ],
    [ "Who is Peter Quill?", "Groot", "Gamora", "Star Lord", "C" ],
    [ "Which villain is nicknamed Puddin?", "Penguin", "Joker", "Harley Quinn", "B" ],
    [ "Who kills Loki?", "Doomsday", "Lex Luthor", "Thanos", "C" ],
    [ "Miles Morales superhero identity?", "Sinestro", "Spider-Man", "Deadshot", "B" ],
    [ "The Green Arrow's real identity?", "Wally West", "John Stewart", "Oliver Queen", "C" ],
    [ "Who is the Power Man?", "Jarvis Tetch", "Luke Cage", "Peter Parker", "B" ],
    [ "Who is Thor's father?", "Ultron", "Odin", "Killer Croc", "B" ],
    [ "Who is a member of The Fantastic Four?", "Human Torch", "Batman", "Hulk", "A" ],
    [ "Bruce Wayne's superhero name?", "Martian Manhunter", "Batman", "Thanos", "B" ],           
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return fales; 
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
   choices = document.getElementsByName("choices");
   for(var i=0; i<choices.length; i++){
       if(choices[i].checked){
           choice = choices[i].value;
       }
   }
   if(choice == questions[pos][4]){
       correct++;
   }
   pos++;
   renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
