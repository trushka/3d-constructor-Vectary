//import  "https://www.vectary.com/viewer/v1/scripts/vctr-viewer.js";
import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";
const materialName='Default OBJ', //the name of the material to be changed

    bar=document.querySelector('.texturebar');

    //const 
function errHandler(err) {
    console.log("API error", err);
}
window.viewerApi = new VctrApi('vctr', errHandler);

try {
    viewerApi.init()
    .then(()=>{
        bar.classList.remove('hidden');
        return viewerApi.load();
    }).then(()=>{
        bar.classList.remove('disabled');
        bar.addEventListener( 'click', function(e){
            var targ=e.target;
            viewerApi.updateMaterial(materialName, {map: new URL(targ.dataset.src, location.href)})
            viewerApi.setUUIDAr(targ.dataset.ar_id);
       }, true )
    });
    console.log("API ready");
} catch (e) {
    errHandler(e);
}