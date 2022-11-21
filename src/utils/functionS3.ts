import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const ACCESS_KEY: string = process.env.REACT_APP_ACCESS_KEY!;
const SECRET_ACCESS_KEY: string = process.env.REACT_APP_SECRET_ACCESS_KEY!;

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