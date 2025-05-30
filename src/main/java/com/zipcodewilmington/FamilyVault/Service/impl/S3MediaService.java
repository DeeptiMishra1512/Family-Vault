package com.zipcodewilmington.FamilyVault.Service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import java.net.URL;
import java.time.Duration;

import java.io.File;
import java.net.URL;
import java.util.Optional;

@Service
public class S3MediaService {

    private final S3Client s3Client;
    private final String bucketName;
    private final S3Presigner s3Presigner;

    public S3MediaService(@Value("${aws.region}") String region,
                          @Value("${aws.s3.bucketName}") String bucketName) {
        this.bucketName = bucketName;
        this.s3Client = S3Client.builder()
                .region(Region.of(region))
                .credentialsProvider(DefaultCredentialsProvider.create())
                .build();
        this.s3Presigner = S3Presigner.builder()
                .region(Region.of(region))
                .credentialsProvider(DefaultCredentialsProvider.create())
                .build();
    }

//    public URL generatePresignedUrl(String key, int expirationMinutes) {
//        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
//                .bucket(bucketName)
//                .key(key)
//                .build();
//
//        GetObjectPresignRequest presignRequest = GetObjectPresignRequest.builder()
//                .signatureDuration(Duration.ofMinutes(expirationMinutes))
//                .getObjectRequest(getObjectRequest)
//                .build();
//
//        PresignedGetObjectRequest presignedRequest = s3Presigner.presignGetObject(presignRequest);
//        return presignedRequest.url();
//    }


    /** Service to Upload media to the S3 bucket at the specified key */
    public boolean uploadMediaFile(File file, String s3Key) {
        try {
            PutObjectRequest putRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(s3Key)
                    .acl(ObjectCannedACL.PRIVATE) // ensure it's private
                    .build();

            s3Client.putObject(putRequest, RequestBody.fromFile(file));
            return true;

        } catch (S3Exception e) {
            System.err.println("Failed to upload file to S3: " + e.awsErrorDetails().errorMessage());
            return false;
        }
    }

    /** Service to fetch media file content from S3 bucket */
    public Optional<ResponseBytes<GetObjectResponse>> getMediaFile(String key) {
        try {
            GetObjectRequest getRequest = GetObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .build();

            ResponseBytes<GetObjectResponse> objectBytes = s3Client.getObjectAsBytes(getRequest);
            return Optional.of(objectBytes);

        } catch (S3Exception e) {
            System.err.println("Failed to fetch file from S3: " + e.awsErrorDetails().errorMessage());
            return Optional.empty();
        }
    }
}
