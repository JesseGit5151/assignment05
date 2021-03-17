window.addEventListener('load', () => {
    const $ = (id) => document.getElementById(id);
    let form = $('empForm')
    let empID = $('id')
    let fullName = $('name')
    let ext = $('ext')
    let email = $('email')
    let department = $('department')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(`ID: ${empID.value}`)
        console.log(`Name: ${fullName.value}`)
        console.log(`Extension: ${ext.value}`)
        console.log(`Email: ${email.value}`)
        console.log(`Department: ${department.value}`)
    });
});