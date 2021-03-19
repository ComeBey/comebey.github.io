/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d5624edda68628017e4d9b4d39a4d262"],["/archives/2020/06/index.html","7c86910fa885246e3e1d4270d3a7f5e2"],["/archives/2020/06/page/2/index.html","78ac957b3073d70809dfcc86a7059a5c"],["/archives/2020/07/index.html","22962a35af855c159c1bb26efec2d018"],["/archives/2020/08/index.html","0885f70a4d6f12b0894ebe7b6d8e1b5d"],["/archives/2020/09/index.html","f2525e31f579d82e3cade6d6f5521fa7"],["/archives/2020/10/index.html","d650f198b6941db19495f0420b898768"],["/archives/2020/11/index.html","abf164b3cb5f1602fbe71d522f06e68f"],["/archives/2020/12/index.html","b8fe4bf7848aa7e71b636ad4c3bda7ef"],["/archives/2020/index.html","9a9acc9aa47f70ba9111fd0ebb0c605f"],["/archives/2020/page/2/index.html","2c41b4e77e839c805f880b4ee9b5415b"],["/archives/2020/page/3/index.html","14bb727f9ff1a2a21739c1365a1f3ba7"],["/archives/2020/page/4/index.html","caed8538690bde30b28e19aa9ecae653"],["/archives/2021/02/index.html","4f81976ca888f98b4f28051ce60cd42a"],["/archives/2021/index.html","2b79764dd355e5a05188fa0154447be9"],["/archives/index.html","f3c6cc01f113aad7e651292994194d34"],["/archives/page/2/index.html","8f116e3ac063f76d9c889c6858f5aa0b"],["/archives/page/3/index.html","f96b7011c12168c07025d00c2847547e"],["/archives/page/4/index.html","e35a125911ceb9d4ca050df97c5bb7eb"],["/categories/Centos7/index.html","76cd7d0f7f573a6a227f55640fabb9a5"],["/categories/Centos7/python/index.html","32c89726b6609ff9c26cb1e0984b5744"],["/categories/Hexo/index.html","f127ebbcb9c9a1d2426ef79fe139e1fc"],["/categories/Linux/centos7/index.html","69a8da5cd43c2c431bd829c749a43d82"],["/categories/Linux/index.html","807badf8fc549a1f692b1e4d2d56dc22"],["/categories/VIP培训/index.html","e68a521a471444ac0c2493154e5666ad"],["/categories/VIP培训/文章/index.html","4a5bdcc8fb99f3ac5befd841cbdc91dd"],["/categories/VPS评测/index.html","d1c07f6726bb39c0b0946596a3e3f24e"],["/categories/VPS评测/linode/index.html","305ac7cc09930098c9b85f8b1ea74100"],["/categories/cn2-GT/cn2-GIA/index.html","c47a8aa6740f69908a146363a6a74260"],["/categories/cn2-GT/index.html","742432a4ea8dc8bf5ef4de96690f680a"],["/categories/github/hexo/index.html","e8a16dd576f1019b469e31df4cdb1849"],["/categories/github/index.html","ec3a87b0582e542a67cf7c6f0026a447"],["/categories/index.html","e646ee31a38f53b8bafadbcf460041d2"],["/categories/linode/index.html","d1fcd08f8245d94622c199f369f6e852"],["/categories/v2ray/index.html","753802cf908768ba630f6ac1ccbe6a4f"],["/categories/v2ray/xray/index.html","0dba985b3cb9e0e8b1721357db6c12f1"],["/categories/v2ray/xray/vless/index.html","51b03d9098baa2118b59f3ec0582d46d"],["/categories/xtls/index.html","c8e1b1c45e02eb84f59d9784567e99b5"],["/categories/xtls/vless/index.html","3d020f6d382219e13fd4c618c993d238"],["/categories/暗网/index.html","997d82409fec4a0b665d1b7f6b26202d"],["/categories/科学上网/Brook/index.html","7e55ea2e1c66f784b5972792fce3f5a4"],["/categories/科学上网/SS/index.html","11796eeda9da4890148e7bf14bc37d3f"],["/categories/科学上网/SSR/index.html","6f1eb024f8a6100508596904f248f92b"],["/categories/科学上网/index.html","eb11e4a04451d54ae104124ce30eee7c"],["/categories/科学上网/page/2/index.html","64278170a8d84f09941d1384131236a0"],["/categories/科学上网/page/3/index.html","4ca16ecec3a99e7de630abf383b66f47"],["/categories/科学上网/v2ray/VIp/index.html","749c3e8d08af212ae192bbf739c646b4"],["/categories/科学上网/v2ray/VLESS/H2C/index.html","88e020e312f08a87641b88e1a00b2d26"],["/categories/科学上网/v2ray/VLESS/index.html","b9c1d3b22c75e86c938a09761e8c3b4d"],["/categories/科学上网/v2ray/index.html","df9dc36e7282949190a715915e14cf60"],["/categories/科学上网/v2ray/page/2/index.html","dc6db82a3f7167bcb9a45e8d483afe9d"],["/categories/科学上网/v2ray/tor/index.html","ab1222e194a1b4d64d7f1a8e77c7d4d2"],["/categories/科学上网/v2ray/tor/洋葱/index.html","cb69905f32d9cd066e5737dd9d11e299"],["/categories/科学上网/v2ray/tor/洋葱/暗网/index.html","4576c0e557fca0957743d7654bbdbb1c"],["/css/back-to-top.css","07b92b38a192c8a6b1277f331d312c75"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/insight.css","205755754637b723fae96c6c40622230"],["/css/progressbar.css","bf4b3eb4d2b9683e9bad95f36e88efe9"],["/css/search.css","2de3fb29402a1289222689b12e75efab"],["/css/style.css","153ca31b492d6a994cc5c4a045686126"],["/gallery/index.html","32950781c6b71b323ca43f01af231991"],["/images/00236.png","d0c2f8374a0e12f7634a218e28276dfe"],["/images/11.svg","78c34960b55c12a2e1286351c45358f5"],["/images/12.svg","ab6a3a9679d6dea577b64e527be86f09"],["/images/231321.png","c0c40988f5babf31dba70bccd41506a4"],["/images/313.svg","fb72c42024cd7c0948491bab1932d94f"],["/images/avatar00.png","d7ce339dcef00631f036515923e8bdc8"],["/images/avatar000.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/images/avatar11.png","90e2d9c990ce8087c22075d6a738f66b"],["/images/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/images/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/index.html","509d1b709c01bace14b815b666f9ba83"],["/js/animation.js","a9be5fafc20f2d9e38e097a40c5c7261"],["/js/back-to-top.js","c2ce6f5cb6e89b35fdd8c1fc25a9668f"],["/js/gallery.js","49d37ed4228b2e4d5536960c8d07f3d2"],["/js/insight.js","4fc742a9cf94f22db87bd41ba89902ba"],["/js/main.js","31459bb1857cb20c05f8b3251058c9eb"],["/js/sakura-app.js","769959570d305be4c606d1cc3675eb10"],["/lib/blog-encrypt.js","b5012c5bb408583c96a32031da7b9809"],["/media/index.html","0d721833afb9b9d5082a2a34c08ba612"],["/news/index.html","168cf10cbf01b45bb3e5e9aefc18978c"],["/page/10/index.html","d98256c42059a8f4f153a4d9c48dd36c"],["/page/11/index.html","1ca3df3498ed8edb4f9aa8a10d2fca79"],["/page/12/index.html","bbd1c1584f8a7cb5f94b46f879e87487"],["/page/13/index.html","5840d070e47085571fec335192213009"],["/page/2/index.html","a39d51a3ea01038d81067e7d7f992ff8"],["/page/3/index.html","07fd8aa9313816e009a410863891f50d"],["/page/4/index.html","2a42f0250eccfd94501cfae9b49d71e5"],["/page/5/index.html","726dde2dcd1b182ae371a21a0c97c4b2"],["/page/6/index.html","ec51a30a9b51a1939ea71a0a7010be4d"],["/page/7/index.html","08283ca290be668822bb8267376427dd"],["/page/8/index.html","92b6080d456b2105a1c7a696839fd2dd"],["/page/9/index.html","23ce29841966960126eb316639e0cb37"],["/posts/10db3eaa.html","46ba6a2acd2b18923e97f7d8276dfaa4"],["/posts/1f0583f5.html","28d4f6cf91baa2603688efabb0016232"],["/posts/20b4bacc.html","6561a95bd81357e12750411b2ff6f76d"],["/posts/2241288e.html","ebd279bf4573413ccaa675ee3d5b11a9"],["/posts/231b7e32.html","2f5072e0e5fb134381431a514ae44049"],["/posts/2c29ed7c.html","02005fa0a16d13d6ac48ac3d9dab843b"],["/posts/333e5d3b.html","d832aed2ca1909aae0aeb2b15f22c64c"],["/posts/3828c730.html","fbafa601e8b9787029c7d27c141020e2"],["/posts/3ba3d10d.html","4f8d8617a82da749635baf87ed934288"],["/posts/3ca6a39e.html","b96fa05a7fa64dd3a9360e15fcb8b2f7"],["/posts/3e3bccee.html","2211315c77f131aaf8c13ecf4b30c845"],["/posts/401d9e3d.html","74552f009116b7514a5345ebbc0f2fdc"],["/posts/43d67d1c.html","d4b50e0e9b8d6fe0fb4125d1ce188d1c"],["/posts/480cd265.html","24156fdd215b3fdd99583146bca1a295"],["/posts/4b7bc44c.html","825b1a42ec90d7311b387fcd5318bc72"],["/posts/4d9f9d52.html","733a5d0de0ad63e6fbfcd910cb8d2f9b"],["/posts/4ec269e1.html","0f69e58bab1983fc8ae7b5c6a8b67645"],["/posts/54c2b25c.html","8afe73e72334903a3941a2299bc5efd0"],["/posts/5b02b57f.html","d6dcbc57689d7328e2f2bc209367c7ca"],["/posts/65f94be0.html","8da4e5c8ee8faaa6c39b8c00752691d9"],["/posts/70b5ad4f.html","16fa84c79d88412f5dae26a225c4dc7e"],["/posts/7a3b89dc.html","bb97e0a706269889c40c2f8cbcf34081"],["/posts/80f65055.html","7f5aff91814490154b5db16b856d79b9"],["/posts/8189ee31.html","7378fc107e6464b1a8879df7237422f8"],["/posts/87f1021.html","c9b47a7e8a23c57221a0076c87e4b6b3"],["/posts/93baa7dd.html","2969d954aceb1d1335a61e916013ae8f"],["/posts/a555f893.html","ac9515f5e491f3ef2486a55835276385"],["/posts/a7318cf9.html","734f39aaea56d23f406dc6172c343975"],["/posts/a8ffa798.html","e2560dc851723449f086c6db3ab199e9"],["/posts/b7316760.html","af0eab35a4172c76bae15b2c00a6f46a"],["/posts/b75d3efe.html","3ab1a6a2271048f434fed23bf582ad86"],["/posts/b93a8b04.html","c76f74e019752a723fa258c73bc5add5"],["/posts/bec9b908.html","1b4c4d0fb58caf58979a21ce965f629f"],["/posts/c695a206.html","adfef64928aa9b296437eab2e94a79af"],["/posts/cf6ba610.html","5f67701bc6f3e778fd0d29ceac9fc1a2"],["/posts/d2834d54.html","028ad032da6657d78d56fbf382a94d87"],["/posts/ea53a251.html","cf0d4ef3f637db539f18a7024c347bc7"],["/posts/f3e24172.html","d4266f560566c946ab2cfa0c4be4b281"],["/posts/ff417afe.html","2e2727b283f5e5f4f229f1602ed664df"],["/sw-register.js","128ed06f60489cc1b832849bd69e3e51"],["/tags/Brook/index.html","0b28bef1826be5ea50d77f748af3b818"],["/tags/H2C/index.html","1e02cdfa525d95e302b16525c987cb50"],["/tags/SS/index.html","6a660db47f47fead3325eed6cbc5a474"],["/tags/SSR/index.html","7a31c2b4b21768cf9bbfe6342d9594fd"],["/tags/VIP/index.html","3fa2346c8e21fc446571dd70190bbe47"],["/tags/VPS评测/index.html","0c7a7c27b9df0be66c80dd6be56ce72c"],["/tags/cn2-GIA/index.html","ec8388e7d9388ad2c0d34a0ef01fac0a"],["/tags/cn2-GT/index.html","11ee2395e52dfbabe8d4d28acb02c9e0"],["/tags/github/index.html","4899dd4b3451d234660c96ac76c81871"],["/tags/hexo/index.html","5c6cf09751266e28831c56fd40d7347a"],["/tags/index.html","971028b023b83526996988b2afd96ac1"],["/tags/linode/index.html","321f968933062a270560845fecfd7093"],["/tags/linux/index.html","04f6dab4b00e517ce66cc7ff7b00a6de"],["/tags/python/index.html","c19de9c37e057eaf336ed901dd852015"],["/tags/tor/index.html","a92b133c8ff22fbe11e3a9fee7b036cd"],["/tags/v2ray/index.html","9e1c8b621380dea323b3f7e94e503791"],["/tags/v2ray/page/2/index.html","dbec145e7fb6b853553838241f1de6de"],["/tags/v2ray/page/3/index.html","579e2b890a70c74e7b4a8cabb872bfff"],["/tags/vless/index.html","aa6792bbc3db954e0d8e0c9e3e07349b"],["/tags/xray/index.html","44e7d00f0cef2f6e251d86b8c7de3575"],["/tags/xtls/index.html","f5b9249e13c8066498a3d9ea5ab6407a"],["/tags/中转/index.html","36aa7e125146f6c7709e00b946d845cc"],["/tags/大数据/index.html","ca8e6f9bceb4d231e34f0e44372fa096"],["/tags/定时重启/index.html","21e75c699151d170f5096a0549cded6c"],["/tags/暗网/index.html","18fc8bc4affdd0da32c69cea170bea6b"],["/tags/服务器/index.html","ae7fb6a0b82236169c05b11e0c1ebb69"],["/tags/洋葱/index.html","ce98214b0a9e327863fd25ead6dbb833"],["/tags/科学上网/index.html","2fabb0be2c5ed7b6eb5fc927df510ced"],["/tags/翻墙/index.html","4c46c09f282042eeca609c84ee7188aa"],["/tags/通知/index.html","e2d1b55c9689cf579f66c5b17213fae9"],["/tags/防火墙/index.html","e9b3000427176fbf88ae402e24902bc4"]];
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



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.some.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.some-else.org"});





/* eslint-enable */
