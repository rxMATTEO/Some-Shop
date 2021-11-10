export default function normalizePrice(price){
  if(!price || price.length < 4) return price;
  let priceArray = price.toString().split('').reverse();
  for (let i = 0; i < priceArray.length; i+=4) {
    priceArray.splice(i, 0, " ");
  }
  return priceArray.reverse().join('');
}
