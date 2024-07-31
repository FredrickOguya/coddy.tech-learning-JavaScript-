/*
Create a function named preparePicnicBasket that receives currentItems and itemsToAdd as parameters.

The function helps prepare a picnic basket by adding itemsToAdd more items to the currentItems string, 
which represents items currently in the basket, separated by a comma and a space.

Use a loop to add new items in the format "item1", "item2", etc., incrementing by 1 each time.

Return a string with all items in the basket, separated by a comma and a space.

Parameters:

currentItems (string): Items currently in the basket, separated by a comma and a space.
itemsToAdd (number): Number of additional items to add.
Returns a string with all items in the basket, including the new ones, separated by a comma and a space.
*/
function preparePicnicBasket(currentItems, itemsToAdd) {
    // Write code here
    let number = 0;
    let items= ``
    items+=currentItems
    items+=`, `
    for(let i =0;i<itemsToAdd;i++){
        number+=1
        items += `item${number}, `
    }
    return items
}
//better answer
function preparePicnicBasket(currentItems, itemsToAdd) {
    for (let i = 1; i <= itemsToAdd; i++) {
      currentItems += ", item" + i;
    }
    return currentItems;
  }
  