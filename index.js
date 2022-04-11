// Your code goes here
const tag = document.getElementById('text');
console.log(tag);

document.addEventListener('DOMContentLoaded', loaded);
console.log(tag);
function loaded (e) {
    tag.textContent = 'This is really cool!';
}