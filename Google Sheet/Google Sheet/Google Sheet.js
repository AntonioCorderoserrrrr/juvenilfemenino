const scriptURL = 'https://script.google.com/macros/s/AKfycbywt75BRBlqVj-6BlgdNV24MvCp8puffNDmDCdgTJupvdc5jM_9nNpBYQvcxyG8XiT0PA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
const config = {
  API_KEY: 'AIzaSyBRtVIPhczyyNszrgsIRa2seA1_ua_NF9o',
  SPREADSHEET_ID: '1YUqcv_bFYKBhN1qdeDCR4_ABBvKmqqHve2vobLuoTe4'
};