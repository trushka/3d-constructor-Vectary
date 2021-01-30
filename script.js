import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";
let el=document.querySelector('vctr-viewer'),
    id=el.getAttribute('model');
el.id=id;

async function run() {    

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready");
        try {
          
            //Example
            const props = {
              "color": "#ff6666",
              "roughness": 0.0,
              "metalness": 1.0
            }
            console.log(await viewerApi.getMaterials())
            await viewerApi.updateMaterial("Default OBJ", props);
          
        } catch (e) {
            errHandler(e);
        }
    }

    window.viewerApi = new VctrApi(id, errHandler);

    try {
        await viewerApi.init();        
        onReady();
    } catch (e) {
        errHandler(e);
    }
}

run();