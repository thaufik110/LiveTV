    const streams = {
        "video1": "http://op-group1-swiftservehd-1.dens.tv/h/h217/02.m3u8",
        "video2": "http://op-group1-swiftservehd-1.dens.tv/h/h207/02.m3u8",
        "video3": "http://op-group1-swiftservehd-1.dens.tv/h/h211/02.m3u8",
        "video4": "http://op-group1-swiftservehd-1.dens.tv/h/h223/02.m3u8",
        "video5": "http://op-group1-swiftservehd-1.dens.tv/h/h217/02.m3u8",
        "video6": "http://example.com/path/to/mnctv.m3u8",
        "video7": "http://example.com/path/to/inews.m3u8",
        "video8": "http://example.com/path/to/antv.m3u8",
        "video9": "http://example.com/path/to/indosiar.m3u8",
        "video10": "http://example.com/path/to/nettv.m3u8"
    };
    
    Object.keys(streams).forEach(id => {
        const stream = streams[id];
        const video = document.getElementById(id);
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(stream);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = stream;
            video.addEventListener('canplay', function () {
                video.play();
            });
        }
    });
     