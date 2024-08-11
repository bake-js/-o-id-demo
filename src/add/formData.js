function formData(event) {
  return Object.fromEntries(new FormData(event.target, event.submitter));
}

export default formData;
