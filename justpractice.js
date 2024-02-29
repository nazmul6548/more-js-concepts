function convertMillisecondsToHoursAndMinutes(milliseconds) {
    // Convert milliseconds to seconds
    const seconds = Math.floor(milliseconds / 1000);
    
    // Calculate hours and remaining seconds
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    
    // Calculate minutes
    const minutes = Math.floor(remainingSeconds / 60);

    return { hours, minutes };
}

// Example usage:
const milliseconds = 3661000; // Example milliseconds
const { hours, minutes } = convertMillisecondsToHoursAndMinutes(milliseconds);
console.log(hours + " hours " + minutes + " minutes");
