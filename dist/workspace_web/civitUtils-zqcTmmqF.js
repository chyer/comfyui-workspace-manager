import{h as m}from"./App-qo42s2ji.js";const r="WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";function h(){return localStorage.getItem(r)}function g(e){localStorage.setItem(r,e)}function v(e){return`https://civitai.com/api/download/models/${e}`}async function w(e){var s,a,n;try{const l=`https://civitai.com/api/v1/model-versions/by-hash/${e}`,t=await(await fetch(l)).json();let i;if(await((s=m)==null?void 0:s.getSetting("showNsfwModelThumbnail"))===!0)i=(n=(a=t==null?void 0:t.images)==null?void 0:a[0])==null?void 0:n.url;else if(!t.model.nsfw){const o=t.images.find(c=>c.nsfwLevel==1);i=o==null?void 0:o.url}return{modelName:t.model.name,civitModelID:String(t.modelId),civitModelVersionID:String(t.id),imageUrl:i??void 0}}catch{return{}}}export{v as a,w as f,h as g,g as s};
