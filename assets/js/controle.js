const bodyPage = document.getElementById("body-page")
const navbarPage = document.getElementById("navbar-page")
const btnDarkMode = document.getElementById("btn-dark-mode")
const iconDarkMode = document.getElementById("icon-dark-mode")
const tableEmployesList = document.getElementById("table-employes-list")

const labels = document.getElementsByTagName("label")
const formControls = document.getElementsByClassName("form-control")
const textErrors = document.getElementsByClassName("text-danger")

const tbodyUsersList = document.getElementById("users-list")

const darkMode = () => {

    bodyPage.classList.toggle("bg-dark")

    navbarPage.classList.toggle("navbar-light")
    navbarPage.classList.toggle("bg-light")

    navbarPage.classList.toggle("navbar-dark")
    navbarPage.classList.toggle("bg-dark")

    btnDarkMode.classList.toggle("btn-dark")
    btnDarkMode.classList.toggle("btn-light")

    iconDarkMode.classList.toggle("bi-moon-fill")
    iconDarkMode.classList.toggle("bi-brightness-high-fill")

    tableEmployesList.classList.toggle("table-dark")

    for (let i = 0; i < labels.length; i++)
        labels[i].classList.toggle("text-light")

}

const addUser = () => {

    let required = false

    for (let i = 0; i < formControls.length; i++) {

        if (formControls[i].value.length == 0) {
            textErrors[i].classList.remove("d-none")
            required = true
        }
        else {
            textErrors[i].classList.add("d-none")
        }

    }

    if (required == false) {
        let user = {
            firstname: formControls[0].value,
            lastname: formControls[1].value,
            department: formControls[2].value
        }

        tbodyUsersList.innerHTML += `
        <tr>
            <td>1</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.department}</td>
            <td>
                <button class="btn btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        `
    }

}
