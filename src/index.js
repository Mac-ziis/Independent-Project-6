import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js';

// Business Logic

const form = document.getElementById('exchange-form');
const resultDiv = document.getElementById('result');
const errorDiv= document.getElementById('error');

form.addEventListener('submit', async, (event) => {
  event.preventDefault();
})

