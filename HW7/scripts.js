// scripts.js
// This script uses ES6 syntax
// list of characters
let characters = [
    {name:"Albus Dumbledore", role:"staff", house:"Gryffindor", gender:"m", alignment:"good"},    
    {name:"Nymphadora Tonks", role:"", house:"Hufflepuff", gender:"f", alignment:"good"},    
    {name:"Ron Weasley", role:"student", house:"Gryffindor", gender:"m", alignment:"good"},    
    {name:"Ginny Weasley", role:"student", house:"Gryffindor", gender:"f", alignment:"good"},    
    {name:"Hermione Granger", role:"student", house:"Gryffindor", gender:"f", alignment:"good"},    
    {name:"Mad-eye Moody", role:"staff", house:"", gender:"m", alignment:"good"},    
    {name:"Prof McGonagall", role:"staff", house:"Gryffindor", gender:"f", alignment:"good"},    
    {name:"Harry Potter", role:"student", house:"Gryffindor", gender:"m", alignment:"good"},    
    {name:"Draco Malfoy", role:"student", house:"Slytherin", gender:"m", alignment:"evil"},    
    {name:"Hagrid", role:"staff", house:"Gryffindor", gender:"m", alignment:"good"},    
    {name:"Luna Lovegood", role:"student", house:"Ravenclaw", gender:"f", alignment:"good"},    
    {name:"Voldemort", role:"", house:"Slytherin", gender:"m", alignment:"evil"},    
    {name:"Bellatrix Lestrange", role:"", house:"Slytherin", gender:"f", alignment:"evil"},           
    {name:"Severus Snape", role:"staff", house:"Slytherin", gender:"m", alignment:"?"}
];

// Wait for the document to be fully loaded
$(document).ready(function() {
    // Get unique house names from the character list
    const houses = [...new Set(characters.map(c => c.house))]; 
    houses.forEach(house => {
        // Add a button for each house
        $('#buttons').append(`<button class="house-btn" data-house="${house}">${house || "No House"}</button>`);
    });
    // Display all characters in the table initially
    updateTable(characters);
    
    // Add a click event listener to each house button
    $('.house-btn').click(function() {
        // Get the house name from the button's data attribute
        const selectedHouse = $(this).data('house');
        // Filter characters by the selected house
        const filteredCharacters = characters.filter(c => c.house === selectedHouse);
        // Update the table with the filtered characters
        updateTable(filteredCharacters);
    });
    
    // Add a click event listener to the reset button
    $('#reset').click(function() {
        // Reset the table to show all characters
        updateTable(characters);
    });
    
    // Function to update the table with a list of characters
    function updateTable(characters) {
        // Clear the current table body
        $('tbody').empty();
        characters.forEach((character, index) => {
            // Add a new row for each character
            $('tbody').append(`
                <tr>
                    <td>${character.name}</td>
                    <td>${character.role}</td>
                    <td>${character.house || "No House"}</td>
                    <td>${character.gender}</td>
                    <td>${character.alignment}</td>
                </tr>
            `);
        });
    }
});
