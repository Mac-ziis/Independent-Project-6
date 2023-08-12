export default class CurrencyService {
  static async convertCurrency(amount, targetCurrency) {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const conversionRates = data.conversion_rates;
      if (!conversionRates[targetCurrency]) {
        throw new Error('An error occured while processing your request.');
      }

      const exchangeRate = conversionRates[targetCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);

      const currencyRates = {};
      for (const currency in conversionRates) {
        currencyRates[currency] = (amount * conversionRates[currency]).toFixed(2);
      }

      return {
        amount: amount,
        convertedAmount: convertedAmount,
        targetCurrency: targetCurrency,
        currencyRates: currencyRates
      };
    } catch (error) {
      throw new Error ('Selected Currency is not supported.');
    }
  }
}