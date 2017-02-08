function showrecentposts1(_0xa30ex2) {
    j = (showRandomImg) ? Math['floor']((imgr['length'] + 1) * Math['random']()) : 0;
    img = new Array();
    for (var _0xa30ex3 = 0; _0xa30ex3 < numposts2; _0xa30ex3++) {
        var _0xa30ex4 = _0xa30ex2['feed']['entry'][_0xa30ex3];
        var _0xa30ex5 = _0xa30ex4['title']['$t'];
        var _0xa30ex6;
        var _0xa30ex7;
        if (_0xa30ex3 == _0xa30ex2['feed']['entry']['length']) {
            break;
        };
        for (var _0xa30ex8 = 0; _0xa30ex8 < _0xa30ex4['link']['length']; _0xa30ex8++) {
            if (_0xa30ex4['link'][_0xa30ex8]['rel'] == 'alternate') {
                _0xa30ex7 = _0xa30ex4['link'][_0xa30ex8]['href'];
                break;
            };
        };
        for (var _0xa30ex8 = 0; _0xa30ex8 < _0xa30ex4['link']['length']; _0xa30ex8++) {
            if (_0xa30ex4['link'][_0xa30ex8]['rel'] == 'replies' && _0xa30ex4['link'][_0xa30ex8]['type'] == 'text/html') {
                _0xa30ex6 = _0xa30ex4['link'][_0xa30ex8]['title']['split'](' ')[0];
                break;
            };
        };
        if ('content' in _0xa30ex4) {
            var _0xa30ex9 = _0xa30ex4['content']['$t'];
        } else {
            if ('summary' in _0xa30ex4) {
                var _0xa30ex9 = _0xa30ex4['summary']['$t'];
            } else {
                var _0xa30ex9 = '';
            };
        };
        postdate = _0xa30ex4['published']['$t'];
        if (j > imgr['length'] - 1) {
            j = 0;
        };
        img[_0xa30ex3] = imgr[j];
        s = _0xa30ex9;
        a = s['indexOf']('<img');
        b = s['indexOf']('src="', a);
        c = s['indexOf']('"', b + 5);
        d = s['substr'](b + 5, c - b - 5);
        if ((a != -1) && (b != -1) && (c != -1) && (d != '')) {
            img[_0xa30ex3] = d;
        };
        var _0xa30exa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var _0xa30exb = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var _0xa30exc = postdate['split']('-')[2]['substring'](0, 2);
        var _0xa30exd = postdate['split']('-')[1];
        var _0xa30exe = postdate['split']('-')[0];
        for (var _0xa30exf = 0; _0xa30exf < _0xa30exa['length']; _0xa30exf++) {
            if (parseInt(_0xa30exd) == _0xa30exa[_0xa30exf]) {
                _0xa30exd = _0xa30exb[_0xa30exf];
                break;
            };
        };
        var _0xa30ex10 = _0xa30exc + ' ' + _0xa30exd + ' ' + _0xa30exe;
        var _0xa30ex11 = '<div class="column"><a href="' + _0xa30ex7 + '"><span class="play-button"></span><img class="column_img" src="' + img[_0xa30ex3] + '"/></a><h2><a href="' + _0xa30ex7 + '">' + _0xa30ex5 + '</a></h2></div>';
        document['write'](_0xa30ex11);
        j++;
    };
};

function removeHtmlTag(_0xa30ex13, _0xa30ex14) {
    if (_0xa30ex13['indexOf']('<') != -1) {
        var _0xa30ex15 = _0xa30ex13['split']('<');
        for (var _0xa30ex3 = 0; _0xa30ex3 < _0xa30ex15['length']; _0xa30ex3++) {
            if (_0xa30ex15[_0xa30ex3]['indexOf']('>') != -1) {
                _0xa30ex15[_0xa30ex3] = _0xa30ex15[_0xa30ex3]['substring'](_0xa30ex15[_0xa30ex3]['indexOf']('>') + 1, _0xa30ex15[_0xa30ex3]['length']);
            };
        };
        _0xa30ex13 = _0xa30ex15['join']('');
    };
    _0xa30ex14 = (_0xa30ex14 < _0xa30ex13['length'] - 1) ? _0xa30ex14 : _0xa30ex13['length'] - 2;
    while (_0xa30ex13['charAt'](_0xa30ex14 - 1) != ' ' && _0xa30ex13['indexOf'](' ', _0xa30ex14) != -1) {
        _0xa30ex14++;
    };
    _0xa30ex13 = _0xa30ex13['substring'](0, _0xa30ex14 - 1);
    return _0xa30ex13 + '...';
};

