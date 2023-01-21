let questions = [
    { question: "What is a dog", answer: "Dog is a animal with 4 legs", imageLink: "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o=" },
    { question: "What is a cat", answer: "Cat is a small domesticated animal with fur", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcztQTotg1TD5G_1ysJQ9EuTVE83ZOWcgPoMA25UKOzQ&s" },
    { question: "What is a lion", answer: "Lion is a large wild cat with a mane", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl51fDOxbgvR81G1aqBdZEr0oEIMPd-sui1g&usqp=CAU" },
    { question: "What is a bear", answer: "Bear is a large mammal that eats mostly fish and insects", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCRH68zuhvSu3S6zCqncgyGSXQRjzZOqdLdhcaEMIeFFpHZEE3hHenJ1klo53Bio3o-8&usqp=CAU" },
    { question: "What is a penguin", answer: "Penguin is a flightless bird that lives in cold climates", imageLink: "https://images.unsplash.com/photo-1598257733238-97cf162c5ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" },
    { question: "What is a snake", answer: "Snake is a long and legless reptile that can be venomous", imageLink: "https://media.istockphoto.com/id/486924860/photo/green-anaconda-snake-profile.jpg?s=612x612&w=0&k=20&c=2hGmFUWojeKXjTshceQSyktHc5ncz2jV5oZknzP4KaM=" }
]

let searchButton = document.getElementById("searchButton")
let output = document.getElementById("output")
let input = document.getElementById("token_input")
let speechBtn = document.getElementById("token_btn")
// let inputValue = document.getElementById("token_input").value

searchButton.addEventListener("click", function () {
    let searchBarValue = document.getElementById("searchBar").value
    let found = false
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].question.toLowerCase() === searchBarValue.toLowerCase()) {
            found = true
            output.innerHTML = `
            <p>${questions[i].answer}</p>
            <img src=${questions[i].imageLink}>
            `
                speechBtn.addEventListener("click",function speech(){
                        let speech = new SpeechSynthesisUtterance();
                            speech.text = questions[i].answer;
                            speech.rate = 1;
                            speech.pitch = 1;
                            speech.volume = 1;
                            speechSynthesis.speak(speech);
                })
                break;
                
                
            }
    }
    if (!found) {
        output.innerHTML = `<p>No matching question found</p>`
    } else {
        input.style.display = "inline-block";
        speechBtn.style.display = "inline-block";
        
    }
})