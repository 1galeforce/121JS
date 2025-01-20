// Define variables
    const firstName = "Gale";
    const lastName = "Erie";
    const yearsOfStudy = 1.5;
    const goal = "work as a software developer";

    // Combine variables into a profile message
    const profileMessage = `My name is ${firstName} ${lastName}. I have been at college for ${yearsOfStudy} years and plan to ${goal} after completing my coursework.`;

    // Output the profile to the HTML element with id "profile"
    document.getElementById('profile').textContent = profileMessage;