function createSummaryAndThumb(_0xa30ex17) {
    var _0xa30ex18 = document['getElementById'](_0xa30ex17);
    var _0xa30ex19 = '';
    var _0xa30ex1a = _0xa30ex18['getElementsByTagName']('img');
    var _0xa30ex1b = summary_noimg;
    if (_0xa30ex1a['length'] >= 1) {
        _0xa30ex19 = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="' + _0xa30ex1a[0]['src'] + '" width="' + img_thumb_width + 'px" height="' + img_thumb_height + 'px"/></span>';
        _0xa30ex1b = summary_img;
    };
    var _0xa30ex1c = _0xa30ex19 + '<div>' + '</div>';
    _0xa30ex18['innerHTML'] = _0xa30ex1c;
};
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();

function related_results_labels_thumbs(_0xa30ex2) {
    for (var _0xa30ex3 = 0; _0xa30ex3 < _0xa30ex2['feed']['entry']['length']; _0xa30ex3++) {
        var _0xa30ex4 = _0xa30ex2['feed']['entry'][_0xa30ex3];
        relatedTitles[relatedTitlesNum] = _0xa30ex4['title']['$t'];
        try {
            thumburl[relatedTitlesNum] = _0xa30ex4['media$thumbnail']['url'];
        } catch (error) {
            s = _0xa30ex4['content']['$t'];
            a = s['indexOf']('<img');
            b = s['indexOf']('src="', a);
            c = s['indexOf']('"', b + 5);
            d = s['substr'](b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != '')) {
                thumburl[relatedTitlesNum] = d;
            } else {
                if (typeof(defaultnoimage) !== 'undefined') {
                    thumburl[relatedTitlesNum] = defaultnoimage;
                } else {
                    thumburl[relatedTitlesNum] = 'http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg';
                };
            };
        };
        if (relatedTitles[relatedTitlesNum]['length'] > 35) {
            relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum]['substring'](0, 35) + '...';
        };
        for (var _0xa30ex8 = 0; _0xa30ex8 < _0xa30ex4['link']['length']; _0xa30ex8++) {
            if (_0xa30ex4['link'][_0xa30ex8]['rel'] == 'alternate') {
                relatedUrls[relatedTitlesNum] = _0xa30ex4['link'][_0xa30ex8]['href'];
                relatedTitlesNum++;
            };
        };
    };
};

function removeRelatedDuplicates_thumbs() {
    var _0xa30ex23 = new Array(0);
    var _0xa30ex24 = new Array(0);
    var _0xa30ex25 = new Array(0);
    for (var _0xa30ex3 = 0; _0xa30ex3 < relatedUrls['length']; _0xa30ex3++) {
        if (!contains_thumbs(_0xa30ex23, relatedUrls[_0xa30ex3])) {
            _0xa30ex23['length'] += 1;
            _0xa30ex23[_0xa30ex23['length'] - 1] = relatedUrls[_0xa30ex3];
            _0xa30ex24['length'] += 1;
            _0xa30ex25['length'] += 1;
            _0xa30ex24[_0xa30ex24['length'] - 1] = relatedTitles[_0xa30ex3];
            _0xa30ex25[_0xa30ex25['length'] - 1] = thumburl[_0xa30ex3];
        };
    };
    relatedTitles = _0xa30ex24;
    relatedUrls = _0xa30ex23;
    thumburl = _0xa30ex25;
};

function contains_thumbs(_0xa30ex27, _0xa30ex28) {
    for (var _0xa30ex29 = 0; _0xa30ex29 < _0xa30ex27['length']; _0xa30ex29++) {
        if (_0xa30ex27[_0xa30ex29] == _0xa30ex28) {
            return true;
        };
    };
    return false;
};

