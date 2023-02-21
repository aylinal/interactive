  const paragraph = document.getElementById('1ci');
  const words = paragraph.innerHTML.split(' ');

  // Helper function to group the words into random groups
  const groupWords = () => {
    const groupSizes = [100, 101, 102];
    const numGroups = groupSizes.length;
    const groups = [];

    for (let i = 0; i < numGroups; i++) {
      const group = [];

      while (group.length < groupSizes[i]) {
        const index = Math.floor(Math.random() * words.length);
        if (!group.includes(index)) {
          group.push(index);
        }
      }

      groups.push(group);
    }

    return groups;
  };

  let lastGroupColors = ['#5D4B87', '#F84834', '#F84834'];

  setInterval(() => {
    let groupColors = lastGroupColors.slice(); // Make a copy of the previous colors
    const firstColorIndex = Math.floor(Math.random() * 2);
    const secondColorIndex = firstColorIndex === 0 ? 1 : 0;

    groupColors[firstColorIndex] = '#F84834';
    groupColors[2] = '#5D4B87';

    const groups = groupWords();
    const newWords = words.map((word, index) => {
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].includes(index)) {
          return `<span style="color: ${groupColors[i]}">${word}</span>`;
        }
      }
      return word;
    });

    paragraph.innerHTML = newWords.join(' ');

    lastGroupColors = groupColors;
  }, 1000);
