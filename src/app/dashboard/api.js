import axios from 'axios';

var STRIPE_BACKEND_URL = 'http://localhost:4000'

export const getAllStripeCustomers = (customersArr) => {
  return getCustomers().then(function(result){
    return result
  })
}

export const getAllStripeCharges = (customersArr) => {
  return getCharges().then(function(result){
    return result
  })
}

export const getStripeCustomerInfo = (customerId) => {
  return fetchCustomerById(customerId).then(function(result){
    return result
  })
}

export const getStripeBalance = () => {
  return fetchBalance().then(function(result){
    return result
  })
}

var getCharges = (limit, arr) => {
    if (!arr) arr=[];
    if(!limit) limit=null
    return fetchCharges(limit).then(function(results) {
         if (!results.data.has_more){
            arr = arr.concat(results.data.data)
            return arr;
         }else{
             return getCharges(results.data.data[results.data.data.length-1].id, arr.concat(results.data.data));
           }
    });
}

var fetchCharges = (starting_after) => {
  let uri = STRIPE_BACKEND_URL + '/stripe/charges';
  if(starting_after)
    uri+="?starting_after="+starting_after

  return axios.get(uri).then((response) => {
    return response
  })
}


var getCustomers = (limit, arr) => {
    if (!arr) arr=[];
    if(!limit) limit=null
    return fetchCustomers(limit).then(function(results) {
         if (!results.data.has_more){
            arr = arr.concat(results.data.data)
            return arr;
         }else{
             return getCustomers(results.data.data[results.data.data.length-1].id, arr.concat(results.data.data));
           }
    });
}

var fetchCustomers = (starting_after) => {
  let uri = STRIPE_BACKEND_URL + '/stripe/customers';
  if(starting_after)
    uri+="?starting_after="+starting_after

  return axios.get(uri).then((response) => {
    return response
  })
}

var fetchCustomerById = (customerId) => {
  let uri = STRIPE_BACKEND_URL + '/stripe/customers/' + customerId;
  return axios.get(uri).then((response) => {
    return response
  })
}

var fetchBalance = () => {
  let uri = STRIPE_BACKEND_URL + '/stripe/balance';

  return axios.get(uri).then((response) => {
    return response
  })
}