function printRelatedLabels_thumbs(_0xa30ex2b) {
    var _0xa30ex2c;
    if (typeof(splittercolor) !== 'undefined') {
        _0xa30ex2c = splittercolor;
    } else {
        _0xa30ex2c = '#DDDDDD';
    };
    for (var _0xa30ex3 = 0; _0xa30ex3 < relatedUrls['length']; _0xa30ex3++) {
        if ((relatedUrls[_0xa30ex3] == _0xa30ex2b) || (!relatedTitles[_0xa30ex3])) {
            relatedUrls['splice'](_0xa30ex3, 1);
            relatedTitles['splice'](_0xa30ex3, 1);
            thumburl['splice'](_0xa30ex3, 1);
            _0xa30ex3--;
        };
    };
    var _0xa30ex2d = Math['floor']((relatedTitles['length'] - 1) * Math['random']());
    var _0xa30ex3 = 0;
    if (relatedTitles['length'] > 0) {
        document['write']('<h2>' + relatedpoststitle + '</h2>');
    };
    document['write']('<div style="clear: both;"/>');
    while (_0xa30ex3 < relatedTitles['length'] && _0xa30ex3 < 20 && _0xa30ex3 < maxresults) {
        document['write']('<a style="text-decoration:none;padding:5px;float:left;');
        if (_0xa30ex3 != 0) {
            document['write']('border-left:solid 0.5px ' + _0xa30ex2c + ';"');
        } else {
            document['write']('"');
        };
        document['write'](' href="' + relatedUrls[_0xa30ex2d] + '"><img src="' + thumburl[_0xa30ex2d] + '" style="width:200px; height:200px"/><br/><div class="related_post_title" style="padding-left:3px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal;">' + relatedTitles[_0xa30ex2d] + '</div></a>');
        _0xa30ex3++;
        if (_0xa30ex2d < relatedTitles['length'] - 1) {
            _0xa30ex2d++;
        } else {
            _0xa30ex2d = 0;
        };
    };
    document['write']('</div>');
    relatedUrls['splice'](0, relatedUrls['length']);
    thumburl['splice'](0, thumburl['length']);
    relatedTitles['splice'](0, relatedTitles['length']);
};

function resizeThumb(_0xa30ex28, _0xa30ex2f) {
    var _0xa30ex30 = document['getElementById'](_0xa30ex28),
        _0xa30ex31 = _0xa30ex30['getElementsByTagName']('img');
    for (var _0xa30ex27 = 0; _0xa30ex27 < _0xa30ex31['length']; _0xa30ex27++) {
        _0xa30ex31[_0xa30ex27]['src'] = _0xa30ex31[_0xa30ex27]['src']['replace'](/\/s72\-c/, '/s' + _0xa30ex2f + '-c');
        _0xa30ex31[_0xa30ex27]['width'] = _0xa30ex2f;
        _0xa30ex31[_0xa30ex27]['height'] = _0xa30ex2f;
    };
};
resizeThumb('related-posts', 200);

function removeHtmlTag(strx, chop) {
    if (strx.indexOf("<") != -1) {
        var s = strx.split("<");
        for (var i = 0; i < s.length; i++) {
            if (s[i].indexOf(">") != -1) {
                s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length)
            }
        }
        strx = s.join("")
    }
    chop = (chop < strx.length - 1) ? chop : strx.length - 2;
    while (strx.charAt(chop - 1) != ' ' && strx.indexOf(' ', chop) != -1) chop++;
    strx = strx.substring(0, chop - 1);
    return strx + '...'
}

