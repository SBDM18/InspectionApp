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
    params: {
        Bucket: albumBucketName
    }
});

console.log('s3  ', s3);

s3.listObjects(s3.params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});

function listAlbums() {
    $('#dataDisplay').empty();
    $('#dataImg').empty();
    s3.listObjects({
        Delimiter: '/'
    }, function (err, data) {
        if (err) {
            return alert('There was an error listing your albums: ' + err.message);
        } else {
            var albums = data.CommonPrefixes.map(function (commonPrefix) {
                var prefix = commonPrefix.Prefix;
                var albumName = decodeURIComponent(prefix.replace('/', ''));
                return getHtml([
                    '<div class="myAlbum" >',
                    '<div onclick="viewAlbum(\'' + albumName + '\')"> <img src="./assets/images/AlbumIcon.png" style="height:46px;width:46px;"> </div>',
                    '<div id="albumName" onclick="viewAlbum(\'' + albumName + '\')">',
                    albumName.toUpperCase(),
                    '</div>',
                    // '<img onclick="viewAlbum(\'' + albumName + '\')" style="width:46px;height:46px;" src="./assets/images/SButton.png"/>',
                    // '<img onclick="deleteAlbum(\'' + albumName + '\')" style="width:46px;height:46px;" src="./assets/images/XButton.png"/>',
                    '</div>'
                ]);
            });

            //Search function beginning!!!
            var listofAlbums = data.CommonPrefixes.map(function (commonPrefix) {
                var prefix = commonPrefix.Prefix;
                var albumName = decodeURIComponent(prefix.replace('/', ''));
                return albumName;
            });

            console.log(listofAlbums);

            var message = albums.length ?
                getHtml(['<p>Click the Album Icon to view it.</p>'
                    /*'<p>Click on the &#x2613; to delete the album or...</p>'*/
                ]) :
                '<p>You do not have any albums. Please Create album.';
            var albumTemplate = [
                getHtml(albums),

                //createAlbum(prompt(\'Enter Album Name:\')) goes within the on click part of the button create id
            ]
            var btnTemplate = [
                '<button class="btn-primary" onclick="createAlbum(prompt(\'Enter Album Name:\'))" >Create New Album</button>',
            ]
            var titleTemplate = [
                '<h2>VIEWING ALBUMS</h2>',
                message,
            ]
            document.getElementById('uploadOptions').innerHTML = getHtml(titleTemplate);
            $('#directions').html(btnTemplate);
            document.getElementById('app').innerHTML = getHtml(albumTemplate);
            $('#clarifai').hide();
        };
    });
};



//View album
function viewAlbum(albumName) {
    var albumPhotosKey = encodeURIComponent(albumName) + '/';
    s3.listObjects({
        Prefix: albumPhotosKey
    }, function (err, data) {
        if (err) {
            return alert('There was an error viewing your album: ' + err.message);
        }
        console.log('data returned ', data);
        // `this` references the AWS.Response instance that represents the response
        var href = this.request.httpRequest.endpoint.href;
        console.log("href ", href);
        var bucketUrl = href + albumBucketName + '/';
        console.log("bucketUrl ", bucketUrl);

        var photos = data.Contents.map(function (photo) {
            console.log('photo ', photo);
            var photoKey = photo.Key;
            var photoUrl = bucketUrl + encodeURIComponent(photoKey);
            console.log('photo url ' + photoUrl);

            return getHtml([
                '<div class="myImg" id="' + photoUrl + '">',
                '<img style="width:124px;height:124px;" src="' + photoUrl + '"/>',
                '<div>',
                // '<img onclick="deletePhoto(\'' + albumName + "','" + photoKey + '\')" style="width:46px;height:46px;" src="./assets/images/XButton.png"/>',
                '</div>',
                '</div>',
            ]);

        });
        var message = photos.length ?
            '<p>&#9898; to Clarifai! and &#x2613; to Delete</p>' :
            '<p>You do not have any photos in this album. Please add photos.</p>';
        var htmlTemplate = [
            '<h2>',
            'ALBUM: ' + albumName.toUpperCase(),
            '</h2>',
            message,
        ]
        var photoTemplate = [
            getHtml(photos),
        ]
        var htmlTemplate2 = [
            '<input class="btn-primary" id="photoupload" type="file" accept="image/*">',
            '<button class="btn-primary" id="addphoto" onclick="addPhoto(\'' + albumName + '\')">',
            'Add Photo',
            '</button>',
            '<button class="btn-primary" onclick="listAlbums()">',
            'Back To Albums',
            '</button>',
        ]

        document.getElementById('uploadOptions').innerHTML = getHtml(htmlTemplate);
        document.getElementById('directions').innerHTML = getHtml(htmlTemplate2);
        document.getElementById('app').innerHTML = getHtml(photoTemplate);
        $('#clarifai').show();

    });
};


