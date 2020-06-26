/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This sample is part of the SDK for JavaScript Developer Guide (scheduled for release September 2020) topic
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/sqs-examples-using-queues.html.

Purpose:
sqs_listqueues.js demonstrates how to retrieve a list of Amazon SQS queues for an AWS account.

Inputs:
- REGION (into command line below)

Running the code:
node sqs_listqueues.js REGION
*/
// snippet-start:[sqs.JavaScript.v3.queues.listQueues]
// Import required AWS SDK clients and commands for Node.js
const {SQS, ListQueuesCommand} = require("@aws-sdk/client-sqs");
// Set the AWS Region
const region = process.argv[2];
// Create SQS service object
const sqs = new SQS(region);

async function run() {
    try {
        const data = await sqs.send(new ListQueuesCommand({}));
        console.log("Subscription ARN is " + data.SubscriptionArn);
    } catch (err) {
        console.error(err, err.stack);
    }
};
run();
// snippet-end:[sqs.JavaScript.v3.queues.listQueues]
exports.run = run; //for unit tests only
