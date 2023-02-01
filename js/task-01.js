const elem = document.querySelector('#categories')
const liList = elem.children
console.log(`Number of categories: ${liList.length}`)

for (let item of liList) {
    const content = item.querySelector('h2')
    console.log(`Category: ${content.textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
}