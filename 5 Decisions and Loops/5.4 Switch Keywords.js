/*
Switch keywords

The break keyword
You might have noticed break; at the end of every case in the switch statements. We must add the break keyword to notify the compiler where the code for that specific case ends. If we don't add the break keyword all of the code below the case that matches will be executed.

 Let's look at the above example. If we didn't have break keywords the output would have been:

"Sixth day of the week"
"Last day of the week"
"That day doesn't exist!"
The default keyword
You can also see the default keyword after all the cases in the switch statement. The default case gets executed if all other cases don't match. We don't have to write default at the end. Just keep in mind, if it's not at the end, we have to write break; after the code in the default case. Only the last case can be left without break.

Combining cases
Let's say you want to execute the same code in two or more cases. You could do it by repeating the code for each case, but we already learned that we should avoid repeating code. Here is what you can do instead:

const day = 'Tuesday';

switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Waiting for the weekend');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('IT\'S THE WEEKEND!');
        break;
    default:
        console.log('That day doesn\'t exist');
}
Tips
You do not have to write a default case in a switch statement.

If multiple cases match, the first case is selected to be executed.


*/