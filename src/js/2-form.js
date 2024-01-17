const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
  
const storageForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (storageForm) {
    form.elements.email.value = storageForm.email || "";
    form.elements.message.value = storageForm.message || "";
};

  form.addEventListener("input", () => {
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.elements.email.value === '' || form.elements.message.value === ''){
    console.log('Please fill in both email and message fields');
    return;
  }
    console.log("Data submit:", JSON.parse(localStorage.getItem(STORAGE_KEY)));
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  });