//Deleting a photo
function deletePhoto(albumName, photoKey) {
    s3.deleteObject({
        Key: photoKey
    }, function (err, data) {
        if (err) {
            return alert('There was an error deleting your photo: ', err.message);
        }
        alert('Successfully deleted photo.');
        viewAlbum(albumName);
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
    s3.headObject({
        Key: albumKey
    }, function (err, data) {
        if (!err) {
            return alert('Album already exists.');
        }
        if (err.code !== 'NotFound') {
            return alert('There was an error creating your album: ' + err.message);
        }
        s3.putObject({
            Key: albumKey
        }, function (err, data) {
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


function deleteAlbum(albumName) {
    var albumKey = encodeURIComponent(albumName) + '/';
    s3.listObjects({
        Prefix: albumKey
    }, function (err, data) {
        if (err) {
            return alert('There was an error deleting your album: ', err.message);
        }
        var objects = data.Contents.map(function (object) {
            return {
                Key: object.Key
            };
        });
        s3.deleteObjects({
            Delete: {
                Objects: objects,
                Quiet: true
            }
        }, function (err, data) {
            if (err) {
                return alert('There was an error deleting your album: ', err.message);
            }
            alert('Successfully deleted album.');
            listAlbums();
        });
    });
}


// 
// CLARIFAI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 
// 
// instantiate a new Clarifai app passing in your api key.
// 

// // predict the contents of an image by passing in a url


$(document).on('click', '.myImg', function (e) {
    var id = e.target.id;
    console.log('This is the id: ' + JSON.stringify(id));
    // var modelID = {
    //     "id": 'Kitchen'
    // }


    function drawPercentBar(width, percent, color, background) {
        var barhtml = "";
        var pixels = width * (percent / 100);
        if (!background) {
            background = "none";
        }

        barhtml = "<div style=\"position: relative; line-height: 1em; background-color: " +
            background + "; width: " +
            width + "%\">";

        barhtml += "<div style=\"height: 1.5em; width: " + pixels + "%; background-color: " +
            color + ";\"></div>";

        barhtml += "<div style=\"position: absolute; text-align: center; padding-top: .25em; width: " +
            width + "%; top: 0; left: 0\">" + percent + "%</div>";

        barhtml += "</div>";

        return barhtml;
    };

    //hide all photos except the one you chose and enlarge it, fit to center

    //var model = Clarifai.GENERAL_MODEL;
    //var model = "Objects",[{ "id": "kitchen" }],

    var objectmodel = {
        name: '',
        id: ''
    };
    var locationmodel = {
        name: '',
        id: ''
    };
    var conditionsmodel = {
        name: '',
        id: ''
    };


    const app = new Clarifai.App({
        apiKey: 'ec0428bd8841427da7d196f666b6c265'
    });


    //List the apps in the console 
    app.models.list().then(
        function (response) {
            // do something with response
            // console.log(response);
            locationmodel.id = JSON.stringify(response[0].id);
            locationmodel.name = JSON.stringify(response[0].name);
            conditionsmodel.id = JSON.stringify(response[1].id);
            conditionsmodel.name = JSON.stringify(response[1].name);
            objectmodel.id = JSON.stringify(response[2].id);
            objectmodel.name = JSON.stringify(response[2].name);
        },
        function (err) {
            // there was an error
            console.log(err);
        }

       // console.log(error);
    

);

app.models.get('Kitchen').then(
    function (response) {
        // do something with response
        // console.log(response);
    },
    function (err) {
        // there was an error
    }
);

app.models.predict(Clarifai.GENERAL_MODEL, [id]).then(
    function (response) {
        var data = response.outputs[0].data;
        // console.log(data);
        // console.log(data.concepts[0].name);
        // console.log(data.concepts[0].value);
        // console.log(data.concepts[1].name);
        // console.log(data.concepts[1].value);
        // console.log(data.concepts[2].name);
        // console.log(data.concepts[2].value);



        var outputTemplate = ([
            '<div>',
            '<p id=respValue0></p><h2 id="percentId0"></h2>',
            '<p id=respValue1></p><h2 id="percentId1"></h2>',
            '<p id=respValue2></p><h2 id="percentId2"></h2>',
            '<p id=respValue3></p><h2 id="percentId3"></h2>',
            '<p id=respValue4></p><h2 id="percentId4"></h2>',
            '<p id=respValue5></p><h2 id="percentId5"></h2>',
            '</div>'
        ])

        var img = ([
            '<div>',
            '<img src=' + myid + ' style="width:264px;height:264px;"/>',
            '</div>'
        ])

        document.getElementById('dataImg').innerHTML = getHtml(img);
        document.getElementById('dataDisplay').innerHTML = getHtml(outputTemplate);
        $('#respValue0').html(data.concepts[0].name);
        $('#respValue1').html(data.concepts[1].name);
        $('#respValue2').html(data.concepts[2].name);
        $('#respValue3').html(data.concepts[3].name);
        $('#respValue4').html(data.concepts[4].name);
        $('#respValue5').html(data.concepts[5].name);
        $('#percentId0').append(drawPercentBar(100, Math.round(data.concepts[0].value * 100), 'rgba(222, 224, 226, 0.6)', 'rgba(86, 125, 188, 0.6)'));
        $('#percentId1').append(drawPercentBar(100, Math.round(data.concepts[1].value * 100), 'rgba(222, 224, 226, 0.6)', 'rgba(86, 125, 188, 0.6)'));
        $('#percentId2').append(drawPercentBar(100, Math.round(data.concepts[2].value * 100), 'rgba(222, 224, 226, 0.6)', 'rgba(86, 125, 188, 0.6)'));
        $('#percentId3').append(drawPercentBar(100, Math.round(data.concepts[3].value * 100), 'rgba(222, 224, 226, 0.6)', 'rgba(86, 125, 188, 0.6)'));
        $('#percentId4').append(drawPercentBar(100, Math.round(data.concepts[4].value * 100), 'rgba(222, 224, 226, 0.6)', 'rgba(86, 125, 188, 0.6)'));
        $('#percentId5').append(drawPercentBar(100, Math.round(data.concepts[5].value * 100), 'rgba(222, 224, 226, 0.6)', 'rgba(86, 125, 188, 0.6)'));
        // $('#percentId6').append(drawPercentBar(100, Math.round(data.concepts[1].value * 100), 'rgba(222, 224, 226, 0.6)', 'none'));
        // $('#percentId0').append(Math.round(data.concepts[0].value * 100) + '%');
        // $('#percentId1').append(Math.round(data.concepts[1].value * 100) + '%');
        // $('#percentId2').append(Math.round(data.concepts[2].value * 100) + '%');
    },
    function (err) {
        console.error(err);
    }
);
});

$("#listAlbums").on("click", function () {
    listAlbums();
});

function codeHide(){
    $('.main-content').hide();
}

            $(document).on('click', '#login-btn', function () {
                $('.login-page').hide();
                $('.main-content').show()
            })
$(document).ready(function(){
    // search location modal js here
    $("#searchlocationmodalBtn").leanModal({
        top: 100,
        overlay: 0.6,
        closeButton: ".closeModal"
    });
});
            

            $('.pos-f-t').hover(function () {
                if ($(window).width() >= 1025) {
                    // $('#navbarToggleExternalContent').css('display', 'none');
                    $('.navbar-toggler-icon').removeClass('hamburger-hover-off-icon');
                    $('#navbarToggleExternalContent').removeClass('hamburger-hover-off-menu');
                    $('.navbar-toggler-icon').addClass('hamburger-hover-on-icon');
                    $('#navbarToggleExternalContent').addClass('hamburger-hover-on-menu');
                };
            }, function () {
                if ($(window).width() >= 1025) {
                    $('.navbar-toggler-icon').removeClass('hamburger-hover-on-icon');
                    $('#navbarToggleExternalContent').removeClass('hamburger-hover-on-menu');
                    $('.navbar-toggler-icon').addClass('hamburger-hover-off-icon');
                    $('#navbarToggleExternalContent').addClass('hamburger-hover-off-menu');
                };

            });
            //Geocoding google api key AIzaSyCcAYnI-_MBF2VMrCCyCbWiCxbiY1_wu3Q
            //geocoding google ajax call link https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
            //Function for search location
            function geoFindMe() {

                var output = document.getElementById("out");


                if (!navigator.geolocation) {
                    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                    return;
                }
                //Option to get data out of geoFindMe function is to take function success out of the nest.
                function success(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    console.log(latitude);
                    console.log(longitude);
                    findAddress(latitude, longitude);

                    //pass in the html element to populate the breweries
                    return {
                        latitude: latitude,
                        longitude: longitude
                    };
                }

                function error() {
                    output.innerHTML = "Unable to retrieve your location";
                }
                return navigator.geolocation.getCurrentPosition(success, error);
            }
            //create Function to findAddress
            // google locate API : AIzaSyDAW5qMvtF_zpIc0iA_agcJCts3P0RaYFs
            function findAddress() {
                var queryURLLOC = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDAW5qMvtF_zpIc0iA_agcJCts3P0RaYFs"
                $.ajax({
                    url: queryURLLOC,
                    method: "POST"
                }).done(function (response) {
                    //console.log(response);
                    let lat = response.location.lat;
                    let lon = response.location.lng;
                    console.log(lat);
                    console.log(lon);
                    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?"
                    queryURL += 'latlng=' + lat + ',' + lon + '&key=AIzaSyCcAYnI-_MBF2VMrCCyCbWiCxbiY1_wu3Q'
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).done(function (response) {
                        console.log(response);
                        let localAdd = response.results[0].formatted_address;
                        $("#addDisplay").append(localAdd);
                        $("#newAlbumBtn").show();

                        // console.log(localAdd);
                        return localAdd;
                        //note call in aws album search check
                    });
                })
            }

            function inputModal() {
                let inputDisplay = ` 
                <div id="inputForm">
	               	<label>Address</label><br>
	               	<input type="text" id="address" name="Address"><br>
	               	<label>City</label><br>
	               	<input type="text" id="city" name="City"><br>
	               	<label>State</label><br>
	               	<input type="text" id="state" name="State"><br>
	               	<label>Zip</label><br>
                    <input type="text" id="zip" name="Zip"><br>
                </div>
                <button class="btn btn-default " id="newInputBtn">Create New Album</button>
    `
                $(".modalInfo").html(inputDisplay);
            }

            $(document).on("click", "#searchlocationmodalBtn", function () {
                $("#createAlbum").hide();
                $("#addDisplay").hide();
                $("#askAlbum").hide();
            });
            $(document).on("click", "#locBtn", function () {
                let newAlbum = `<button id="newAlbumBtn" class="btn btn-default ">Create New Album</button>`;
                $(".modalInfo").append(newAlbum);
                $("#newAlbumBtn").hide();
                $("#locBtn").hide();
                $("#inputBtn").hide();
                $("#addDisplay").show();
                geoFindMe(newAlbum);
               
            });
            $(document).on("click", "#inputBtn", function () {
                $("#locBtn").hide();
                $("#inputBtn").hide();
                $("#modalTitle").empty();
                let newTitle = 'Enter address to create a new Album'
                $("#modalTitle").append(newTitle);
                inputModal();
            });

