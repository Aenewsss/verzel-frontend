import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET || 'verzel';
const REGION = process.env.REACT_APP_REGION || "sa-east-1";
const ACCESS_KEY: string = process.env.REACT_APP_ACCESS_KEY! || "AKIA2WI5EVDLQFHU3YBP";
const SECRET_ACCESS_KEY: string = process.env.REACT_APP_SECRET_ACCESS_KEY! || "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";

const bucket = new S3Client(
    {
        credentials: {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY,
        },
        region: REGION,
    }
);

export async function UploadImageToS3(file: File) {
    let location = '';

    const params = {
        Bucket: S3_BUCKET,
        Key: `cars/` + file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: file.type
    };

    try {
        await bucket.send(new PutObjectCommand(params));
        console.log("SUCCESS");
        location = `https://verzel.s3.amazonaws.com/cars/${file.name}`;
    } catch (error) {
        return error?.toString()
    }

    return location
}