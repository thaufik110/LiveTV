<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXOStreaming</title>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet" type="text/css" />
    <script src="js/relogio.js" defer></script>
    <script src="js/script.js" defer></script>
    <script src="js/chat.js" defer></script>
    <style>
        .popup {
            position: fixed;
            bottom: 70px;
            right: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            max-width: 250px;
            display: none;
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        .open-chat-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            z-index: 1000;
        }
        .open-chat-btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
            <h1>CNN Indonesia</h1>
            <iframe allow="encrypted-media" allowfullscreen="" frameborder="1" gesture="media" height="200" marginheight="0px" marginwidth="0px" name="streaming 14" referrerpolicy="no-referrer" sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation" scrolling="no" src="https://www.cnnindonesia.com/tv/embed?smartautoplay=true" style="border: 0px #ffffff none;" width="100%"></iframe>
            <div id="Reloginho" class="relogio"></div>
        <?php 
        include "button.php"
        ?>
    </div>
    <button id="openChat" class="open-chat-btn">Chat</button>

    <div id="chatPopup" class="popup">
        <span class="close" id="closeChat">&times;</span>
        <h2>Live Chat</h2>
        <iframe src="https://www5.cbox.ws/box/?boxid=951580&boxtag=htCEkU" width="100%" height="100" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe> <!-- Adjusted height -->
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <?php 
        include "iklan.php"
        ?>
</body>
</html>