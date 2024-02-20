///create a task manager where user can add and remove and mark task as completed
//a) Add task to the task list
// b) Remove task from task list
// c) mark task as completed
// d)Sort task as completed
// e)display the number of incomplete task

let arr = []
const addToList = (item) => {
    return arr.push({ name: item, complete: false }) ///add element in array
}
// console.log(addToList(1)); 
addToList("Cleaning");
addToList("Washing")
addToList("Eating")
addToList("Bathing")
// console.log(arr);

const removeToList = (index) => {
    return arr.splice(index, 1) ///////remove first index in any array
}
// removeToList();
// console.log(arr);


const arrange = () => {
    return arr.sort((a, b) => a.name.localeCompare(b.name)) ///////arrange value by numerical or aphabetics BY DEFAULT
}
arrange();
// console.log(`this is the sorted items: ${arr.name}`);
console.log(arr);


const markComplete = (index) => {

    return arr[index].complete = true
}
markComplete(1);
console.log(arr);

const incomplete = () => {
    const result = arr.filter((item) => item.complete === false)
    return result.length
}
//    console.log(arr);