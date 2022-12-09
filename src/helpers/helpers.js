export function stringTagsToArr(str) {
  // lvl2
  return str
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length);

  // str === "html, css, node"
  // ['html', 'css', 'node']
  const tagArr = str.split(',');
  console.log('tagArr ===', tagArr);
  const arrWithNoWhiteSpace = tagArr.map((tag) => tag.trim());
  console.log('arrWithNoWhiteSpace ===', arrWithNoWhiteSpace);
  // ['0', 'blue', '', 'green', 'sun', '']
  const noEmptyTags = arrWithNoWhiteSpace.filter((tag) => tag.length);
  console.log('noEmptyTags ===', noEmptyTags);
  return noEmptyTags;
}

export function sendFetch(whatToSend) {
  const url = 'https://dummyjson.com/posts/add';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(whatToSend),
  })
    .then((res) => res.json())

    .catch(console.warn);
}
