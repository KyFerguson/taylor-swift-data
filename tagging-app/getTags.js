const tagListAPI = "http://localhost:8080/tagList";
const displayObjects = document.querySelector('#display-data');

const getData = async () => {
    const res = await fetch(tagListAPI);
    const data = await res.json();
    console.log(data);
    return data;
}

const displayTags = async () => {
    const payload = await getData();
    console.log(payload);

    // Clear existing content
    displayObjects.innerHTML = '';

    // Create a title label for the tag list
    const titleLabel = document.createElement('div');
    titleLabel.className = 'titleLabel';
    titleLabel.textContent = 'Tag List';
    displayObjects.appendChild(titleLabel);

    payload.forEach((object) => {
        console.log(object);
        const {TagID, TagName} = object;

        // Create checkbox for each tag
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `tag-${TagID}`;
        checkbox.value = TagID;
        checkbox.className = 'tagCheckbox';

        // Create label for each checkbox
        const label = document.createElement('label');
        label.htmlFor = `tag-${TagID}`;
        label.textContent = TagName;
        label.className = 'tagNameLabel';

        // Append checkbox and label to the display element
        displayObjects.appendChild(checkbox);
        displayObjects.appendChild(label);
    });
}

displayTags();