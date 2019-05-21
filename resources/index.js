/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * @fileoverview This file supports the codelab for Google Pay: 
 * Build a Fast Checkout Experience on the Web with Google Pay, representing
 * a sample t-shirt store that suggests a new t-shirt on every load and uses
 * Google Pay as a means of payment.
 *
 * Note: This example uses minimal external resources (no jquery, react,
 * polymer, etc).
 */

/**
 * Google Pay API Configuration
 */
const allowedNetworks = ['VISA','MASTERCARD'];
const allowedAuthMethods = ['PAN_ONLY','CRYPTOGRAM_3DS'] ;

const baseCardPaymentMethod = {
  type: 'CARD',
  parameters: {
    allowedCardNetworks: allowedNetworks,
    allowedAuthMethods: allowedAuthMethods 
  }
};

const googlePayBaseConfiguration = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [baseCardPaymentMethod]
};

/**
 * Holds the Google Pay client used to call the different methods available
 * through the API.
 * @type {PaymentsClient}
 * @private
 */
let googlePayClient;

/**
 * Defines and handles the main operations related to the integration of
 * Google Pay. This function is executed when the Google Pay library script has
 * finished loading.
 */
function onGooglePayLoaded() {
  
  // Initialize the client and determine readiness to pay with Google Pay:
  // 1. Instantiate the client using the 'TEST' environment.
  // 2. Call the isReadyToPay method passing in the necessary configuration.
  googlePayClient = new google.payments.api.PaymentsClient({
    environment: 'TEST'
  });
}

/**
 * Handles the creation of the button to pay with Google Pay.
 * Once created, this button is appended to the DOM, under the element 
 * 'buy-now'.
 */
function createAndAddButton() {

  // TODO: Create Google Pay button andd add it to the DOM.

  // TODO: Add the button to the DOM
  // googlePayButton.setAttribute('id', 'google-pay-button');
  // domId('buy-now').appendChild(googlePayButton);
  
}

/**
 * Handles the click of the button to pay with Google Pay. Takes
 * care of defining the payment data request to be used in order to load
 * the payments methods available to the user.
 */
function onGooglePaymentsButtonClicked() {
  
  // TODO: Launch the payments sheet using the loadPaymentData method in the payments client:
  // 1. Update the card created before to include a tokenization spec and other parameters.
  // 2. Add information about the transaction.
  // 3. Add information about the merchant.
  // 4. Call loadPaymentData.

}

function sendPayloadToProcessor(googlePayPayload) {
  // Send a POST request to your processor with the payload
  // https://us-central1-devrel-payments.cloudfunctions.net/google-pay-server 
}


