export const showUser = (user) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <p><strong>Name: </strong>${user.name}</p>
        <p><strong>Last Name: </strong>${user.lastName}</p>
        <p><strong>Job: </strong>${user.job}</p>
        <p><strong>Age: </strong>${user.age}</p>
    `;
    const body = document.querySelector('body');
    body.appendChild(div);

}
