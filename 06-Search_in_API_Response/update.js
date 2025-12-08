// to update user information (name, email, username, phone)


function openUpdateForm(item, onSubmit) {
  
  const updateForm = document.createElement("div");
  updateForm.id = "updateForm";
  updateForm.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  
  const modal = document.createElement("div");
  modal.id = "update-modal";
  modal.style.cssText = `
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    font-family: Arial, sans-serif;
  `;

  // Step 3: Add title
  const title = document.createElement("h2");
  title.textContent = "Update User Information";
  title.style.cssText = `
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
    font-size: 20px;
  `;
  modal.appendChild(title);

  // Step 4: Create the form
  const form = document.createElement("form");
  form.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;

  // Create one input field with label
  function createInputField(labelText, fieldType, fieldName, fieldValue) {
    const container = document.createElement("div");
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 5px;
    `;

    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.cssText = `
      font-weight: bold;
      color: #555;
      font-size: 14px;
    `;

    const input = document.createElement("input");
    input.type = fieldType;
    input.name = fieldName;
    input.value = fieldValue;
    input.style.cssText = `
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      font-family: Arial, sans-serif;
    `;

    container.appendChild(label);
    container.appendChild(input);
    return { container, input };
  }

  // Step 5: Create input fields for each piece of data
  const nameField = createInputField("Name", "text", "name", item.name);
  const emailField = createInputField("Email", "email", "email", item.email);
  const usernameField = createInputField("Username", "text", "username", item.username);
  const phoneField = createInputField("Phone", "text", "phone", item.phone || "");

  // Add all fields to the form
  form.appendChild(nameField.container);
  form.appendChild(emailField.container);
  form.appendChild(usernameField.container);
  form.appendChild(phoneField.container);

  // Step 6: Create buttons container
  const buttonContainer = document.createElement("div");
  buttonContainer.style.cssText = `
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
  `;

  // Step 7: Create Save button
  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.textContent = "Save";
  saveBtn.style.cssText = `
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s;
  `;

  // Save button hover effect
  saveBtn.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#218838";
  });

  saveBtn.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#28a745";
  });

  // Step 8: Create Cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  cancelBtn.style.cssText = `
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s;
  `;

  // Cancel button hover effect
  cancelBtn.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#c82333";
  });

  cancelBtn.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#dc3545";
  });

  // Step 9: Handle cancel button - close the modal
  cancelBtn.addEventListener("click", function () {
    document.body.removeChild(updateForm);
  });

  saveBtn.addEventListener("click", function () {
    const updatedData = {
      id: item.id,
      name: nameField.input.value.trim(),
      email: emailField.input.value.trim(),
      username: usernameField.input.value.trim(),
      phone: phoneField.input.value.trim(),
    };

    // Simple validation - check if fields are filled
    if (!updatedData.name || !updatedData.email || !updatedData.username) {
      alert("Please fill in all required fields (Name, Email, Username).");
      return;
    }

    onSubmit(updatedData);

    document.body.removeChild(updateForm);
  });

  buttonContainer.appendChild(saveBtn);
  buttonContainer.appendChild(cancelBtn);

  form.appendChild(buttonContainer);

  modal.appendChild(form);

  updateForm.appendChild(modal);

  document.body.appendChild(updateForm);
} 