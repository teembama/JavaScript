welcome = "Welcome to Therese's (x,y) component calculator!"
console.log(welcome)
export const genericFunction = (m, c, ...x) => {
    let coordinates = x.map((x) => {
    return {'x': x, 'y' : (m*x) + c};
    })
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates){
    let xy = `(${coordinate.x},${coordinate.y})`
    output+=xy;
    }
    
    return output;
   } 