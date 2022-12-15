function removeChild(childId) {
    document.getElementById('div' + childId).remove;
}

let a = 0;

function addStd() {
    const pDiv = document.getElementById('leftSide');
    const newChild = document.createElement('div');
    newChild.id = 'div' + a;
    const stdName = document.getElementById('stdName').value;
    newChild.innerText = stdName;


    pDiv.append(newChild)

    const removeButton = document.createElement('button');
    removeButton.id = a;
    removeButton.innerText = 'x';
    removeButton.addEventListener('click', event => {
        document.getElementById('div' + event.target.id).remove();
        document.getElementById(event.target.id).remove();
    });

    pDiv.append(removeButton)

    a+=1;
}
let b = 1
function addGp() {
    const pDiv = document.getElementById('rightSide');
    const newChild = document.createElement('div');
    newChild.id = 'div' + b;
    // document.getElementById('newChild').style.color = 'red';
    newChild.innerText = 'Group ' + b;
    pDiv.append(newChild);

    b+=1;
}