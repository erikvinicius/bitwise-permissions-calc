const content = document.querySelector(".permissions");
const flagInput = document.querySelector(".flag-input input");
const flagInputButton = document.querySelector(".flag-input button");

const disableAllCheckboxes = () => {
  const checkboxes = document.querySelectorAll(".permissions label input");

  checkboxes.forEach((item) => {
    item.checked = false;
    item.setAttribute("disabled", "true");
  });
};

const enableAllCheckboxes = () => {
  const checkboxes = document.querySelectorAll(".permissions label input");

  checkboxes.forEach((item) => {
    item.removeAttribute("disabled");
  });
};

const permissions = getPermissions();

for (let i = 0; i < permissions.length; i++) {
  const permission = permissions[i];

  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const span = document.createElement("span");

  label.classList.add("checkboxLabel");

  span.innerText = permission.title;

  checkBox.setAttribute("type", "checkbox");

  label.append(checkBox);
  label.append(span);

  content.append(label);

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      if (permission.flag == PermissionsEnum.ADMINISTRATOR) {
        disableAllCheckboxes();

        this.checked = true;

        this.removeAttribute("disabled");

        flagInput.value = permission.flag;
        return;
      }

      flagInput.value |= permission.flag;
    } else {
      if (permission.flag == PermissionsEnum.ADMINISTRATOR) {
        enableAllCheckboxes();
        flagInput.value = 0;
        return;
      }

      flagInput.value &= ~permission.flag;
    }
  });
}

flagInputButton.addEventListener("click", () => {
  flagInputButton.classList.add("clicked");
  flagInputButton.innerText = "Copied";

  navigator.clipboard.writeText(flagInput.value);

  setTimeout(() => {
    flagInputButton.classList.remove("clicked");
    flagInputButton.innerText = "Copy";
  }, 2000);
});
