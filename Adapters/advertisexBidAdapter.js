// Import necessary modules
import * as utils from '../src/utils.js'; // Import utility functions
import { registerBidder } from '../src/adapters/bidderFactory.js'; // Import function to register bidder

// Bidder code for AdvertiseX
const BIDDER_CODE = 'advertisex';

// Adapter version
const ADAPTER_VERSION = '1.0';

// Endpoint URL for fetching bid
const ENDPOINT_URL = 'http://localhost:8080/getBid';

// Define the spec object containing bidder implementation
const spec = {
    code: BIDDER_CODE, // Bidder code
    version: ADAPTER_VERSION, // Adapter version
    supportedMediaTypes: ['banner'], // Supported media types

    // Function to validate bid request
    isBidRequestValid: function(bid) {
        // Check if the bid has adUnitCode parameter
        return !!(bid.params.adUnitCode);
    },

    // Function to build bid requests
    buildRequests: function(bidRequests, bidderRequest) {
        // Map bid requests to request objects
        const requests = bidRequests.map(bid => {
            return {
                method: 'POST', // Request method
                url: ENDPOINT_URL, // Endpoint URL
                data: JSON.stringify({ // Request data
                    adUnitCode: bid.params.adUnitCode, // Ad unit code
                    sizes: bid.sizes, // Ad sizes
                    bidId: bid.bidId, // Bid ID
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        });

        return requests;
    },

    // Function to interpret bid response
    interpretResponse: function(serverResponse, request) {
        const bidResponses = [];
        const response = serverResponse.body; // Extract response body
        let requestData = request.data; // Extract request data

        // Parse request data if it's needed
        if (typeof requestData === 'string') {
            requestData = JSON.parse(requestData);
        }

        if (response) {
            // Construct bid response object
            const bidResponse = {
                requestId: requestData.bidId, // Set request ID from bid ID
                cpm: response.cpm, // Cost per mille (CPM)
                width: response.width, // Ad width
                height: response.height, // Ad height
                creativeId: response.creativeId, // Creative ID
                currency: 'USD', // Currency
                netRevenue: true, // Whether it's net revenue
                ttl: 300, // Time to live
                ad: response.ad, // Ad content
                adId: response.bidId || utils.generateUUID(), // Ad ID
                bidder: BIDDER_CODE, // Bidder code
            };

            bidResponses.push(bidResponse); // Push bid response to array
        } else {
            // If no response, handle the error (e.g., log error or throw exception)
            return { error: 'No response received from server' };
        }

        return bidResponses;
    }

};

registerBidder(spec); // Register the bidder with the spec