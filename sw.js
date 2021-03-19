/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","475f7a2044d828b1e20a4de42d75580f"],["/archives/2020/06/index.html","9825b4c1b1467f83c7fa2d5b10301fc7"],["/archives/2020/06/page/2/index.html","ddb96d1a0d81e73125ccc7e5690d2721"],["/archives/2020/07/index.html","a531d34db82fabaf382314b2286ba3f3"],["/archives/2020/08/index.html","ab502bcebf87ba58c8fbd30310c8ae64"],["/archives/2020/09/index.html","10a46a1d8c432941be1587b8904e3e47"],["/archives/2020/10/index.html","5a2f11e56c58862a2a1ec6cd9a4a30e1"],["/archives/2020/11/index.html","b9a4bcd3f5a49ef30dd1a14ec7c430a3"],["/archives/2020/12/index.html","f65ac40c0e6ef834858c5ffef59dcc1b"],["/archives/2020/index.html","2355eff3871e90eae57683ef56cd8673"],["/archives/2020/page/2/index.html","dd26a898b38d0ea60a2438af86254bbd"],["/archives/2020/page/3/index.html","d78b0772bc6aea7fa43d6e84305dda99"],["/archives/2020/page/4/index.html","8759b21485df07607950f52090411053"],["/archives/2021/02/index.html","8282f27db80f620316812ad0b143c0e7"],["/archives/2021/index.html","a414ed68a26af8186b49f24a0824afc8"],["/archives/index.html","99f1464fc2d121091e1f891a6cbeb431"],["/archives/page/2/index.html","93aa98e4f92d2b4d2d455d44e58bff8a"],["/archives/page/3/index.html","8c43dab503617ea6d04760dcd8f082eb"],["/archives/page/4/index.html","849ac569b0d135c676f1aa0ef8990fcd"],["/categories/Centos7/index.html","b2716e3fe356843c2a1afae163926625"],["/categories/Centos7/python/index.html","c55797a6b580bc39b686b2c569662a11"],["/categories/Hexo/index.html","f2aa79c281b23e227dc29926c6c9cd24"],["/categories/Linux/centos7/index.html","7643e191cf6677a583ab6e65ecb9407d"],["/categories/Linux/index.html","c9cdce252b641765147c2907357deffd"],["/categories/VIP培训/index.html","78dbfae9f992f41d77fcb5c84f274fbf"],["/categories/VIP培训/文章/index.html","67f6aad6fda75f2522b5461c73e35b1e"],["/categories/VPS评测/index.html","e0bdef7c1d2545fd3fbe4a71a1cbc10c"],["/categories/VPS评测/linode/index.html","fa0682c78e8e03efd239c637380e8a91"],["/categories/cn2-GT/cn2-GIA/index.html","381e0a4cb699b36ec308684c6c07bcc5"],["/categories/cn2-GT/index.html","9a37ff600f57285221b1c61c09c4d277"],["/categories/github/hexo/index.html","20abaa9830bd3f9c92a8b61651439af1"],["/categories/github/index.html","7598128a4dcd427057eb9e704d9e0ab5"],["/categories/index.html","fa74a3e606b981818de0743c11dec4a1"],["/categories/linode/index.html","08d948424568f55ce7b941bf73c4ff75"],["/categories/v2ray/index.html","d1dda9c899924610dd84ff3ed43c9ad6"],["/categories/v2ray/xray/index.html","245b20a18423e01aa9ffdd205ca79b56"],["/categories/v2ray/xray/vless/index.html","c78b7a65792497ed5884a160505e33ef"],["/categories/xtls/index.html","04a0a4f75d0acfed32789c2301a20e8e"],["/categories/xtls/vless/index.html","8c08cd844bd8f8f0ca28cf23c9a89fee"],["/categories/暗网/index.html","6d3a167df6b4465cabd2257af6b16984"],["/categories/科学上网/Brook/index.html","6d63d22f37930b328f2825766c53fd56"],["/categories/科学上网/SS/index.html","9e90010598799bfe77142b52a63c223c"],["/categories/科学上网/SSR/index.html","c2068f2dc92d0b53e26e0ad35b9eb444"],["/categories/科学上网/index.html","a5da84558c6b7a867bf4459db49a09fa"],["/categories/科学上网/page/2/index.html","9cc1b7c5bfa3db1ecdc7cf01772f64c3"],["/categories/科学上网/page/3/index.html","bc61d9e3e26e471a24c1989bb94eef90"],["/categories/科学上网/v2ray/VIp/index.html","58c61d27b5743c01cab35bdb0e6fa905"],["/categories/科学上网/v2ray/VLESS/H2C/index.html","a13ffb84c198b06a47bd0d5099e698d1"],["/categories/科学上网/v2ray/VLESS/index.html","5a33e8d37514c1bf755e76a185847e3e"],["/categories/科学上网/v2ray/index.html","a6487a5d946d7f4b7bba85f6d3fb23d7"],["/categories/科学上网/v2ray/page/2/index.html","8e2f2322cdd939114052e286bffebb62"],["/categories/科学上网/v2ray/tor/index.html","44e5646bb8c0241ac275a793d913c030"],["/categories/科学上网/v2ray/tor/洋葱/index.html","414eff7e4c3e17c2809f3ca2e7474e9e"],["/categories/科学上网/v2ray/tor/洋葱/暗网/index.html","e4295aa32a91ec35959de47ae82dfdef"],["/css/back-to-top.css","07b92b38a192c8a6b1277f331d312c75"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","2de3fb29402a1289222689b12e75efab"],["/css/style.css","153ca31b492d6a994cc5c4a045686126"],["/gallery/index.html","957d36482035f6fc60ed66d99a32d5c6"],["/images/00236.png","d0c2f8374a0e12f7634a218e28276dfe"],["/images/11.svg","78c34960b55c12a2e1286351c45358f5"],["/images/12.svg","ab6a3a9679d6dea577b64e527be86f09"],["/images/231321.png","c0c40988f5babf31dba70bccd41506a4"],["/images/313.svg","fb72c42024cd7c0948491bab1932d94f"],["/images/avatar00.png","d7ce339dcef00631f036515923e8bdc8"],["/images/avatar000.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/images/avatar11.png","90e2d9c990ce8087c22075d6a738f66b"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/index.html","8f661aab6ec98310f7d6ebf73f81a477"],["/js/animation.js","a9be5fafc20f2d9e38e097a40c5c7261"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/gallery.js","49d37ed4228b2e4d5536960c8d07f3d2"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","31459bb1857cb20c05f8b3251058c9eb"],["/js/sakura-app.js","769959570d305be4c606d1cc3675eb10"],["/lib/blog-encrypt.js","b5012c5bb408583c96a32031da7b9809"],["/media/index.html","e630bd28b6ad0a603a7e93da703815b2"],["/news/index.html","947ef3e3b5f2fe62946e36a949e9f5d0"],["/page/10/index.html","d69d407fc4a9a5bc313ee1950ae85afe"],["/page/11/index.html","7b5813c0cd68070b727a4c9b93afd0ef"],["/page/12/index.html","b21b3af4b577eb83cbbc269b2b535255"],["/page/13/index.html","94957ac7ca045b227fbd7fe7923a61f2"],["/page/2/index.html","5a3989ecd3330f60852737cc45e04207"],["/page/3/index.html","19b1862e32e1044ba9ba9142f0bab4ed"],["/page/4/index.html","4481b91417a5c961dbc16a0bd6a4cd92"],["/page/5/index.html","33c67d8128816d223307da77843bf23e"],["/page/6/index.html","45612ac6f4bea610e090f70b10e310fd"],["/page/7/index.html","00991840c774d2b7e8e952ec55dc22e2"],["/page/8/index.html","3c7e4122ab4bddd58b68ee6fc5cdb983"],["/page/9/index.html","dea742ba569f2b131ba52e00e6c1beb1"],["/posts/10db3eaa.html","63a6fee03dbaa90466987fa6becb7266"],["/posts/1f0583f5.html","7bf891aec597436fd6358eed1fccfb00"],["/posts/20b4bacc.html","dc17e3b9db8bf942258e3b69de026c00"],["/posts/2241288e.html","8983f8f06bfbd6a017e65c6cac441513"],["/posts/231b7e32.html","1ce72ff8fd919147b7869e390c9764b4"],["/posts/2c29ed7c.html","1432a06be31f83a150758aead35e01b1"],["/posts/333e5d3b.html","5d4204e029c84b66a845c47f828761f7"],["/posts/3828c730.html","3a334bf6baa3f70a1405a5ef61fc53d8"],["/posts/3ba3d10d.html","12914d355e69c3cc4e5f74a9fba0a965"],["/posts/3ca6a39e.html","415f7df0534d0488ee7683dc9970133b"],["/posts/3e3bccee.html","de70f44c6e358782b379fd05fc40161e"],["/posts/401d9e3d.html","f87ee6fdfe5910f3c01dd517a3c8c60c"],["/posts/43d67d1c.html","1805063ab8dacd1585c7ab4d59b656c0"],["/posts/480cd265.html","5dab025d0d1ba72f1b5737d010cbd6ff"],["/posts/4b7bc44c.html","bf25fdaf52a57ff7f142d83d43c82e25"],["/posts/4d9f9d52.html","a018287808a94392d0a9cab049434294"],["/posts/4ec269e1.html","1f4006902f6cc1861292bc92f421bcd5"],["/posts/54c2b25c.html","4f44262896c21f557211ad6b2ac47aa6"],["/posts/5b02b57f.html","e5a4db2f7283a2d00a725314fca56496"],["/posts/65f94be0.html","4d37157f76ce9dc2b0fd051fc37a5ee1"],["/posts/70b5ad4f.html","36b3a83a9f6a2b99038115c4d0771e0f"],["/posts/7a3b89dc.html","c5a15616e3054b636029a4afce2c7014"],["/posts/80f65055.html","46fbf6fe35414764b5fd5a1762ec435b"],["/posts/8189ee31.html","bbcf22065c62210542b0e45b21960c98"],["/posts/87f1021.html","59c39d67b8886996161a5722e3ae0ac7"],["/posts/93baa7dd.html","b364b717cbde119f363b1ae102cead36"],["/posts/a555f893.html","c8be133776c3d195b14c59dafc2bb80e"],["/posts/a7318cf9.html","6c858cfba8177d29e8fc4412ee61d0e3"],["/posts/a8ffa798.html","8da64ef0b10ef48f0456afbbc5ca90a8"],["/posts/b7316760.html","4c274e30b14021a98571c49d6373ccab"],["/posts/b75d3efe.html","f55a6f8d3a51035405c48a7001c17083"],["/posts/b93a8b04.html","f199cf41dfa4b8486735b2181711f65b"],["/posts/bec9b908.html","ce368032c68c2d306fd761a044f24488"],["/posts/c695a206.html","33067e67a0c1762a6fc4c7d36a00a373"],["/posts/cf6ba610.html","f195de6c60965525c0767d0d484a4ece"],["/posts/d2834d54.html","e805e14be93f86cc2dfc62f9fae0ab69"],["/posts/ea53a251.html","9715dfc26dc5176a3f9ebdd08d769918"],["/posts/f3e24172.html","fa13734e87dee84f0310d359ae858d4e"],["/posts/ff417afe.html","cff59de63dca466751413887db0be42a"],["/sw-register.js","57fa29fd5cee6b8ac19a92f239724b1a"],["/tags/Brook/index.html","8a920038a8880e14172c2b89ce58749a"],["/tags/H2C/index.html","354cb5b51f84e33a479f1352279dd847"],["/tags/SS/index.html","ecc70542ca206b1fdbde495641157284"],["/tags/SSR/index.html","f796c0f3ed887ceaad7fe3109de74c63"],["/tags/VIP/index.html","60477f90a8e1e861c8795754c92580f1"],["/tags/VPS评测/index.html","62847fcd1f8fe57bf3bff29eec7d6af8"],["/tags/cn2-GIA/index.html","e12041376c8e5df3f232cc6835ca1452"],["/tags/cn2-GT/index.html","3f7da83e499f419518b8af2a4a707f12"],["/tags/github/index.html","59dd85fe5ff5cd9dfc0cd46b5954afd2"],["/tags/hexo/index.html","d0da38fa0c5925a304a72d4295d2fca9"],["/tags/index.html","c46bb0106fe46b28c016db0b8069f23f"],["/tags/linode/index.html","19f0ce056ef2b537b6b08a84e60190e9"],["/tags/linux/index.html","5667fbab6bb7e105ef383718317d114a"],["/tags/python/index.html","ad817a8e3593268719b2a2601f089a3d"],["/tags/tor/index.html","2a804905ee294d970063e2f384fe1da1"],["/tags/v2ray/index.html","6e91b19f83a2df4cb79612265f3b0f90"],["/tags/v2ray/page/2/index.html","be9d6b8581bff52c456916b865aa74b4"],["/tags/v2ray/page/3/index.html","f5c23a7d89ff92cf16a2ddae65bb5a01"],["/tags/vless/index.html","cb31ecfb22daefbe568cf0b05d9aeb91"],["/tags/xray/index.html","b8fc2bb47baed3ac23cde03b56ee9f1a"],["/tags/xtls/index.html","d3697e3a50dc91d50fcfe1c581f14ca6"],["/tags/中转/index.html","8a869699b73cbdd471d7f3c941b7674f"],["/tags/大数据/index.html","682408579cd1e3d9943384c54cd4999d"],["/tags/定时重启/index.html","885fb2c14653db50051c33e77b0411ec"],["/tags/暗网/index.html","722698753e0fe6c06004bc5af2c33417"],["/tags/服务器/index.html","3bf718da8af9a74a403ed6307b52e4cb"],["/tags/洋葱/index.html","167c75d966790cb047ab078b5e449a0a"],["/tags/科学上网/index.html","4ca51f95a2d02c4356ed3b09559838f1"],["/tags/翻墙/index.html","ee7c18d7e528757cd48850e9d4e23706"],["/tags/通知/index.html","43eb1fb86ee23bad5efd9dd0f830aec0"],["/tags/防火墙/index.html","b909b016c6d6e92253ec5521f4545337"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
