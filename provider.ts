/// <reference path="./plugin.d.ts" />
/// <reference path="./system.d.ts" />
/// <reference path="./app.d.ts" />
/// <reference path="./core.d.ts" />

function init() {
    $app.onGetAnimeDetails((e) => {
        // console.log(e.anime);
        
        e.next();
    });
}