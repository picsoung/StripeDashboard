import { getAllStripeCustomers, getAllStripeCharges, getStripeCustomerInfo, getStripeBalance } from '../api';

// export const getBackground = ({ commit }, data) => {
//   return getBackgroundDetails().then((value) => {
//     return value;
//   });
// };

export const getAllCustomers = ({ commit }, data) => {
  return getAllStripeCustomers().then((value) => {
    return value;
  });
}

export const getAllCharges = ({ commit }, data) => {
  return getAllStripeCharges().then((value) => {
    return value;
  });
}

export const getStripeCustomerDetails = ({ commit }, data) => {
  return getStripeCustomerInfo(data).then((value) => {
    return value;
  });
}

export const getStripeBalanceDetails = ({ commit }, data ) => {
  return getStripeBalance().then((value) => {
    return value;
  });
}
