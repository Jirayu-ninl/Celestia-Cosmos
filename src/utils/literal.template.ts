// Define the animate function
function animate(strings: TemplateStringsArray, ...values: any[]): string {
  // Process the template strings and values as needed
  let result = ''
  strings.forEach((str, i) => {
    result += str + (values[i] !== undefined ? values[i] : '')
  })

  // For demonstration, just return the combined string
  return result
}

// Use the animate function with a tagged template literal
const myAnimate = animate`
    animation: ${'bounce'} 2s infinite;
    transform: translateX(${100}px);
`

console.log(myAnimate) // Output: "animation: bounce 2s infinite; transform: translateX(100px);"
