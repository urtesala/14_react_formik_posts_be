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
  const url = 'http://localhost:8001/posts';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(whatToSend),
  })
    .then((res) => res.json())
    .catch(console.warn);
}

export function getPosts() {
    const url = 'http://localhost:8001/posts';
    return fetch(url)
      .then((resp) => resp.json())
      .catch((err) => console.warn('we have a problem', err));
  }
  