import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js';

// UI Logic

const form = document.getElementById('exchange-form');
const resultDiv = document.getElementById('results');
const errorDiv= document.getElementById('error');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const currency = document.getElementById('currency').value;

  try {
    const result = await CurrencyService.convertCurrency(amount, currency);
    showResult(`${result.amount} USD is approximately ${result.convertedAmount} ${result.targetCurrency}`);
  } catch (error) {
    if (error.message === 'An error occured while processing your request.') {
      showError(error.message);
    } else {
      showError('Selected Currency is not supported.');
    }
  }
});

function showResult(message) {
  errorDiv.textContent = '';
  resultDiv.textContent = message;
}

function showError(message) {
  resultDiv.textContent = '';
  errorDiv.textContent = message;
}

