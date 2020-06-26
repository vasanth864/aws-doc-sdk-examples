/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This sample is part of the SDK for JavaScript Developer Guide (scheduled for release September 2020) topic
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/sns-examples-subscribing-unubscribing-topics.html.

Purpose:
sns_subscribeapp.js demonstrates how to initiate a subscription to an Amazon SNS topic with delivery to a mobile app.

Inputs:
- REGION (into command line below)
- TOPIC_ARN (into command line below)
- MOBILE_ENDPOINT_ARN (into command line below)

Running the code:
node sns_subscribeapp.js  REGION TOPIC_ARN MOBILE_ENDPOINT_ARN
 */
// snippet-start:[sns.JavaScript.v3.subscriptions.subscribeApp]
// Import required AWS SDK clients and commands for Node.js
const {SNS, SubscribeCommand} = require("@aws-sdk/client-sns");
// Set the AWS Region
const region = process.argv[2];
// Create SNS service object
const sns = new SNS(region);
// Set the parameters
const params = {
  Protocol: "application", /* required */
  TopicArn: process.argv[3], /* required */
  Endpoint: process.argv[4]
};

async function run() {
  try {
    const data = await sns.send(new SubscribeCommand(params));
    console.log("Subscription ARN is " + data.SubscriptionArn);
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();
// snippet-end:[sns.JavaScript.v3.subscriptions.subscribeApp]
exports.run = run; //for unit tests only
