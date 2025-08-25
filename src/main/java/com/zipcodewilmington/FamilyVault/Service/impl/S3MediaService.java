package com.zipcodewilmington.FamilyVault.Service.impl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import java.io.File;
import java.util.Optional;

@Service
public class S3MediaService {

    private static final Logger log = LoggerFactory.getLogger(S3MediaService.class);
    private final S3Client s3Client;
    private final String bucketName;


    public S3MediaService(@Value("${aws.region}") String region,
                          @Value("${aws.s3.bucketName}") String bucketName) {

        this.bucketName = bucketName;

        this.s3Client = S3Client.builder()
                .region(Region.of(region))
                .credentialsProvider(DefaultCredentialsProvider.create())
                .build();
    }


    /** Service to Upload media to the S3 bucket at the specified key */
    public boolean uploadMediaFile(File file, String s3Key) {
        try {
            PutObjectRequest putRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(s3Key)
                    .acl(ObjectCannedACL.PRIVATE) // Access Control List is set to private
                    .build();

            s3Client.putObject(putRequest, RequestBody.fromFile(file));
            return true;

        } catch (S3Exception e) {
            System.err.println("Failed to upload file to S3: " + e.awsErrorDetails().errorMessage());
            return false;
        }
    }

    /** Service to fetch media file content from S3 bucket */
    @Cacheable(value = "s3MediaCache", key = "#key")
    public Optional<ResponseBytes<GetObjectResponse>> getMediaFile(String key) {
        try {
            log.info("Inside S3 Service class");
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
