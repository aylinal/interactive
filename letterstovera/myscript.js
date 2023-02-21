const paragraph = document.querySelector('p');
const words = paragraph.innerText.split(' ');
const numGroups = 9;
const groupSize = Math.ceil(words.length / numGroups);

const groups = [];
for (let i = 0; i < numGroups; i++) {
  groups.push(words.splice(0, groupSize));
}

let color1 = '#5D4B87';
let color2 = '#F84834';
let currentColor = color1;

function setColorForGroups(groups, color) {
  groups.forEach(group => {
    group.forEach(word => {
      paragraph.innerHTML = paragraph.innerHTML.replace(new RegExp(`\\b${word}\\b`, 'g'), `<span style="color: ${color}">${word}</span>`);
    });
  });
}

function switchColors() {
  const randomIndex = Math.floor(Math.random() * numGroups);
  const otherIndex = (randomIndex + Math.floor(Math.random() * (numGroups - 1)) + 1) % numGroups;
  if (currentColor === color1) {
    setColorForGroups(groups[randomIndex], color2);
    setColorForGroups(groups[otherIndex], color1);
    currentColor = color2;
  } else {
    setColorForGroups(groups[randomIndex], color1);
    setColorForGroups(groups[otherIndex], color2);
    currentColor = color1;
  }
}

switchColors();
setInterval(switchColors, 1000);
