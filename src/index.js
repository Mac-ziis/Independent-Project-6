import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js';

// Business Logic

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
    showError(error.message);
  }
});

function showResult(message) {
  errorDiv.textContent = '';
  resultDiv.textContent = message;
}

function showError(message) {
  errorDiv.textContent = '';
  resultDiv.textContent = message;
}