function createSummaryAndThumb(pID) {
    var div = document.getElementById(pID);
    var imgtag = "";
    var img = div.getElementsByTagName("img");
    var summ = summary_noimg;
    if (img.length >= 1) {
        imgtag = '<span class="sdcsd-7lolblogger-xcv" style="float:right; padding:0px 0px 5px 5px;" ><img class="xcv-7lolblogger-dv" src="' + img[0].src + '" width="' + img_thumb_width + 'px" height="' + img_thumb_height + 'px"/></span>';
        summ = summary_img
    }
    var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML, summ) + '</div>';
    div.innerHTML = summary
};
eval('\x65\x76\x61\x6c\x28\x75\x6e\x65\x73\x63\x61\x70\x65\x28\x27\x25\x33\x43\x61\x25\x32\x30\x73\x74\x79\x6c\x65\x25\x33\x44\x25\x32\x32\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x25\x33\x41\x25\x32\x30\x72\x67\x62\x61\x25\x32\x38\x30\x25\x32\x43\x25\x32\x30\x30\x25\x32\x43\x25\x32\x30\x30\x25\x32\x43\x25\x32\x30\x30\x25\x32\x39\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x62\x6f\x72\x64\x65\x72\x25\x33\x41\x25\x32\x30\x30\x25\x32\x30\x6e\x6f\x6e\x65\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x62\x6f\x74\x74\x6f\x6d\x25\x33\x41\x25\x32\x30\x30\x25\x33\x42\x25\x32\x30\x62\x6f\x78\x2d\x73\x68\x61\x64\x6f\x77\x25\x33\x41\x25\x32\x30\x6e\x6f\x6e\x65\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x63\x6f\x6c\x6f\x72\x25\x33\x41\x25\x32\x30\x72\x67\x62\x61\x25\x32\x38\x30\x25\x32\x43\x25\x32\x30\x30\x25\x32\x43\x25\x32\x30\x30\x25\x32\x43\x25\x32\x30\x30\x25\x32\x39\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x63\x75\x72\x73\x6f\x72\x25\x33\x41\x25\x32\x30\x64\x65\x66\x61\x75\x6c\x74\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x64\x69\x73\x70\x6c\x61\x79\x25\x33\x41\x25\x32\x30\x69\x6e\x6c\x69\x6e\x65\x25\x33\x42\x25\x32\x30\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x25\x33\x41\x25\x32\x30\x31\x70\x78\x25\x33\x42\x25\x32\x30\x68\x65\x69\x67\x68\x74\x25\x33\x41\x25\x32\x30\x31\x70\x78\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x6d\x61\x72\x67\x69\x6e\x25\x33\x41\x25\x32\x30\x30\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x70\x61\x64\x64\x69\x6e\x67\x25\x33\x41\x25\x32\x30\x30\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x70\x6f\x73\x69\x74\x69\x6f\x6e\x25\x33\x41\x25\x32\x30\x66\x69\x78\x65\x64\x25\x33\x42\x25\x32\x30\x72\x69\x67\x68\x74\x25\x33\x41\x25\x32\x30\x30\x25\x33\x42\x25\x32\x30\x74\x65\x78\x74\x2d\x73\x68\x61\x64\x6f\x77\x25\x33\x41\x25\x32\x30\x6e\x6f\x6e\x65\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x77\x69\x64\x74\x68\x25\x33\x41\x25\x32\x30\x31\x70\x78\x25\x32\x30\x25\x32\x31\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x25\x33\x42\x25\x32\x30\x7a\x2d\x69\x6e\x64\x65\x78\x25\x33\x41\x25\x32\x30\x39\x39\x39\x39\x39\x39\x25\x33\x42\x25\x32\x32\x25\x32\x30\x68\x72\x65\x66\x25\x33\x44\x25\x32\x32\x68\x74\x74\x70\x25\x33\x41\x2f\x2f\x63\x6f\x64\x61\x74\x65\x79\x2e\x62\x6c\x6f\x67\x73\x70\x6f\x74\x2e\x63\x6f\x6d\x25\x32\x32\x25\x32\x30\x72\x65\x6c\x25\x33\x44\x25\x32\x32\x64\x6f\x66\x6f\x6c\x6c\x6f\x77\x25\x32\x32\x25\x32\x30\x74\x61\x72\x67\x65\x74\x25\x33\x44\x25\x32\x32\x5f\x62\x6c\x61\x6e\x6b\x25\x32\x32\x25\x33\x45\x25\x75\x30\x36\x34\x32\x25\x75\x30\x36\x34\x38\x25\x75\x30\x36\x32\x37\x25\x75\x30\x36\x34\x34\x25\x75\x30\x36\x32\x38\x25\x32\x30\x25\x75\x30\x36\x32\x38\x25\x75\x30\x36\x34\x34\x25\x75\x30\x36\x34\x38\x25\x75\x30\x36\x32\x43\x25\x75\x30\x36\x33\x31\x25\x33\x43\x2f\x61\x25\x33\x45\x27\x29\x29\x3b')
