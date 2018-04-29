var albumBucketName = 'houseobjects';
var bucketRegion = 'us-east-2';
var IdentityPoolId = 'us-east-2:e7577f0e-c7c0-4bfa-af9b-a009015f80ec';

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: albumBucketName }
});

//No need for listing/or deleting an album
//No need for deleting a photo because the user can delete one from the UI before submission...
// //Deleting a photo
// function deletePhoto(albumName, photoKey) {
//     s3.deleteObject({ Key: photoKey }, function (err, data) {
//         if (err) {
//             return alert('There was an error deleting your photo: ', err.message);
//         }
//         alert('Successfully deleted photo.');
//         viewAlbum(albumName);
//     });
// }


//Creating an album within aws
function createAlbum(albumName) {
    albumName = albumName.trim();
    if (!albumName) {
        return alert('Album names must contain at least one non-space character.');
    }
    if (albumName.indexOf('/') !== -1) {
        return alert('Album names cannot contain slashes.');
    }
    var albumKey = encodeURIComponent(albumName) + '/';
    s3.headObject({ Key: albumKey }, function (err, data) {
        if (!err) {
            return alert('Album already exists.');
        }
        if (err.code !== 'NotFound') {
            return alert('There was an error creating your album: ' + err.message);
        }
        s3.putObject({ Key: albumKey }, function (err, data) {
            if (err) {
                return alert('There was an error creating your album: ' + err.message);
            }
            alert('Successfully created album.');
            viewAlbum(albumName);
        });
    });
}



//Creating an album within aws
function createAlbum(albumName) {
    albumName = albumName.trim();
    if (!albumName) {
        return alert('Album names must contain at least one non-space character.');
    }
    if (albumName.indexOf('/') !== -1) {
        return alert('Album names cannot contain slashes.');
    }
    var albumKey = encodeURIComponent(albumName) + '/';
    s3.headObject({ Key: albumKey }, function (err, data) {
        if (!err) {
            return alert('Album already exists.');
        }
        if (err.code !== 'NotFound') {
            return alert('There was an error creating your album: ' + err.message);
        }
        s3.putObject({ Key: albumKey }, function (err, data) {
            if (err) {
                return alert('There was an error creating your album: ' + err.message);
            }
            alert('Successfully created album.');
            viewAlbum(albumName);
        });
    });
}


//Adding photos to the album
function addPhoto(albumName) {
    var files = document.getElementById('photoupload').files;
    if (!files.length) {
        return alert('Please choose a file to upload first.');
    }
    var file = files[0];
    var fileName = file.name;
    var albumPhotosKey = encodeURIComponent(albumName) + '//';

    var photoKey = albumPhotosKey + fileName;
    s3.upload({
        Key: photoKey,
        Body: file,
        ACL: 'public-read'
    }, function (err, data) {
        if (err) {
            return alert('There was an error uploading your photo: ', err.message);
        }
        alert('Successfully uploaded photo.');
        viewAlbum(albumName);
    });
}