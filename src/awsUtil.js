import AWS from 'aws-sdk';

const cognitoRegion = 'us-west-2';
const identityPoolId = 'us-west-2:da80eca2-b416-42ae-8ef6-2146787afe1b';
const bucketRegion = 'us-west-1';
const bucketName = 'rohan-pictures';

AWS.config.update({
    region: cognitoRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId,
    }),
});

export const authenticatePhotoBucket = new AWS.S3({
    region: bucketRegion,
    apiVersion: '2006-03-01',
    params: { Bucket: bucketName },
});

export const authenticateDynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

export const getBucketUrl = `http://photos.roventures.tv/`;
