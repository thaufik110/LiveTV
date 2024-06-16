document.addEventListener('DOMContentLoaded', function() {
    const streams = {
        "antv": "http://op-group1-swiftservehd-1.dens.tv/h/h235/02.m3u8",
        "indosiar": "http://op-group1-swiftservehd-1.dens.tv/h/h207/02.m3u8",
        "metrotv": "http://rr.dens.tv/h/h12/index.m3u8",
        "nettv": "http://op-group1-swiftservehd-1.dens.tv/h/h223/02.m3u8",
        "sctv": "http://op-group1-swiftservehd-1.dens.tv/h/h217/02.m3u8",
        "tvn": "http://op-group1-swiftservehd-1.dens.tv/h/h215/02.m3u8",
        "tvnmovies": "http://op-group1-swiftservehd-1.dens.tv/h/h214/02.m3u8",
        "k+": "http://op-group1-swiftservehd-1.dens.tv/h/h219/02.m3u8",
        "kompastv": "http://op-group1-swiftservehd-1.dens.tv/h/h234/02.m3u8",
        "bsqa": "http://vzagut73.megogo.xyz/iptv/5WS4WSUFCCHGQF/6124/index.m3u8",
        "bsxt": "http://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5df975e2b27cf5000921c102/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus",
        "rtv": "http://210.210.155.35/session/d63bb414-30c3-11e9-b5a0-c81f66f89318/uq2663/h/h10/01.m3u8",
        "tvone": "https://op-group1-swiftservehd-1.dens.tv/h/h224/index.m3u8",
        "mojitv": "http://rr3.dens.tv/s/s41/index.m3u8",
        "cnbc": "https://www.cnbcindonesia.com/embed/tv?smartautoplay=true&comscore=off",
        "ntv": "https://nusantaratv.siar.us/nusantaratv/live/chunks.m3u8",
        "cnn": "https://www.cnnindonesia.com/tv/embed?smartautoplay=true",
        "garudatv": "https://etv-cdn.kdb.co.id/GarudaTV-Stream/tracks-v1a1/mono.m3u8",
        "mycinema": "http://210.210.155.37/uq2663/h/h192/index.m3u8",
        "mycinemaasia": "http://210.210.155.37/uq2663/h/h193/index.m3u8",
        "redbulltv": "http://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_1660.m3u8",
        "abckids": "https://c.mjh.nz/abc-kids.m3u8",
        "motoamerica": "https://1422977263.rsc.cdn77.org/HLS/MOTOAMERICA_SCTE.m3u8",
        "dreamwork": "http://aflaxtv.xyz:8080/2c258a9b/c73f1cfbce/157610",
        "magnatv" : "https://edge.medcom.id/live-edge/smil:magna.smil/chunklist_w657754957_b3884000_sleng.m3u8",
        "skysport" : "https://live.sportsnews.id/p/sky-251.html"
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
            video.addEventListener('loadedmetadata', function () {
                video.play();
            });
        }
    });
});
