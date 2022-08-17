async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="option-title"]').value;
    const option_url = document.querySelector('input[name="option-url"]').value;
  
    const response = await fetch(`/api/options`, {
      method: 'REVIEW',
      body: JSON.stringify({
        title,
        option_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-option-form').addEventListener('submit', newFormHandler);