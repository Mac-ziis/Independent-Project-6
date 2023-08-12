export default class CurrencyService {
  static async convertCurrency(amount, targetCurrency) {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      if (!data.rates[targetCurrency]) {
        throw new Error('Selected Currency is not supported.');
      }

      const exchangeRate = data.rates[targetCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      return {
        amount: amount,
        convertedAmount: convertedAmount,
        targetCurrency: targetCurrency
      };
    } catch (error) {
      throw new Error ('An error occured while processing you request.');
    }
  }
}