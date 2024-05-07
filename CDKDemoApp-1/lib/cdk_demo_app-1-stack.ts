import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoApp1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const level1S3Bucket = new CfnBucket(this,"Level1Constructbucket",{
      versioningConfiguration: {
        status:"Enabled"
      }
    })

    const level2S3Bucket = new Bucket(this,"Level2Construct",{
      versioned:true
    })

    const queue = new Queue(this,"Level2QSQS",{
      queueName:"Level2SQS"
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDemoApp1Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
